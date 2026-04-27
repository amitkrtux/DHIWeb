import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <PageTransition>
        <div style={{ padding: '10rem 2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Project not found.</p>
          <Link to="/projects" className="btn-outline">Back to Projects</Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <article style={{ padding: '8rem 0 6rem' }}>
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            <Link to="/projects" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Projects</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)' }}>{project.title}</span>
          </nav>

          {/* Status */}
          <div className="flex items-center gap-2 mb-6">
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: project.status === 'active' ? '#4ade80' : '#a0a0bf',
                boxShadow: project.status === 'active' ? '0 0 8px rgba(74,222,128,0.5)' : 'none',
              }}
            />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {project.status}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'72', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}
          >
            {project.title}
          </motion.h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '3rem' }}>
            {project.overview}
          </p>

          {/* Goals */}
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Goals
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {project.goals.map((goal, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: 'var(--accent-light)', marginTop: '0.1rem', flexShrink: 0 }}>✦</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* Contributors */}
          {project.contributors?.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Contributors
              </p>
              <div className="flex flex-wrap gap-3">
                {project.contributors.map(c => (
                  <div
                    key={c}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: 8,
                      border: '1px solid var(--bg-border)',
                      background: 'var(--bg-card)',
                      color: 'var(--text-primary)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {project.tags?.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-8">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          )}

          {/* CTA */}
          {project.status === 'active' && (
            <div
              style={{
                padding: '2rem',
                borderRadius: 12,
                border: '1px solid rgba(26,95,255,0.25)',
                background: 'var(--accent-dim)',
                marginBottom: '2rem',
              }}
            >
              <h3 style={{ fontFamily: "'72', sans-serif", fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.625rem' }}>
                Want to contribute?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', marginBottom: '1.25rem' }}>
                This project is actively looking for collaborators. Join us and make an impact.
              </p>
              <Link to="/join" className="btn-primary">Join as Volunteer</Link>
            </div>
          )}

          <Link to="/projects" className="btn-outline">← Back to Projects</Link>
        </div>
      </article>
    </PageTransition>
  )
}
