# System Architecture

## Overview
The Healthcare Appointment System follows a microservices architecture...

## Components
1. Frontend (React.js)
2. API Gateway (Nginx)
3. Backend Services (Spring Boot)
4. Database (MySQL)
5. Cache (Redis)
6. Message Queue (RabbitMQ)

## Data Flow
[Include architecture diagrams]

## Security Architecture
- JWT Authentication
- HTTPS everywhere
- Data encryption


# Healthcare Appointment System - System Architecture

## Table of Contents
1. [Overview](#overview)
2. [Architecture Principles](#architecture-principles)
3. [System Components](#system-components)
4. [Technology Stack](#technology-stack)
5. [Data Flow](#data-flow)
6. [Security Architecture](#security-architecture)
7. [Scalability Design](#scalability-design)
8. [Deployment Architecture](#deployment-architecture)

## Overview

The Healthcare Appointment System is designed as a modern, scalable web application following microservices architecture principles. The system enables patients to book appointments, conduct video consultations, manage prescriptions, and maintain medical records digitally.

### Key Architectural Decisions
- **Microservices Architecture**: Enables independent scaling and deployment
- **API-First Design**: All functionality exposed through RESTful APIs
- **Event-Driven Communication**: Asynchronous processing for non-critical operations
- **Cloud-Native**: Designed for containerized deployment

## Architecture Principles

### 1. Separation of Concerns
- **Frontend**: Pure presentation layer (React.js)
- **API Gateway**: Single entry point for all client requests
- **Backend Services**: Business logic separated by domain
- **Data Layer**: Independent data stores per service

### 2. High Availability
- Load balancing across multiple instances
- Database replication
- Redis clustering for cache
- Auto-scaling based on metrics

### 3. Security First
- JWT-based authentication
- HTTPS everywhere
- Data encryption at rest and in transit
- HIPAA compliance considerations

## System Components

### Frontend Layer

┌─────────────────────────────────────────┐
│          React.js Application           │
├─────────────────────────────────────────┤
│ • Single Page Application (SPA)         │
│ • Redux for State Management            │
│ • Material-UI Components                │
│ • WebRTC for Video Calls               │
│ • Socket.io for Real-time Updates      │
└─────────────────────────────────────────┘

### API Gateway Layer
┌─────────────────────────────────────────┐
│         NGINX / Spring Cloud Gateway    │
├─────────────────────────────────────────┤
│ • Request Routing                       │
│ • Load Balancing                        │
│ • Rate Limiting                         │
│ • SSL Termination                       │
│ • CORS Handling                         │
└─────────────────────────────────────────┘

### Microservices Layer
┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│   User      │ Appointment │Consultation │  Payment    │Notification │
│  Service    │  Service    │  Service    │  Service    │  Service    │
├─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│Spring Boot  │Spring Boot  │Spring Boot  │Spring Boot  │Spring Boot  │
│JWT Auth     │Scheduling   │WebRTC       │Stripe/Razorpay│Email/SMS │
│User Mgmt    │Slot Mgmt    │Recording    │Invoicing    │Push Notif   │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘

### Data Layer
┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
│   MySQL     │   Redis     │  RabbitMQ   │    MinIO    │ Elasticsearch│
├─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│Primary DB   │Cache Layer  │Message Queue│Object Store │Search/Analytics│
│Transactions │Sessions     │Async Events │Files/Images │Logs/Metrics │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘

## Technology Stack

### Frontend
- **Framework**: React.js 18.x
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI v5
- **Build Tool**: Webpack 5 / Vite
- **Testing**: Jest, React Testing Library
- **Real-time**: Socket.io Client
- **Video**: WebRTC, Simple-peer

### Backend
- **Framework**: Spring Boot 3.x
- **Language**: Java 17
- **API**: RESTful (Spring Web)
- **Security**: Spring Security + JWT
- **Database ORM**: Spring Data JPA / Hibernate
- **Caching**: Spring Cache + Redis
- **Messaging**: Spring AMQP + RabbitMQ
- **Documentation**: SpringDoc OpenAPI

### Infrastructure
- **Container**: Docker
- **Orchestration**: Kubernetes
- **CI/CD**: GitHub Actions / Jenkins
- **Monitoring**: Prometheus + Grafana
- **Logging**: ELK Stack
- **API Gateway**: NGINX / Kong
- **Service Mesh**: Istio (optional)

## Data Flow

### 1. Appointment Booking Flow

User → React App → API Gateway → Auth Service → Appointment Service
↓              ↓
Redis Cache    MySQL DB
↓
Notification Queue → Email/SMS

### 2. Video Consultation Flow
Patient ←WebRTC→ Doctor
↓               ↓
Consultation Service
↓
Recording Service → S3/MinIO Storage

### 3. Prescription Flow
Doctor → Prescription Service → Database
↓
PDF Generator → Storage
↓
Notification → Patient

## Security Architecture

### Authentication & Authorization
- **JWT Tokens**: Stateless authentication
- **Refresh Tokens**: Secure token rotation
- **Role-Based Access Control (RBAC)**: PATIENT, DOCTOR, ADMIN, STAFF
- **OAuth 2.0**: Social login support

### Data Security
- **Encryption at Rest**: AES-256 for sensitive data
- **Encryption in Transit**: TLS 1.3
- **Database Encryption**: Transparent Data Encryption (TDE)
- **File Encryption**: Client-side encryption for medical records

### API Security
- **Rate Limiting**: Prevent DDoS attacks
- **CORS Policy**: Whitelist allowed origins
- **Input Validation**: Prevent SQL injection, XSS
- **API Versioning**: Backward compatibility

### Compliance
- **HIPAA**: Health data privacy
- **GDPR**: EU data protection
- **Audit Logging**: All data access logged
- **Data Retention**: Configurable policies

## Scalability Design

### Horizontal Scaling
```yaml
# Kubernetes Deployment Example
apiVersion: apps/v1
kind: Deployment
metadata:
  name: appointment-service
spec:
  replicas: 3  # Scale based on load
  template:
    spec:
      containers:
      - name: appointment-service
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"