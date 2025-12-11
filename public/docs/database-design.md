---

## 📁 **docs/architecture/database-design.md**

```markdown
# Healthcare Appointment System - Database Design

## Table of Contents
1. [Overview](#overview)
2. [Database Schema](#database-schema)
3. [Entity Relationship Diagram](#entity-relationship-diagram)
4. [Table Descriptions](#table-descriptions)
5. [Indexes and Constraints](#indexes-and-constraints)
6. [Data Types and Conventions](#data-types-and-conventions)
7. [Performance Considerations](#performance-considerations)
8. [Migration Strategy](#migration-strategy)

## Overview

The database is designed following normalization principles while maintaining query performance. We use MySQL 8.0 as our primary database with specific considerations for healthcare data compliance and scalability.

### Design Principles
- **Data Integrity**: Foreign key constraints and check constraints
- **Audit Trail**: All tables include created_at and updated_at
- **Soft Deletes**: Logical deletion with deleted_at field
- **UUID Primary Keys**: For distributed system compatibility
- **JSON Fields**: For flexible, schema-less data where appropriate

## Database Schema

### Core Tables Structure

```sql
-- Users table (base authentication)
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('PATIENT', 'DOCTOR', 'ADMIN', 'STAFF') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    email_verified BOOLEAN DEFAULT FALSE,
    email_verified_at TIMESTAMP NULL,
    last_login_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    INDEX idx_email (email),
    INDEX idx_role (role),
    INDEX idx_active_users (is_active, deleted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Patient profiles
CREATE TABLE patient_profiles (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    alternate_phone VARCHAR(20),
    blood_type VARCHAR(5),
    height DECIMAL(5,2),
    weight DECIMAL(5,2),
    allergies JSON,
    chronic_conditions JSON,
    current_medications JSON,
    emergency_contact JSON NOT NULL,
    address JSON NOT NULL,
    insurance_info JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_patient_name (first_name, last_name),
    INDEX idx_patient_phone (phone_number)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Doctor profiles
CREATE TABLE doctor_profiles (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    sub_specializations JSON,
    qualification VARCHAR(255) NOT NULL,
    experience_years INT NOT NULL,
    license_number VARCHAR(50) UNIQUE NOT NULL,
    license_expiry DATE NOT NULL,
    consultation_fee DECIMAL(10,2) NOT NULL,
    rating DECIMAL(3,2) DEFAULT 0.00,
    total_reviews INT DEFAULT 0,
    languages JSON NOT NULL,
    education JSON NOT NULL,
    awards JSON,
    publications JSON,
    hospital_affiliations JSON,
    availability_status ENUM('AVAILABLE', 'BUSY', 'OFFLINE') DEFAULT 'OFFLINE',
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_doctor_name (first_name, last_name),
    INDEX idx_specialization (specialization),
    INDEX idx_rating (rating DESC),
    INDEX idx_availability (availability_status),
    FULLTEXT idx_doctor_search (first_name, last_name, specialization, bio)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Appointments
CREATE TABLE appointments (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    booking_reference VARCHAR(20) UNIQUE NOT NULL,
    patient_id VARCHAR(36) NOT NULL,
    doctor_id VARCHAR(36) NOT NULL,
    appointment_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    consultation_type ENUM('VIDEO', 'IN_PERSON') NOT NULL,
    status ENUM('SCHEDULED', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'NO_SHOW') NOT NULL DEFAULT 'SCHEDULED',
    reason_for_visit TEXT,
    symptoms JSON,
    is_first_visit BOOLEAN DEFAULT FALSE,
    priority ENUM('REGULAR', 'URGENT', 'EMERGENCY') DEFAULT 'REGULAR',
    fee DECIMAL(10,2) NOT NULL,
    payment_status ENUM('PENDING', 'PAID', 'REFUNDED') DEFAULT 'PENDING',
    cancellation_reason TEXT,
    cancelled_by VARCHAR(36),
    cancelled_at TIMESTAMP NULL,
    rescheduled_from VARCHAR(36),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES patient_profiles(id),
    FOREIGN KEY (doctor_id) REFERENCES doctor_profiles(id),
    FOREIGN KEY (cancelled_by) REFERENCES users(id),
    FOREIGN KEY (rescheduled_from) REFERENCES appointments(id),
    INDEX idx_patient_appointments (patient_id, appointment_date),
    INDEX idx_doctor_appointments (doctor_id, appointment_date),
    INDEX idx_appointment_date (appointment_date),
    INDEX idx_appointment_status (status),
    INDEX idx_appointment_datetime (appointment_date, start_time),
    UNIQUE KEY uk_doctor_slot (doctor_id, appointment_date, start_time, status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Consultations
CREATE TABLE consultations (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    appointment_id VARCHAR(36) NOT NULL UNIQUE,
    session_id VARCHAR(100) UNIQUE,
    room_url VARCHAR(500),
    start_time TIMESTAMP NULL,
    end_time TIMESTAMP NULL,
    actual_duration INT, -- in minutes
    chief_complaint TEXT,
    history_of_present_illness TEXT,
    past_medical_history TEXT,
    examination_findings TEXT,
    diagnosis JSON,
    treatment_plan TEXT,
    follow_up_required BOOLEAN DEFAULT FALSE,
    follow_up_date DATE,
    doctor_notes TEXT,
    patient_feedback JSON,
    recording_url VARCHAR(500),
    prescription_issued BOOLEAN DEFAULT FALSE,
    medical_certificate_issued BOOLEAN DEFAULT FALSE,
    referrals JSON,
    vital_signs JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (appointment_id) REFERENCES appointments(id),
    INDEX idx_consultation_date (start_time)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Prescriptions
CREATE TABLE prescriptions (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    prescription_number VARCHAR(20) UNIQUE NOT NULL,
    consultation_id VARCHAR(36) NOT NULL,
    patient_id VARCHAR(36) NOT NULL,
    doctor_id VARCHAR(36) NOT NULL,
    diagnosis_summary TEXT NOT NULL,
    medications JSON NOT NULL,
    lab_tests JSON,
    advice TEXT,
    diet_instructions TEXT,
    next_visit_date DATE,
    is_draft BOOLEAN DEFAULT FALSE,
    digital_signature TEXT,
    signed_at TIMESTAMP NULL,
    pdf_url VARCHAR(500),
    qr_code VARCHAR(500),
    pharmacy_notes TEXT,
    dispensed BOOLEAN DEFAULT FALSE,
    dispensed_at TIMESTAMP NULL,
    valid_until DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (consultation_id) REFERENCES consultations(id),
    FOREIGN KEY (patient_id) REFERENCES patient_profiles(id),
    FOREIGN KEY (doctor_id) REFERENCES doctor_profiles(id),
    INDEX idx_prescription_patient (patient_id),
    INDEX idx_prescription_doctor (doctor_id),
    INDEX idx_prescription_date (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Medical Records
CREATE TABLE medical_records (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    patient_id VARCHAR(36) NOT NULL,
    uploaded_by VARCHAR(36) NOT NULL,
    record_type ENUM('LAB_REPORT', 'XRAY', 'MRI', 'CT_SCAN', 'ULTRASOUND', 'ECG', 'PRESCRIPTION', 'DISCHARGE_SUMMARY', 'OTHER') NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    file_url VARCHAR(500) NOT NULL,
    file_size BIGINT NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    record_date DATE NOT NULL,
    metadata JSON,
    tags JSON,
    is_archived BOOLEAN DEFAULT FALSE,
    shared_with JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES patient_profiles(id),
    FOREIGN KEY (uploaded_by) REFERENCES users(id),
    INDEX idx_record_patient (patient_id),
    INDEX idx_record_type (record_type),
    INDEX idx_record_date (record_date),
    FULLTEXT idx_record_search (title, description)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Payments
CREATE TABLE payments (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    transaction_id VARCHAR(100) UNIQUE NOT NULL,
    appointment_id VARCHAR(36) NOT NULL,
    patient_id VARCHAR(36) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    payment_method ENUM('CARD', 'NET_BANKING', 'UPI', 'WALLET', 'INSURANCE') NOT NULL,
    payment_gateway ENUM('STRIPE', 'RAZORPAY', 'PAYPAL') NOT NULL,
    gateway_transaction_id VARCHAR(255),
    status ENUM('PENDING', 'PROCESSING', 'SUCCESS', 'FAILED', 'REFUNDED', 'PARTIALLY_REFUNDED') NOT NULL,
    failure_reason TEXT,
    refund_amount DECIMAL(10,2),
    refund_reason TEXT,
    refunded_at TIMESTAMP NULL,
    gateway_response JSON,
    invoice_number VARCHAR(50),
    invoice_url VARCHAR(500),
    receipt_url VARCHAR(500),
    metadata JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (appointment_id) REFERENCES appointments(id),
    FOREIGN KEY (patient_id) REFERENCES patient_profiles(id),
    INDEX idx_payment_appointment (appointment_id),
    INDEX idx_payment_patient (patient_id),
    INDEX idx_payment_status (status),
    INDEX idx_payment_date (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Doctor Schedule / Time Slots
CREATE TABLE time_slots (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    doctor_id VARCHAR(36) NOT NULL,
    day_of_week ENUM('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY') NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    slot_duration INT DEFAULT 30, -- in minutes
    consultation_type ENUM('VIDEO', 'IN_PERSON', 'BOTH') DEFAULT 'BOTH',
    max_bookings INT DEFAULT 1,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (doctor_id) REFERENCES doctor_profiles(id) ON DELETE CASCADE,
    INDEX idx_doctor_schedule (doctor_id, day_of_week),
    UNIQUE KEY uk_doctor_slot_time (doctor_id, day_of_week, start_time, end_time)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Doctor Unavailability
CREATE TABLE doctor_unavailability (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    doctor_id VARCHAR(36) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    reason VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (doctor_id) REFERENCES doctor_profiles(id) ON DELETE CASCADE,
    INDEX idx_doctor_unavailable (doctor_id, start_date, end_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Reviews and Ratings
CREATE TABLE reviews (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    appointment_id VARCHAR(36) NOT NULL UNIQUE,
    patient_id VARCHAR(36) NOT NULL,
    doctor_id VARCHAR(36) NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    is_anonymous BOOLEAN DEFAULT FALSE,
    doctor_response TEXT,
    doctor_responded_at TIMESTAMP NULL,
    helpful_count INT DEFAULT 0,
    reported BOOLEAN DEFAULT FALSE,
    report_reason TEXT,
    status ENUM('PENDING', 'APPROVED', 'REJECTED') DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (appointment_id) REFERENCES appointments(id),
    FOREIGN KEY (patient_id) REFERENCES patient_profiles(id),
    FOREIGN KEY (doctor_id) REFERENCES doctor_profiles(id),
    INDEX idx_review_doctor (doctor_id),
    INDEX idx_review_rating (rating),
    INDEX idx_review_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Notifications
CREATE TABLE notifications (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36) NOT NULL,
    type ENUM('APPOINTMENT_REMINDER', 'APPOINTMENT_CONFIRMED', 'APPOINTMENT_CANCELLED', 'PRESCRIPTION_READY', 'TEST_RESULT', 'PAYMENT_SUCCESS', 'PAYMENT_FAILED', 'GENERAL') NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    data JSON,
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMP NULL,
    priority ENUM('LOW', 'MEDIUM', 'HIGH', 'URGENT') DEFAULT 'MEDIUM',
    action_url VARCHAR(500),
    expires_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_notification_user (user_id, is_read),
    INDEX idx_notification_created (created_at DESC),
    INDEX idx_notification_type (type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Audit Logs
CREATE TABLE audit_logs (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id VARCHAR(36),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id VARCHAR(36),
    old_values JSON,
    new_values JSON,
    ip_address VARCHAR(45),
    user_agent VARCHAR(500),
    metadata JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_audit_user (user_id),
    INDEX idx_audit_entity (entity_type, entity_id),
    INDEX idx_audit_action (action),
    INDEX idx_audit_created (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



Table Descriptions
Users Table
Core authentication table storing login credentials and basic user information. Uses role-based access control with ENUM values.
Patient Profiles
Extended profile information for patients including medical history, emergency contacts, and insurance details. Uses JSON fields for flexible data storage.
Doctor Profiles
Comprehensive doctor information including qualifications, specializations, and availability status. Includes full-text search capability.
Appointments
Central table for appointment management with support for scheduling, rescheduling, and cancellation tracking.
Consultations
Records actual consultation details including diagnosis, treatment plans, and vital signs. Links to prescriptions and recordings.
Prescriptions
Digital prescription management with support for multiple medications, digital signatures, and QR codes for verification.
Medical Records
Document management for various medical files with metadata and sharing capabilities.
Payments
Transaction tracking with support for multiple payment gateways and refund management.
Time Slots
Defines doctor availability patterns by day of week with configurable slot durations.
Reviews
Patient feedback system with moderation capabilities and doctor response features.
Notifications
Multi-channel notification tracking with read status and expiration support.
Audit Logs
Comprehensive audit trail for compliance and security monitoring.



Indexes and Constraints
Primary Indexes

All tables use UUID primary keys for distributed system compatibility
Composite indexes on frequently queried column combinations
Full-text indexes for search functionality

Foreign Key Constraints

CASCADE delete for dependent records
SET NULL for audit references
Referential integrity enforced at database level

Check Constraints

Rating values between 1-5
Appointment time validations
Status ENUM validations

Unique Constraints

Email addresses
License numbers
Booking references
Time slot conflicts

Data Types and Conventions
Naming Conventions

Tables: Plural, snake_case (e.g., patient_profiles)
Columns: Singular, snake_case (e.g., first_name)
Indexes: idx_ prefix (e.g., idx_patient_name)
Foreign Keys: _id suffix (e.g., user_id)

Data Types

IDs: VARCHAR(36) for UUIDs
Strings: VARCHAR with appropriate lengths
Text: TEXT for unlimited length
Money: DECIMAL(10,2)
JSON: For flexible, schema-less data
Timestamps: TIMESTAMP with timezone

JSON Field Usage
json// Example: allergies field
{
  "food": ["peanuts", "shellfish"],
  "medication": ["penicillin"],
  "environmental": ["pollen", "dust"],
  "severity": {
    "peanuts": "severe",
    "penicillin": "moderate"
  }
}

// Example: medications in prescription
[
  {
    "name": "Amoxicillin",
    "dosage": "500mg",
    "frequency": "3 times daily",
    "duration": "7 days",
    "instructions": "Take with food",
    "quantity": 21
  }
]
Performance Considerations
Query Optimization

Covering Indexes: Include all columns needed for common queries
Composite Indexes: Order columns by selectivity
Partial Indexes: For specific query patterns
Index Hints: Force index usage when needed

Partitioning Strategy
sql-- Partition appointments by year-month
ALTER TABLE appointments
PARTITION BY RANGE (YEAR(appointment_date) * 100 + MONTH(appointment_date)) (
    PARTITION p_2024_01 VALUES LESS THAN (202402),
    PARTITION p_2024_02 VALUES LESS THAN (202403),
    -- ... more partitions
    PARTITION p_future VALUES LESS THAN MAXVALUE
);
Archival Strategy

Move completed appointments older than 1 year to archive tables
Compress medical records older than 2 years
Purge notifications older than 6 months

Migration Strategy
Version Control
Using Flyway for database migrations:
sql-- V1__create_users_table.sql
CREATE TABLE users (...);

-- V2__create_profiles_tables.sql
CREATE TABLE patient_profiles (...);
CREATE TABLE doctor_profiles (...);

-- V3__add_appointments.sql
CREATE TABLE appointments (...);
Rollback Procedures
Each migration includes corresponding rollback scripts:
sql-- U1__drop_users_table.sql
DROP TABLE IF EXISTS users;
Data Migration
For existing systems:

Export data from legacy system
Transform to new schema
Validate data integrity
Import in batches
Verify consistency