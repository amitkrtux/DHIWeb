import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import ImpulseBanner from '../components/ImpulseBanner'

const stats = [
  { value: '200+', label: 'Passionate Designers', sub: 'Across multiple LoBs throughout India' },
  { value: '9',    label: 'Global Design Hubs',   sub: 'India — one of the largest in the network' },
  { value: '3',    label: 'Years of Journey',     sub: 'Bringing community together since 2023' },
  { value: '30+',  label: 'Events & Workshops',   sub: 'Across India, online & offline' },
]

const pillars = [
  {
    icon: '◈',
    title: 'Elevate Creative Confidence',
    body: 'Closer engagement and collaboration within the design community and outside — Partners, Academia, Design+Dev communities.',
  },
  {
    icon: '✦',
    title: 'Drive AI Learning-Led Events',
    body: 'Enabling continuous learning for designers and evangelising design thinking across SAP India.',
  },
  {
    icon: '⬡',
    title: 'Build Local + Global Bridges',
    body: 'Building, growing, and empowering a stronger community with meaningful opportunities for designers.',
  },
]

const lovedEvents = [
  { name: 'Impulse 2025',           type: 'Festival',   stat: '500+ attendees',   desc: 'India\'s largest enterprise design festival — keynotes, workshops, challenge arena and more.', image: 'https://picsum.photos/seed/impulse-festival/400/200' },
  { name: 'Coffee Corners',         type: 'Fireside',   stat: 'Ongoing',          desc: 'Informal conversations with our design leaders — a casual format that sparks some of our most honest and inspiring exchanges.', image: 'https://picsum.photos/seed/coffee-chat/400/200' },
  { name: 'DesignUp 2025',          type: 'Conference', stat: 'SAP Sponsor',      desc: 'SAP Design Hub India proud sponsor and participation at DesignUp — India\'s premier design conference.', image: 'https://picsum.photos/seed/designup-conf/400/200' },
  { name: 'NID Experience Day',     type: 'Collab',     stat: 'Academia',         desc: 'A powerful collaboration with NID — bridging enterprise design and world-class academic design thinking.', image: 'https://picsum.photos/seed/nid-experience/400/200' },
  { name: 'AI Tools for Designers', type: 'Workshop',   stat: 'Series',           desc: 'Hands-on deep dives into AI tools, workflows, and design strategies shaping the next era of design work.', image: 'https://picsum.photos/seed/ai-workshop-design/400/200' },
  { name: 'Design Book Club',       type: 'Community',  stat: 'Ongoing',          desc: 'Monthly sessions where designers come together over a shared book, building a culture of reflective practice.', image: 'https://picsum.photos/seed/book-club-design/400/200' },
]

const charter2026 = [
  { quarter: 'Q1 2026', items: ['Guest Sessions', 'Internal Sessions', 'Wrap Up Celebrations'] },
  { quarter: 'Q2 2026', items: ['Impulse 2026 Curation Begins', 'Academia Partnerships', 'AI Learning Series'] },
  { quarter: 'Q3 2026', items: ['Frog & NID Collaborations', 'Guest Speaker Series', 'Srishti Collab'] },
  { quarter: 'Q4 2026', items: ['IMPULSE 2026 — 29 Sept', 'DesignUp 2026', 'Year Wrap', 'Awards & Felicitations'] },
]

const partners = [
  { name: 'Lead Together SAP', type: 'Internal',  initial: 'LT', logo: null },
  { name: 'DKOM',              type: 'Internal',  initial: 'DK', logo: null },
  { name: 'NID',               type: 'Academia',  initial: 'NI', logo: 'https://logo.clearbit.com/nid.edu' },
  { name: 'Srishti Manipal',   type: 'Academia',  initial: 'SM', logo: 'https://logo.clearbit.com/srishtimanipalinstitute.in' },
  { name: 'DesignUp',          type: 'Community', initial: 'DU', logo: 'https://logo.clearbit.com/designup.io' },
  { name: 'ADPList',           type: 'Community', initial: 'AD', logo: 'https://logo.clearbit.com/adplist.org' },
  { name: 'MIT Institute of Design', type: 'Academia', initial: 'MI', logo: 'https://logo.clearbit.com/mitid.edu.in' },
  { name: 'Frog Design',       type: 'Industry',  initial: 'FR', logo: 'https://logo.clearbit.com/frog.co' },
]

const partnerTypeColor = {
  Internal:  { bg: 'rgba(26,95,255,0.12)',   color: 'var(--accent-light)',  border: 'rgba(26,95,255,0.25)' },
  Academia:  { bg: 'rgba(139,92,246,0.12)',  color: '#a78bfa',              border: 'rgba(139,92,246,0.25)' },
  Community: { bg: 'rgba(52,168,83,0.1)',    color: '#4ade80',              border: 'rgba(52,168,83,0.2)' },
  Industry:  { bg: 'rgba(251,146,60,0.1)',   color: '#fb923c',              border: 'rgba(251,146,60,0.2)' },
}

