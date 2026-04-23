import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const team = [
  { name: 'Arin Bhowmick',         role: 'Chief Design Officer, SAP',         initial: 'AB', note: 'Transforming enterprise software through human-centered design leadership' },
  { name: 'Carolina Marquis',       role: 'Global Head, SAP Design Hubs',       initial: 'CM', note: 'Building global design communities and fostering creative collaboration' },
  { name: 'Amit Kumar Tiwari',      role: 'Lead, SAP Design Hub India',         initial: 'AK', note: 'Driving design excellence and innovation across India\'s enterprise landscape' },
  { name: 'Smitha Uttam Tallimani', role: 'Community Growth, SAP Design Hub India', initial: 'ST', note: 'Nurturing design talent and expanding India\'s vibrant design community' },
  { name: 'Srichand Manoor',        role: 'Event Experiences, SAP Design Hub India', initial: 'SM', note: 'Creating immersive experiences that connect and inspire designers' },
]

const values = [
  { icon: '✦', title: 'Design Excellence',    body: 'Setting standards that elevate user experience across all SAP products built in India.' },
  { icon: '◈', title: 'Open Collaboration',   body: 'Cross-functional, cross-location — great design emerges from diverse perspectives.' },
  { icon: '⬡', title: 'Continuous Learning',  body: 'We invest in growing skills through mentorship, events, and shared knowledge.' },
  { icon: '◇', title: 'Community First',       body: 'Our strength is the people — designers who show up, contribute, and lift each other.' },
]

const whoJoins = [
  { role: 'Product Designers',  desc: 'UI/UX professionals on SAP products' },
  { role: 'UX Researchers',     desc: 'Exploring user needs and behaviours' },
  { role: 'Design Strategists', desc: 'Shaping product vision and direction' },
  { role: 'Content Designers',  desc: 'Crafting clear, human-centered language' },
  { role: 'Design Engineers',   desc: 'Bridging design and implementation' },
  { role: 'Enthusiasts',        desc: 'Anyone passionate about great experiences' },
]

const milestones = [
  { year: '2023', event: 'Design Hub India Founded', detail: 'Community launched across SAP India offices' },
  { year: '2024', event: 'Impulse 2024 — First Festival', detail: '"Signals in the Noise" — 300+ attendees' },
  { year: '2025', event: 'Impulse 2025 — 500+ Attendees', detail: '"Echoes of Tomorrow" — India\'s largest enterprise design festival' },
  { year: '2026', event: 'Impulse 2026 — Human Spark', detail: 'Save the date: 29 September 2026' },
]

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative grid-bg overflow-hidden" style={{ padding: '8rem 0 6rem' }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(26,125,158,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <p className="section-label mb-4">About the Hub</p>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
                The <span className="text-gradient">Beating Heart</span>
                <br />of Global SAP Design
              </h1>
              <p style={{ fontSize: '1.0625rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 480 }}>
                Design Hubs at SAP are local creative communities where designers connect, collaborate, and celebrate design in all possible forms and functions.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="grid grid-cols-2 gap-4">
              {[
                { value: '200+', label: 'Passionate Designers', sub: 'Across India' },
                { value: '#1',   label: 'Largest Design Hub',   sub: 'Among 9 global hubs' },
                { value: '3',    label: 'Years of Journey',     sub: '2023 — present' },
                { value: '30+',  label: 'Events Hosted',        sub: 'Workshops, talks, festivals' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{ padding: '1.5rem', borderRadius: 12, border: '1px solid var(--bg-border)', background: 'var(--bg-card)', textAlign: 'center' }}
                >
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.25rem', fontWeight: 700, color: 'var(--accent-light)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>{s.value}</p>
                  <p style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{s.label}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission quote */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid var(--bg-border)', borderBottom: '1px solid var(--bg-border)', background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.375rem, 3.5vw, 2.25rem)', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4, fontStyle: 'italic', marginBottom: '1.5rem' }}>
              "To nurture a culture of collaboration and curiosity — to make every designer feel seen, supported, and celebrated."
            </p>
            <p style={{ color: 'var(--accent-light)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Vision 2026</p>
          </motion.blockquote>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">The People Behind It</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3rem', lineHeight: 1.2 }}>Our Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{ padding: '1.75rem', borderRadius: 12, border: '1px solid var(--bg-border)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'linear-gradient(135deg, var(--accent-dim), rgba(144,204,223,0.1))',
                      border: '1px solid rgba(26,125,158,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      color: 'var(--accent-light)',
                      flexShrink: 0,
                    }}
                  >
                    {member.initial}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>{member.name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--accent-light)', lineHeight: 1.4, marginTop: '0.2rem' }}>{member.role}</p>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', lineHeight: 1.65 }}>{member.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">What We Stand For</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3rem', lineHeight: 1.2 }}>Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card"
                style={{ padding: '2rem', display: 'flex', gap: '1.25rem' }}
              >
                <div style={{ fontSize: '1.5rem', color: 'var(--accent-light)', flexShrink: 0, marginTop: '0.15rem' }}>{v.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{v.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.7 }}>{v.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section style={{ padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Our Journey</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3rem', lineHeight: 1.2 }}>Milestones</h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 'clamp(1.5rem,3vw,2.5rem)', top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3.5rem)', alignItems: 'flex-start', paddingLeft: 'clamp(1.5rem,3vw,2.5rem)' }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: m.year === '2026' ? '#90ccdf' : 'var(--accent)',
                      border: `2px solid ${m.year === '2026' ? '#90ccdf' : 'var(--accent-light)'}`,
                      boxShadow: m.year === '2026' ? '0 0 12px rgba(144,204,223,0.5)' : '0 0 8px rgba(26,125,158,0.4)',
                      flexShrink: 0,
                      marginTop: '0.375rem',
                      marginLeft: '-0.375rem',
                    }}
                  />
                  <div style={{ paddingBottom: i < milestones.length - 1 ? '1rem' : 0 }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, color: m.year === '2026' ? '#90ccdf' : 'var(--accent-light)', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>{m.year}</p>
                    <p style={{ fontWeight: 600, fontSize: '1.0625rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{m.event}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{m.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Who Belongs Here</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.2 }}>Who Should Join</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 480, marginBottom: '3rem', lineHeight: 1.7 }}>If you work at SAP India and care about design — this community is for you.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
            {whoJoins.map((w, i) => (
              <motion.div
                key={w.role}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                style={{ padding: '1.25rem', borderRadius: 12, border: '1px solid var(--bg-border)', background: 'var(--bg-card)' }}
              >
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9375rem', marginBottom: '0.3rem' }}>{w.role}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', lineHeight: 1.5 }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
          <Link to="/join" className="btn-primary" style={{ fontSize: '0.9375rem', padding: '0.75rem 2rem' }}>Join the Community</Link>
        </div>
      </section>
    </PageTransition>
  )
}
