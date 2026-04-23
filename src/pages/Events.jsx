import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import EventCard from '../components/EventCard'
import { events } from '../data/events'

const timeFilters = ['All', 'Upcoming', 'Past']
const modeFilters = ['All', 'Online', 'Offline']

export default function Events() {
  const [timeFilter, setTimeFilter] = useState('All')
  const [modeFilter, setModeFilter] = useState('All')

  const filtered = events.filter(e => {
    const isPast = new Date(e.date) < new Date()
    if (timeFilter === 'Upcoming' && isPast) return false
    if (timeFilter === 'Past' && !isPast) return false
    if (modeFilter !== 'All' && e.mode !== modeFilter) return false
    return true
  }).sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <PageTransition>
      <section className="grid-bg relative" style={{ padding: '8rem 0 4rem' }}>
        <div
          style={{
            position: 'absolute',
            top: '5%',
            left: '30%',
            width: 500,
            height: 400,
            background: 'radial-gradient(ellipse, rgba(26,125,158,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Community Events</p>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              maxWidth: 600,
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            Events & <span className="text-gradient">Experiences</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 500, lineHeight: 1.7 }}>
            Workshops, panels, masterclasses, and more — across India and online.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0 6rem', borderTop: '1px solid var(--bg-border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 flex-wrap">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>When:</span>
              {timeFilters.map(f => (
                <button
                  key={f}
                  onClick={() => setTimeFilter(f)}
                  style={{
                    padding: '0.4rem 0.875rem',
                    borderRadius: 999,
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    border: '1px solid',
                    transition: 'all 0.2s ease',
                    borderColor: timeFilter === f ? 'var(--accent)' : 'var(--bg-border)',
                    background: timeFilter === f ? 'var(--accent-dim)' : 'transparent',
                    color: timeFilter === f ? 'var(--accent-light)' : 'var(--text-muted)',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>Mode:</span>
              {modeFilters.map(f => (
                <button
                  key={f}
                  onClick={() => setModeFilter(f)}
                  style={{
                    padding: '0.4rem 0.875rem',
                    borderRadius: 999,
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    border: '1px solid',
                    transition: 'all 0.2s ease',
                    borderColor: modeFilter === f ? 'var(--accent)' : 'var(--bg-border)',
                    background: modeFilter === f ? 'var(--accent-dim)' : 'transparent',
                    color: modeFilter === f ? 'var(--accent-light)' : 'var(--text-muted)',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>
            Showing <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{filtered.length}</span> event{filtered.length !== 1 ? 's' : ''}
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>No events found</p>
              <p style={{ fontSize: '0.875rem' }}>Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((event, i) => <EventCard key={event.id} event={event} index={i} />)}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