const volunteers = [
  { name: 'Priya Sharma',    color: '#0070F2', message: 'Running the Impulse 2025 registration desk was pure joy — watching hundreds of designers light up the moment they stepped in was unforgettable.' },
  { name: 'Rohit Verma',     color: '#FF5C77', message: 'Proud to have shaped Impulse 2025 with the most dedicated curation team I\'ve ever worked with.' },
  { name: 'Ananya Singh',    color: '#FFDF72', message: 'Coordinating the speaker sessions taught me so much about community organizing and the power of honest design conversations.' },
  { name: 'Kiran Reddy',     color: '#a78bfa', message: 'Being part of the volunteer team is the highlight of my year at SAP. The energy here is like nothing else.' },
  { name: 'Neha Kapoor',     color: '#0070F2', message: 'Organizing workshop tracks showed me how much designers hunger for hands-on, real learning.' },
  { name: 'Vikram Iyer',     color: '#FF5C77', message: 'From coordinating logistics to witnessing 500+ designers connect — volunteering here changed how I think about community and design.' },
  { name: 'Divya Nair',      color: '#4ade80', message: 'The book club sessions I helped run sparked conversations I still think about months later.' },
  { name: 'Aditya Kumar',    color: '#FFDF72', message: 'Two years on the Impulse curation team — the best professional development I\'ve ever had, bar none.' },
  { name: 'Kavya Menon',     color: '#0070F2', message: 'Design Hub India isn\'t just a community — it\'s a second home. Grateful to give back every year.' },
  { name: 'Sanjay Patel',    color: '#FF5C77', message: 'Setting up the exhibition hall and watching people experience the student design showcase — priceless.' },
  { name: 'Sneha Bhat',      color: '#a78bfa', message: 'Every session I moderated made me a better communicator and a more empathetic designer.' },
  { name: 'Arjun Mehta',     color: '#4ade80', message: 'The NID collaboration I helped coordinate opened doors I didn\'t know existed in my career.' },
  { name: 'Lakshmi S.',      color: '#FFDF72', message: 'Seeing ideas I helped nurture come alive on stage at Impulse was the most rewarding feeling of my professional life.' },
  { name: 'Rahul Gupta',     color: '#0070F2', message: 'The team behind Design Hub India is extraordinary. I came to help and ended up growing more than I expected.' },
  { name: 'Meera Joshi',     color: '#FF5C77', message: 'Volunteering at DHI taught me that great design culture is built one conversation, one event, one connection at a time.' },
  { name: 'Tejas Kulkarni',  color: '#a78bfa', message: 'Running the AI workshop series was exhilarating — designers are hungry, curious, and ready for what\'s next.' },
  { name: 'Pooja Iyer',      color: '#4ade80', message: 'I\'ve made some of my closest friends through DHI volunteering. Community is the right word for what we\'ve built.' },
  { name: 'Anjali Rao',      color: '#FFDF72', message: 'Helping curate DesignUp 2025 alongside the DHI team was a masterclass in design event production.' },
]

