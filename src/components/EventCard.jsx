import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function EventCard({ event, index = 0 }) {
  const isPast = new Date(event.date) < new Date()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <Link to={`/events/${event.id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div className="card p-6 h-full">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex gap-2 flex-wrap">
              <span className="tag">{event.type}</span>
              {event.mode && <span className="tag">{event.mode}</span>}
            </div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                padding: '0.25rem 0.75rem',
                borderRadius: 999,
                background: isPast ? 'rgba(120,120,153,0.12)' : 'rgba(26,95,255,0.12)',
                color: isPast ? 'var(--text-muted)' : 'var(--accent-light)',
                border: `1px solid ${isPast ? 'rgba(120,120,153,0.2)' : 'rgba(26,95,255,0.2)'}`,
                whiteSpace: 'nowrap',
              }}
            >
              {isPast ? 'Past' : 'Upcoming'}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "'72', sans-serif",
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              lineHeight: 1.4,
            }}
          >
            {event.title}
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
            {event.description}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem', marginBottom: '0.25rem' }}>
                {new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              {event.speakers?.length > 0 && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                  {event.speakers.slice(0, 2).join(', ')}{event.speakers.length > 2 ? ` +${event.speakers.length - 2}` : ''}
                </p>
              )}
            </div>
            <span style={{ color: 'var(--accent-light)', fontSize: '1.25rem' }}>→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
