import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { events } from '../data/events'

export default function EventDetail() {
  const { id } = useParams()
  const event = events.find(e => e.id === id)

  if (!event) {
    return (
      <PageTransition>
        <div style={{ padding: '10rem 2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Event not found.</p>
          <Link to="/events" className="btn-outline">Back to Events</Link>
        </div>
      </PageTransition>
    )
  }

  const isPast = new Date(event.date) < new Date()

  return (
    <PageTransition>
      <article style={{ padding: '8rem 0 6rem' }}>
        <div className="max-w-3xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            <Link to="/events" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Events</Link>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)' }}>{event.title}</span>
          </nav>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mb-6">
            <span className="tag">{event.type}</span>
            <span className="tag">{event.mode}</span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.25rem 0.75rem',
                borderRadius: 999,
                fontSize: '0.75rem',
                fontWeight: 500,
                background: isPast ? 'rgba(120,120,153,0.12)' : 'rgba(26,125,158,0.12)',
                color: isPast ? 'var(--text-muted)' : 'var(--accent-light)',
                border: `1px solid ${isPast ? 'rgba(120,120,153,0.2)' : 'rgba(26,125,158,0.2)'}`,
              }}
            >
              {isPast ? 'Past Event' : 'Upcoming'}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              marginBottom: '2rem',
            }}
          >
            {event.title}
          </motion.h1>

          {/* Meta */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
              padding: '1.5rem',
              borderRadius: 12,
              border: '1px solid var(--bg-border)',
              background: 'var(--bg-card)',
              marginBottom: '2.5rem',
            }}
          >
            {[
              { label: 'Date', value: new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) },
              { label: 'Time', value: event.time },
              { label: 'Location', value: event.location },
              { label: 'Format', value: event.mode },
            ].map(({ label, value }) => (
              <div key={label}>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{label}</p>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.9375rem', fontWeight: 500 }}>{value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p style={{ color: 'var(--text-muted)', fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            {event.description}
          </p>

          {/* Speakers */}
          {event.speakers?.length > 0 && (
            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>Speakers</p>
              <div className="flex flex-wrap gap-3">
                {event.speakers.map(speaker => (
                  <div
                    key={speaker}
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
                    {speaker}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {event.tags?.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-8">
              {event.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          )}

          {/* CTA */}
          {!isPast && event.ctaLink && event.ctaLink !== '#' && (
            <a href={event.ctaLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.9375rem', padding: '0.75rem 2rem' }}>
              Register for This Event
            </a>
          )}

          <div className="mt-8">
            <Link to="/events" className="btn-outline">← Back to Events</Link>
          </div>
        </div>
      </article>
    </PageTransition>
  )
}
