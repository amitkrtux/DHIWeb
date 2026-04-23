import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import EventCard from '../components/EventCard'
import LearningCard from '../components/LearningCard'
import ProjectCard from '../components/ProjectCard'
import { events } from '../data/events'
import { learningItems } from '../data/learning'
import { projects } from '../data/projects'

const upcomingEvents = events
  .filter(e => new Date(e.date) >= new Date())
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .slice(0, 3)

const featuredLearning = learningItems.slice(0, 3)
const featuredProjects = projects.filter(p => p.status === 'active').slice(0, 3)

const stats = [
  { value: '400+',  label: 'Community Members' },
  { value: '60+',   label: 'Events Hosted' },
  { value: '20+',   label: 'Active Projects' },
  { value: '15+',   label: 'Cities' },
]

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center grid-bg overflow-hidden"
        style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 800,
            height: 600,
            background: 'radial-gradient(ellipse, rgba(26,125,158,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label mb-6">SAP Design Hub India</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}
            >
              Where Design{' '}
              <span className="text-gradient">meets</span>
              <br />
              Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-muted)',
                maxWidth: 520,
                lineHeight: 1.8,
                marginBottom: '2.5rem',
              }}
            >
              A premium design community within SAP India — connecting designers, researchers, and strategists to shape the future of enterprise products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/join" className="btn-primary" style={{ fontSize: '0.9375rem', padding: '0.75rem 1.75rem' }}>
                Join the Community
              </Link>
              <Link to="/events" className="btn-outline" style={{ fontSize: '0.9375rem', padding: '0.75rem 1.75rem' }}>
                View Events
              </Link>
            </motion.div>
          </div>

          {/* Next event callout */}
          {upcomingEvents[0] && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2"
              style={{ width: 320 }}
            >
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 16,
                  padding: '1.5rem',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
                }}
              >
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-light)', marginBottom: '0.75rem' }}>
                  Next Event
                </p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {upcomingEvents[0].title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginBottom: '1rem' }}>
                  {new Date(upcomingEvents[0].date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} · {upcomingEvents[0].mode}
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {upcomingEvents[0].tags?.slice(0, 2).map(t => (
                    <span key={t} className="tag" style={{ fontSize: '0.7rem' }}>{t}</span>
                  ))}
                </div>
                <Link to={`/events/${upcomingEvents[0].id}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8125rem' }}>
                  Learn More
                </Link>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom gradient */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background: 'linear-gradient(to bottom, transparent, var(--bg-primary))',
            pointerEvents: 'none',
          }}
        />
      </section>

      {/* Stats */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid var(--bg-border)', borderBottom: '1px solid var(--bg-border)', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ textAlign: 'center' }}
              >
                <p
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    fontWeight: 700,
                    color: 'var(--accent-light)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.25rem',
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{ padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <SectionHeader
              label="What's Next"
              title="Upcoming Events"
              subtitle="Join our community events — workshops, panels, and hands-on sessions across India."
            />
            <Link to="/events" className="btn-outline" style={{ flexShrink: 0 }}>View All Events</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.length > 0
              ? upcomingEvents.map((event, i) => <EventCard key={event.id} event={event} index={i} />)
              : (
                <p style={{ color: 'var(--text-muted)', gridColumn: '1/-1' }}>No upcoming events at the moment. Check back soon.</p>
              )
            }
          </div>
        </div>
      </section>

      {/* Learning */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <SectionHeader
              label="Grow Your Skills"
              title="Learning Hub"
              subtitle="Curated articles, guides, and training materials for every stage of your design career."
            />
            <Link to="/learning" className="btn-outline" style={{ flexShrink: 0 }}>Explore Learning</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLearning.map((item, i) => <LearningCard key={item.id} item={item} index={i} />)}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <SectionHeader
              label="Community Driven"
              title="Active Initiatives"
              subtitle="Real projects shaping SAP design culture across India. Find your place to contribute."
            />
            <Link to="/projects" className="btn-outline" style={{ flexShrink: 0 }}>All Projects</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((proj, i) => <ProjectCard key={proj.id} project={proj} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '0.375rem 1rem',
                borderRadius: 999,
                background: 'var(--accent-dim)',
                border: '1px solid rgba(26,125,158,0.25)',
                marginBottom: '2rem',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-light)', boxShadow: '0 0 8px var(--accent)' }} />
              <span style={{ color: 'var(--accent-light)', fontSize: '0.8125rem', fontWeight: 500 }}>Open to all SAP employees in India</span>
            </div>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}
            >
              Ready to shape the future
              <br />
              <span className="text-gradient">of design at SAP?</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.0625rem', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Volunteer, collaborate, learn, and grow with a community of passionate designers.
            </p>

            <Link to="/join" className="btn-primary" style={{ fontSize: '1rem', padding: '0.875rem 2.5rem' }}>
              Join as a Volunteer
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
