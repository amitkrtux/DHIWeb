import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const levelColors = {
  Beginner:     { bg: 'rgba(52,168,83,0.12)',  color: '#52a853', border: 'rgba(52,168,83,0.25)' },
  Intermediate: { bg: 'rgba(251,188,5,0.12)',  color: '#c8a200', border: 'rgba(251,188,5,0.25)' },
  Advanced:     { bg: 'rgba(234,67,53,0.12)',  color: '#ea4335', border: 'rgba(234,67,53,0.25)' },
}

export default function LearningCard({ item, index = 0 }) {
  const level = levelColors[item.level] || levelColors.Beginner

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <Link to={`/learning/${item.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
        <div className="card p-6 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="tag">{item.type}</span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                padding: '0.25rem 0.75rem',
                borderRadius: 999,
                background: level.bg,
                color: level.color,
                border: `1px solid ${level.border}`,
              }}
            >
              {item.level}
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.0625rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              lineHeight: 1.4,
            }}
          >
            {item.title}
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, flex: 1, marginBottom: '1.25rem' }}>
            {item.excerpt}
          </p>

          <div className="flex gap-2 flex-wrap">
            {item.tags?.slice(0, 3).map(tag => (
              <span key={tag} className="tag" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
