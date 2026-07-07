import React, { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import {
  FiGithub,
  FiStar,
  FiUsers,
  FiGitBranch,
  FiMapPin,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';

// 🔧 Your GitHub username
const GHS_USERNAME = 'yasirunadeeshaa';

// 🔧 Optional social links (set to null to hide any of these)
const GHS_LINKS = {
  linkedin: 'https://linkedin.com/in/yasiru-nadeesha-aththanayaka',
  email: 'a.y.nadeeshaaththanayaka@gmail.com',
  hackerrank: 'https://www.hackerrank.com/yasiru_20232389',
};

// Language -> accent color mapping (falls back to purple if not listed)
const LANG_COLORS = {
  JavaScript: '#e879a0',
  TypeScript: '#38bdf8',
  Java: '#f59e0b',
  Python: '#34d399',
  HTML: '#e879a0',
  CSS: '#7c8cf8',
  PHP: '#a78bfa',
};

// 🔧 How many years of contribution history to show (stacked, most recent first)
const GHS_YEARS_TO_SHOW = 2;

const currentYear = new Date().getFullYear();
const GHS_YEARS = Array.from({ length: GHS_YEARS_TO_SHOW }, (_, i) => currentYear - i);

// Sums up the repo counts across the top languages (used for percentages)
const langTotal = (langs) => langs.reduce((sum, l) => sum + l.count, 0);

// Builds a CSS conic-gradient string so the donut can be drawn with pure CSS,
// no charting library required.
const buildDonutGradient = (langs) => {
  const total = langTotal(langs);
  if (!total) return 'var(--ghs-purple)';

  let cursor = 0;
  const stops = langs.map((lang) => {
    const color = LANG_COLORS[lang.name] || '#7c8cf8';
    const start = (cursor / total) * 360;
    cursor += lang.count;
    const end = (cursor / total) * 360;
    return `${color} ${start}deg ${end}deg`;
  });

  return `conic-gradient(${stops.join(', ')})`;
};

export default function GitHubStatsWidget() {
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);
  const [topLangs, setTopLangs] = useState([]);
  const [pinnedRepo, setPinnedRepo] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let isMounted = true;

    async function fetchAll() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GHS_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GHS_USERNAME}/repos?per_page=100&sort=updated`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        const totalStars = reposData.reduce(
          (sum, repo) => sum + (repo.stargazers_count || 0),
          0
        );

        // Tally language usage across all public repos
        const langTally = {};
        reposData.forEach((repo) => {
          if (repo.language) {
            langTally[repo.language] = (langTally[repo.language] || 0) + 1;
          }
        });
        const sortedLangs = Object.entries(langTally)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({ name, count }));

        // Pick the most-starred repo as the "featured" one
        const featured = [...reposData]
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)[0];

        if (isMounted) {
          setProfile({
            name: userData.name,
            avatar: userData.avatar_url,
            bio: userData.bio,
            location: userData.location,
            htmlUrl: userData.html_url,
          });
          setStats({
            repos: userData.public_repos,
            followers: userData.followers,
            stars: totalStars,
          });
          setTopLangs(sortedLangs);
          setPinnedRepo(
            featured
              ? {
                  name: featured.name,
                  description: featured.description,
                  url: featured.html_url,
                  stars: featured.stargazers_count,
                  language: featured.language,
                }
              : null
          );
          setStatus('ready');
        }
      } catch (err) {
        if (isMounted) setStatus('error');
      }
    }

    fetchAll();
    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <div className="ghs-card">
      <style>{`
        .ghs-card {
          --ghs-bg: #080c14;
          --ghs-purple: #7c8cf8;
          --ghs-pink: #e879a0;
          --ghs-blue: #38bdf8;
          --ghs-green: #34d399;

          position: relative;
          background: var(--ghs-bg);
          border: 1px solid color-mix(in srgb, var(--ghs-purple) 25%, transparent);
          border-radius: 4px;
          padding: 1.75rem;
          clip-path: polygon(
            0 0,
            calc(100% - 18px) 0,
            100% 18px,
            100% 100%,
            18px 100%,
            0 calc(100% - 18px)
          );
          font-family: 'DM Sans', sans-serif;
          color: #ffffff;
          overflow: hidden;
        }

        .ghs-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top right,
            color-mix(in srgb, var(--ghs-purple) 12%, transparent),
            transparent 60%
          );
          pointer-events: none;
        }

        /* Profile header */
        .ghs-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .ghs-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid color-mix(in srgb, var(--ghs-purple) 50%, transparent);
          flex-shrink: 0;
          object-fit: cover;
        }

        .ghs-avatar-skeleton {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--ghs-purple) 15%, #0d1420);
          flex-shrink: 0;
        }

        .ghs-profile-text { min-width: 0; }

        .ghs-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.3rem;
          font-weight: 400;
          margin: 0 0 0.15rem 0;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #ffffff;
        }

        .ghs-title svg {
          color: var(--ghs-purple);
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .ghs-bio {
          font-size: 0.82rem;
          color: color-mix(in srgb, #ffffff 65%, transparent);
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ghs-location {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: color-mix(in srgb, #ffffff 50%, transparent);
          margin-top: 0.25rem;
        }

        /* Stats row */
        .ghs-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .ghs-stat {
          background: color-mix(in srgb, var(--ghs-purple) 6%, #0d1420);
          border: 1px solid color-mix(in srgb, var(--ghs-purple) 15%, transparent);
          padding: 0.85rem 0.5rem;
          text-align: center;
          border-radius: 2px;
        }

        .ghs-stat-icon { font-size: 1.1rem; margin-bottom: 0.35rem; }

        .ghs-stat:nth-child(1) .ghs-stat-icon { color: var(--ghs-blue); }
        .ghs-stat:nth-child(2) .ghs-stat-icon { color: var(--ghs-pink); }
        .ghs-stat:nth-child(3) .ghs-stat-icon { color: var(--ghs-green); }

        .ghs-stat-value { font-size: 1.3rem; font-weight: 700; line-height: 1.1; }

        .ghs-stat-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: color-mix(in srgb, #ffffff 55%, transparent);
          margin-top: 0.2rem;
        }

        /* Top languages */
        .ghs-section-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: color-mix(in srgb, #ffffff 50%, transparent);
          margin: 0 0 0.6rem 0;
          position: relative;
          z-index: 1;
        }

        .ghs-langs {
          display: flex;
          align-items: center;
          gap: 1.4rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }

        .ghs-donut {
          width: 108px;
          height: 108px;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ghs-donut-hole {
          width: 66px;
          height: 66px;
          border-radius: 50%;
          background: var(--ghs-bg);
          border: 1px solid color-mix(in srgb, var(--ghs-purple) 20%, transparent);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .ghs-donut-total {
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.1;
        }

        .ghs-donut-total-label {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: color-mix(in srgb, #ffffff 55%, transparent);
        }

        .ghs-legend {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
          min-width: 140px;
        }

        .ghs-legend-row {
          display: grid;
          grid-template-columns: 10px 1fr auto;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.78rem;
        }

        .ghs-legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .ghs-legend-name {
          color: color-mix(in srgb, #ffffff 80%, transparent);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ghs-legend-pct {
          color: color-mix(in srgb, #ffffff 55%, transparent);
          font-variant-numeric: tabular-nums;
        }

        /* Featured repo */
        .ghs-featured {
          display: block;
          background: color-mix(in srgb, var(--ghs-purple) 6%, #0d1420);
          border: 1px solid color-mix(in srgb, var(--ghs-purple) 15%, transparent);
          border-radius: 2px;
          padding: 0.9rem 1rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
          text-decoration: none;
          color: inherit;
        }

        .ghs-featured-name {
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--ghs-blue);
          margin-bottom: 0.3rem;
        }

        .ghs-featured-desc {
          font-size: 0.78rem;
          color: color-mix(in srgb, #ffffff 65%, transparent);
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ghs-featured-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.72rem;
          color: color-mix(in srgb, #ffffff 55%, transparent);
        }

        .ghs-featured-meta span { display: inline-flex; align-items: center; gap: 0.25rem; }

        /* Trophies */
        .ghs-trophy-wrap {
          position: relative;
          z-index: 1;
          overflow-x: auto;
          margin-bottom: 1.5rem;
          border-radius: 2px;
        }

        .ghs-trophy-wrap::-webkit-scrollbar { height: 4px; }

        .ghs-trophy-wrap::-webkit-scrollbar-thumb {
          background: color-mix(in srgb, var(--ghs-purple) 40%, transparent);
          border-radius: 4px;
        }

        .ghs-trophy-img {
          display: block;
          width: 100%;
          min-width: 480px;
        }

        /* Calendar */
        .ghs-calendar-year-block {
          margin-bottom: 1rem;
        }

        .ghs-calendar-year-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: color-mix(in srgb, #ffffff 60%, transparent);
          margin-bottom: 0.4rem;
          position: relative;
          z-index: 1;
        }

        .ghs-calendar-wrap {
          position: relative;
          z-index: 1;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .ghs-calendar-wrap::-webkit-scrollbar { height: 4px; }

        .ghs-calendar-wrap::-webkit-scrollbar-thumb {
          background: color-mix(in srgb, var(--ghs-purple) 40%, transparent);
          border-radius: 4px;
        }

        /* Social links */
        .ghs-socials {
          display: flex;
          gap: 0.6rem;
          position: relative;
          z-index: 1;
        }

        .ghs-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 2px;
          background: color-mix(in srgb, var(--ghs-purple) 8%, #0d1420);
          border: 1px solid color-mix(in srgb, var(--ghs-purple) 20%, transparent);
          color: color-mix(in srgb, #ffffff 80%, transparent);
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .ghs-social-btn:hover {
          border-color: var(--ghs-purple);
          color: var(--ghs-purple);
        }

        .ghs-skeleton {
          height: 100px;
          border-radius: 4px;
          background: linear-gradient(
            90deg,
            #0d1420 0%,
            color-mix(in srgb, var(--ghs-purple) 10%, #0d1420) 50%,
            #0d1420 100%
          );
          background-size: 200% 100%;
          animation: ghs-shimmer 1.4s infinite;
        }

        @keyframes ghs-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .ghs-error {
          font-size: 0.85rem;
          color: color-mix(in srgb, #ffffff 60%, transparent);
          text-align: center;
          padding: 1rem 0;
        }
      `}</style>

      {/* Profile header */}
      <div className="ghs-profile">
        {profile?.avatar ? (
          <img className="ghs-avatar" src={profile.avatar} alt={profile.name || GHS_USERNAME} />
        ) : (
          <div className="ghs-avatar-skeleton" />
        )}
        <div className="ghs-profile-text">
          <a
            className="ghs-title"
            href={profile?.htmlUrl || `https://github.com/${GHS_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
            {profile?.name || GHS_USERNAME}
          </a>
          {profile?.bio && <p className="ghs-bio">{profile.bio}</p>}
          {profile?.location && (
            <div className="ghs-location">
              <FiMapPin /> {profile.location}
            </div>
          )}
        </div>
      </div>

      {/* Core stats */}
      <div className="ghs-stats-row">
        <div className="ghs-stat">
          <div className="ghs-stat-icon"><FiGitBranch /></div>
          <div className="ghs-stat-value">{stats ? stats.repos : '—'}</div>
          <div className="ghs-stat-label">Repos</div>
        </div>
        <div className="ghs-stat">
          <div className="ghs-stat-icon"><FiStar /></div>
          <div className="ghs-stat-value">{stats ? stats.stars : '—'}</div>
          <div className="ghs-stat-label">Stars</div>
        </div>
        <div className="ghs-stat">
          <div className="ghs-stat-icon"><FiUsers /></div>
          <div className="ghs-stat-value">{stats ? stats.followers : '—'}</div>
          <div className="ghs-stat-label">Followers</div>
        </div>
      </div>

      {/* Top languages — donut chart */}
      {topLangs.length > 0 && (
        <>
          <p className="ghs-section-label">Top Languages</p>
          <div className="ghs-langs">
            <div
              className="ghs-donut"
              style={{ background: buildDonutGradient(topLangs) }}
            >
              <div className="ghs-donut-hole">
                <span className="ghs-donut-total">
                  {topLangs.reduce((sum, l) => sum + l.count, 0)}
                </span>
                <span className="ghs-donut-total-label">repos</span>
              </div>
            </div>
            <div className="ghs-legend">
              {topLangs.map((lang) => (
                <div className="ghs-legend-row" key={lang.name}>
                  <span
                    className="ghs-legend-dot"
                    style={{ background: LANG_COLORS[lang.name] || 'var(--ghs-purple)' }}
                  />
                  <span className="ghs-legend-name">{lang.name}</span>
                  <span className="ghs-legend-pct">
                    {Math.round((lang.count / langTotal(topLangs)) * 100)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Featured / most-starred repo */}
      {pinnedRepo && (
        <a
          className="ghs-featured"
          href={pinnedRepo.url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="ghs-featured-name">{pinnedRepo.name}</div>
          {pinnedRepo.description && (
            <div className="ghs-featured-desc">{pinnedRepo.description}</div>
          )}
          <div className="ghs-featured-meta">
            {pinnedRepo.language && <span>{pinnedRepo.language}</span>}
            <span><FiStar /> {pinnedRepo.stars}</span>
          </div>
        </a>
      )}

      {/* Trophies */}
      <p className="ghs-section-label">Trophies</p>
      <div className="ghs-trophy-wrap">
        <img
          className="ghs-trophy-img"
          src={`https://github-profile-trophy.vercel.app/?username=${GHS_USERNAME}&theme=algolia&margin-w=8&margin-h=8&no-bg=true&column=4`}
          alt={`${GHS_USERNAME} GitHub trophies`}
          loading="lazy"
        />
      </div>

      {/* Contribution calendar(s) — one per year, since the calendar only supports a single year at a time */}
      <p className="ghs-section-label">Contribution Activity</p>
      {status === 'error' ? (
        <div className="ghs-calendar-wrap">
          <div className="ghs-error">Couldn't load GitHub activity right now.</div>
        </div>
      ) : status === 'loading' && !stats ? (
        <div className="ghs-calendar-wrap">
          <div className="ghs-skeleton" />
        </div>
      ) : (
        GHS_YEARS.map((year) => (
          <div key={year} className="ghs-calendar-year-block">
            <div className="ghs-calendar-year-label">{year}</div>
            <div className="ghs-calendar-wrap">
              <GitHubCalendar
                username={GHS_USERNAME}
                year={year}
                colorScheme="dark"
                fontSize={12}
                blockSize={11}
                blockMargin={4}
                theme={{
                  dark: ['#0d1420', '#38bdf866', '#38bdf8aa', '#7c8cf8', '#e879a0'],
                }}
              />
            </div>
          </div>
        ))
      )}

      {/* Social links */}
      <div className="ghs-socials">
        {GHS_LINKS.linkedin && (
          <a className="ghs-social-btn" href={GHS_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        )}
        {GHS_LINKS.email && (
          <a className="ghs-social-btn" href={`mailto:${GHS_LINKS.email}`} aria-label="Email">
            <FiMail />
          </a>
        )}
        {GHS_LINKS.hackerrank && (
          <a className="ghs-social-btn" href={GHS_LINKS.hackerrank} target="_blank" rel="noreferrer" aria-label="HackerRank">
            <SiHackerrank />
          </a>
        )}
      </div>
    </div>
  );
}