import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        <div className="card p-6 h-full flex flex-col">
          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-4">
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: project.status === 'active' ? '#4ade80' : '#a0a0bf',
                boxShadow: project.status === 'active' ? '0 0 8px rgba(74,222,128,0.5)' : 'none',
              }}
            />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {project.status}
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              lineHeight: 1.4,
            }}
          >
            {project.title}
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, flex: 1, marginBottom: '1.25rem' }}>
            {project.overview}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {project.tags?.slice(0, 2).map(tag => (
                <span key={tag} className="tag" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>{tag}</span>
              ))}
            </div>
            {project.contributors?.length > 0 && (
              <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                {project.contributors.length} contributors
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
