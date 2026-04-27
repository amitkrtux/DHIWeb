import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'

// Photo placeholders — styled slides representing real event moments
const heroSlides = [
  { title: 'Impulse 2025', subtitle: '"Echoes of Tomorrow" — 500+ designers', color1: '#060c14', color2: '#091525', accent: 'rgba(26,95,255,0.4)' },
  { title: 'Let\'s Talk Arin', subtitle: 'Fireside with SAP Chief Design Officer', color1: '#0c0608', color2: '#180c10', accent: 'rgba(158,26,80,0.35)' },
  { title: 'NID Experience Day', subtitle: 'Academia × Enterprise Design Collab', color1: '#080c06', color2: '#121a08', accent: 'rgba(74,158,26,0.3)' },
  { title: 'AI for Designers', subtitle: 'Workshop Series — Hands-on AI Tools', color1: '#060808', color2: '#0a1212', accent: 'rgba(26,140,158,0.4)' },
  { title: 'DesignUp 2025', subtitle: 'SAP as proud community sponsor', color1: '#0c0a06', color2: '#1a1508', accent: 'rgba(158,120,26,0.35)' },
]

const initiatives = [
  {
    id: 'ai-for-designers',
    title: 'AI for Designers',
    status: 'active',
    overview: 'A hands-on learning series equipping SAP designers with practical AI fluency — from prompt engineering and AI-assisted design to building AI-native workflows.',
    tags: ['AI', 'Learning', 'Tools'],
    cta: 'Join the Series',
  },
  {
    id: 'design-book-club',
    title: 'Design Book Club',
    status: 'active',
    overview: 'Monthly sessions where the community reads and discusses a design book together — building a culture of reflective practice and shared intellectual growth.',
    tags: ['Community', 'Learning', 'Culture'],
    cta: 'Join Next Session',
  },
  {
    id: 'startup-studio',
    title: 'StartUp Studio Partnership',
    status: 'active',
    overview: 'Connecting SAP designers with early-stage startups for real-world design challenges — giving designers a creative outlet beyond enterprise products.',
    tags: ['Startup', 'Projects', 'Innovation'],
    cta: 'Collaborate',
  },
  {
    id: 'academia',
    title: 'Academia Partnerships',
    status: 'active',
    overview: 'Building bridges with leading design institutions — NID, Srishti Manipal, MIT Institute of Design — through guest sessions, collaborations, and internship pipelines.',
    tags: ['Academia', 'NID', 'Srishti'],
    cta: 'Learn More',
  },
  {
    id: 'impulse-curation',
    title: 'Impulse Curation Team',
    status: 'active',
    overview: 'The volunteer team building India\'s largest enterprise design festival from scratch — curating speakers, tracks, workshops, exhibitions and the full experience of Impulse.',
    tags: ['Impulse', 'Events', 'Leadership'],
    cta: 'Join the Team',
  },
  {
    id: 'global-designers-directory',
    title: 'Global Designers Directory',
    status: 'active',
    overview: 'A searchable directory of SAP designers across all India offices — skills, specialisations, and interests — enabling cross-team discovery and collaboration.',
    tags: ['Directory', 'Network', 'Global'],
    cta: 'Contribute',
  },
]

export default function Initiatives() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % heroSlides.length), 4000)
    return () => clearInterval(id)
  }, [])

  const slide = heroSlides[current]

  return (
    <PageTransition>
      {/* Hero Slideshow */}
      <section style={{ position: 'relative', height: 'clamp(400px, 55vh, 640px)', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${slide.color1} 0%, ${slide.color2} 100%)`,
            }}
          >
            {/* Grid */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${slide.accent.replace('0.', '0.07')} 1px, transparent 1px), linear-gradient(90deg,${slide.accent.replace('0.', '0.07')} 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
            {/* Radial glow */}
            <div style={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: `radial-gradient(ellipse, ${slide.accent} 0%, transparent 65%)` }} />
            {/* Slide number decoration */}
            <div style={{ position: 'absolute', right: '4%', bottom: '8%', fontFamily: "'72', sans-serif", fontSize: 'clamp(6rem,18vw,12rem)', fontWeight: 700, color: 'rgba(255,255,255,0.04)', lineHeight: 1, userSelect: 'none', letterSpacing: '-0.04em' }}>
              0{current + 1}
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to bottom, transparent, var(--bg-primary))', pointerEvents: 'none' }} />

        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(1.5rem,4vw,3rem)' }}>
          <div className="max-w-7xl mx-auto w-full px-6">
            <motion.div key={`text-${current}`} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Community Highlight</p>
              <h2 style={{ fontFamily: "'72', sans-serif", fontSize: 'clamp(1.75rem, 5vw, 3.5rem)', fontWeight: 200, color: '#ffffff', lineHeight: 1.1, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                {slide.title}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem' }}>{slide.subtitle}</p>
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ position: 'absolute', bottom: 140, right: 'clamp(1.5rem,4vw,3rem)', display: 'flex', gap: 8 }}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 24 : 6,
                height: 6,
                borderRadius: 999,
                background: i === current ? '#7bb3ff' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </section>

      {/* Header */}
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Community Driven</p>
          <h1 style={{ fontFamily: "'72', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 200, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.2 }}>
            Open <span className="text-gradient">Initiatives</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 560, lineHeight: 1.7 }}>
            Real programmes shaping design culture at SAP India. Find your place to contribute, lead, or collaborate.
          </p>
        </div>
      </section>

      {/* Initiative Cards */}
      <section style={{ padding: '2rem 0 6rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((init, i) => (
              <motion.div
                key={init.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.5)', display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Open Initiative</span>
                </div>

                <h3 style={{ fontFamily: "'72', sans-serif", fontSize: '1.1875rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {init.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, flex: 1, marginBottom: '1.25rem' }}>
                  {init.overview}
                </p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {init.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>{t}</span>)}
                </div>

                <Link
                  to="/join"
                  className="btn-outline"
                  style={{ fontSize: '0.8125rem', padding: '0.5rem 1.125rem', justifyContent: 'center', textAlign: 'center' }}
                >
                  {init.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