export default function Home() {
  return (
    <PageTransition>
      {/* Impulse 2026 Hero Banner */}
      <section style={{ padding: '3rem 0 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ImpulseBanner />
          </motion.div>
        </div>
      </section>

      {/* What is Design Hub — One Liner */}
      <section style={{ padding: '5rem 0 4rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <p className="section-label mb-4">Design Hub India</p>
            <h1
              style={{
                fontFamily: "'72', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                fontWeight: 200,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
                maxWidth: 800,
                margin: '0 auto 1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              The{' '}
              <span className="text-gradient">Beating Heart</span>
              {' '}of SAP Design
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: 640, margin: '0 auto', lineHeight: 1.8 }}>
              Design Hubs at SAP are local creative communities where designers connect, collaborate, and celebrate design in all possible forms and functions. India is the largest among all 9 global hubs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: '1px solid var(--bg-border)', borderBottom: '1px solid var(--bg-border)', background: 'var(--bg-secondary)', padding: '3.5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ textAlign: 'center' }}
              >
                <p style={{ fontFamily: "'72', sans-serif", fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--accent-light)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {stat.value}
                </p>
                <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.875rem', margin: '0.375rem 0 0.25rem' }}>{stat.label}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: 1.5 }}>{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Vision 2026" title="What We Stand For" subtitle="To nurture a culture of collaboration and curiosity — making every designer feel seen, supported, and celebrated." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="card"
                style={{ padding: '2rem' }}
              >
                <div style={{ fontSize: '1.75rem', color: 'var(--accent-light)', marginBottom: '1.25rem' }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'72', sans-serif", fontSize: '1.25rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Loved Events */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <SectionHeader label="Community Favourites" title="Most Loved Events & Initiatives" subtitle="The moments and programmes that our community keeps talking about." />
            <Link to="/initiatives" className="btn-outline" style={{ flexShrink: 0 }}>View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lovedEvents.map((ev, i) => (
              <motion.div
                key={ev.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card"
                style={{ padding: 0, overflow: 'hidden' }}
              >
                <div style={{ width: '100%', height: 160, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={ev.image}
                    alt={ev.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5))' }} />
                  <span className="tag" style={{ position: 'absolute', top: 12, left: 12, fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>{ev.type}</span>
                </div>
                <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 style={{ fontFamily: "'72', sans-serif", fontSize: '1.0625rem', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.4 }}>{ev.name}</h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-light)', fontWeight: 600, flexShrink: 0, marginLeft: 8 }}>{ev.stat}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{ev.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charter 2026 */}
      <section style={{ padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Our Roadmap" title="Charter 2026" subtitle="A year of bold ambitions — from AI-led events to global collaborations and our flagship festival." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {charter2026.map((q, i) => (
              <motion.div
                key={q.quarter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  padding: '1.5rem',
                  borderRadius: 12,
                  border: '1px solid var(--bg-border)',
                  background: q.quarter === 'Q4 2026' ? 'linear-gradient(135deg, rgba(26,95,255,0.1), rgba(77,124,255,0.05))' : 'var(--bg-card)',
                  borderColor: q.quarter === 'Q4 2026' ? 'rgba(77,124,255,0.3)' : undefined,
                }}
              >
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: q.quarter === 'Q4 2026' ? '#7bb3ff' : 'var(--text-muted)', marginBottom: '1rem' }}>
                  {q.quarter}
                  {q.quarter === 'Q4 2026' && <span style={{ marginLeft: 6, color: '#7bb3ff' }}>★</span>}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {q.items.map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--accent-light)', flexShrink: 0, marginTop: '0.15rem', fontSize: '0.6rem' }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Ecosystem" title="Our Partners" subtitle="We collaborate with leading organisations across industry, academia, and the global design community." center />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map((p, i) => {
              const c = partnerTypeColor[p.type]
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  style={{
                    padding: '1.5rem 1.25rem',
                    borderRadius: 12,
                    border: `1px solid ${c.border}`,
                    background: c.bg,
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 12,
                      background: p.logo ? 'var(--bg-card)' : c.bg.replace('0.15','0.25').replace('0.12','0.22').replace('0.1','0.2'),
                      border: `1px solid ${c.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.875rem',
                      overflow: 'hidden',
                    }}
                  >
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.name}
                        style={{ width: 36, height: 36, objectFit: 'contain', display: 'block' }}
                        onError={e => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                    ) : null}
                    <span
                      style={{
                        display: p.logo ? 'none' : 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: c.color,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {p.initial}
                    </span>
                  </div>
                  <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: '0.25rem', lineHeight: 1.3 }}>{p.name}</p>
                  <p style={{ fontSize: '0.7rem', color: c.color, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.type}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Wall of Love */}
      <section style={{ padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Wall of Love"
            title="Volunteer Appreciation"
            subtitle="The people who made it all happen in 2025 — our incredible volunteer community. Thank you. ♥"
            center
          />

          <style>{`
            .vol-masonry { columns: 1; column-gap: 1.25rem; }
            @media (min-width: 640px)  { .vol-masonry { columns: 2; } }
            @media (min-width: 1024px) { .vol-masonry { columns: 3; } }
            .vol-card { break-inside: avoid; margin-bottom: 1.25rem; }
          `}</style>

          <div className="vol-masonry">
            {volunteers.map((v, i) => (
              <motion.div
                key={v.name}
                className="vol-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.07, duration: 0.5 }}
                style={{
                  padding: '1.5rem',
                  borderRadius: 14,
                  border: '1px solid var(--bg-border)',
                  background: 'var(--bg-card)',
                }}
              >
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', fontStyle: 'italic' }}>
                  "{v.message}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: `${v.color}20`,
                      border: `2px solid ${v.color}55`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: v.color,
                      flexShrink: 0,
                    }}
                  >
                    {v.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>{v.name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>DHI Volunteer 2025</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Join as Member */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              borderRadius: 20,
              border: '1px solid rgba(26,95,255,0.2)',
              background: 'linear-gradient(135deg, rgba(26,95,255,0.08) 0%, rgba(77,124,255,0.03) 100%)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                width: 600,
                height: 300,
                background: 'radial-gradient(ellipse, rgba(26,95,255,0.1) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '0.375rem 1rem',
                  borderRadius: 999,
                  background: 'var(--accent-dim)',
                  border: '1px solid rgba(26,95,255,0.2)',
                  marginBottom: '2rem',
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-light)', boxShadow: '0 0 8px var(--accent)', display: 'inline-block' }} />
                <span style={{ color: 'var(--accent-light)', fontSize: '0.8125rem', fontWeight: 500 }}>Open to all SAP employees in India</span>
              </div>

              <h2
                style={{
                  fontFamily: "'72', sans-serif",
                  fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                  fontWeight: 300,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                  marginBottom: '1.25rem',
                }}
              >
                Join the Design Hub India
                <br />
                <span className="text-gradient">community today</span>
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
                Volunteer, collaborate, learn, and grow with 200+ passionate designers shaping the future of SAP design.
              </p>

              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/join" className="btn-primary" style={{ fontSize: '0.9375rem', padding: '0.75rem 2rem' }}>
                  Become a Member
                </Link>
                <Link to="/impulse" className="btn-outline" style={{ fontSize: '0.9375rem', padding: '0.75rem 2rem' }}>
                  Explore Impulse 2026
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
