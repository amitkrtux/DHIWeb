import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'

const values = [
  {
    icon: '✦',
    title: 'Design Excellence',
    body: 'We push the boundaries of what enterprise design can be — setting standards that elevate user experience across SAP products.',
  },
  {
    icon: '◈',
    title: 'Open Collaboration',
    body: 'Cross-functional, cross-location — we believe great design emerges from diverse perspectives working together without hierarchy.',
  },
  {
    icon: '⬡',
    title: 'Continuous Learning',
    body: 'The design landscape evolves fast. We invest in growing our community\'s skills through mentorship, events, and shared knowledge.',
  },
  {
    icon: '◇',
    title: 'Community First',
    body: 'Our strength is the people — designers, researchers, and writers who show up, contribute, and lift each other forward.',
  },
]

const whoJoins = [
  { role: 'Product Designers',   desc: 'UI/UX professionals working on SAP products' },
  { role: 'UX Researchers',      desc: 'Researchers exploring user needs and behaviours' },
  { role: 'Design Strategists',  desc: 'Thinkers shaping product vision and direction' },
  { role: 'Content Designers',   desc: 'Writers crafting clear, human-centered language' },
  { role: 'Design Engineers',    desc: 'Engineers bridging design and implementation' },
  { role: 'Design Enthusiasts',  desc: 'Anyone passionate about great design experiences' },
]

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section
        className="relative grid-bg overflow-hidden"
        style={{ padding: '8rem 0 6rem' }}
      >
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: 400,
            height: 400,
            background: 'radial-gradient(ellipse, rgba(26,125,158,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Our Community</p>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              maxWidth: 700,
              marginBottom: '1.5rem',
            }}
          >
            Designing a better future,{' '}
            <span className="text-gradient">together</span>
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-muted)',
              maxWidth: 560,
              lineHeight: 1.8,
            }}
          >
            Design Hub India is SAP's internal design community — a space where India's design talent connects, learns, and creates work they're proud of.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid var(--bg-border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label mb-4">Vision</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.3 }}>
                Be the most impactful design community in the enterprise world
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
                We envision a future where Design Hub India is the catalyst for a design-led culture across SAP — where every product decision is informed by deep user understanding and design craft.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="section-label mb-4">Mission</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.3 }}>
                Empower designers to do the best work of their careers
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
                Through community, learning, and collaboration — we give SAP India's design professionals the tools, connections, and opportunities they need to grow and create meaningful impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="What We Stand For"
            title="Our Values"
            subtitle="The principles that guide how we show up and work together."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card"
                style={{ padding: '2rem' }}
              >
                <div
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--accent-light)',
                    marginBottom: '1rem',
                  }}
                >
                  {v.icon}
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.625rem' }}>
                  {v.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section style={{ padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Who Belongs Here"
            title="Who Should Join"
            subtitle="If you work at SAP India and care about design — this community is for you."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoJoins.map((w, i) => (
              <motion.div
                key={w.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  padding: '1.5rem',
                  borderRadius: 12,
                  border: '1px solid var(--bg-border)',
                  background: 'var(--bg-card)',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: 'var(--accent-dim)',
                    border: '1px solid rgba(26,125,158,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.875rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--accent-light)',
                  }}
                >
                  {i + 1}
                </div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.375rem', fontSize: '0.9375rem' }}>{w.role}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', lineHeight: 1.6 }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/join" className="btn-primary" style={{ fontSize: '0.9375rem', padding: '0.75rem 2rem' }}>
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
