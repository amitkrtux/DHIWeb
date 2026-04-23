import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

// Countdown to 29 Sept 2026
function Countdown() {
  const target = new Date('2026-09-29T09:00:00+05:30').getTime()
  const [diff, setDiff] = useState(target - Date.now())

  useEffect(() => {
    const id = setInterval(() => setDiff(target - Date.now()), 1000)
    return () => clearInterval(id)
  }, [target])

  const d = Math.max(0, Math.floor(diff / 86400000))
  const h = Math.max(0, Math.floor((diff % 86400000) / 3600000))
  const m = Math.max(0, Math.floor((diff % 3600000) / 60000))
  const s = Math.max(0, Math.floor((diff % 60000) / 1000))

  const units = [
    { value: d, label: 'Days' },
    { value: h, label: 'Hours' },
    { value: m, label: 'Minutes' },
    { value: s, label: 'Seconds' },
  ]

  return (
    <div className="flex gap-3 flex-wrap">
      {units.map(({ value, label }) => (
        <div
          key={label}
          style={{
            textAlign: 'center',
            padding: '1rem 1.25rem',
            borderRadius: 12,
            border: '1px solid rgba(144,204,223,0.25)',
            background: 'rgba(144,204,223,0.06)',
            minWidth: 70,
          }}
        >
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700, color: '#90ccdf', lineHeight: 1, letterSpacing: '-0.02em' }}>
            {String(value).padStart(2, '0')}
          </p>
          <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(144,204,223,0.6)', marginTop: '0.375rem' }}>{label}</p>
        </div>
      ))}
    </div>
  )
}

// Sparks
function SparkField({ count = 40 }) {
  const sparks = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i, left: Math.random() * 100, top: Math.random() * 100,
      size: 1.5 + Math.random() * 3.5, delay: Math.random() * 5, duration: 2.5 + Math.random() * 3,
    }))
  ).current
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {sparks.map(s => (
        <span key={s.id} style={{
          position: 'absolute', left: `${s.left}%`, top: `${s.top}%`,
          width: s.size, height: s.size, borderRadius: '50%',
          background: '#90ccdf',
          boxShadow: `0 0 ${s.size * 3}px ${s.size}px rgba(144,204,223,0.65)`,
          animation: `sparkImpulse ${s.duration}s ${s.delay}s ease-in-out infinite alternate`,
          opacity: 0,
        }} />
      ))}
    </div>
  )
}

const reasons = [
  { icon: '🎤', title: 'World-Class Keynotes',   body: 'Hear from design leaders and visionaries shaping the future of enterprise and consumer design.' },
  { icon: '⚡', title: 'Workshops & Masterclasses', body: 'Hands-on learning sessions — from AI tools to design craft, strategy to research methods.' },
  { icon: '🏆', title: 'Challenge Arena',         body: 'Compete in live design challenges, get mentored, and win recognition from the design community.' },
  { icon: '🌐', title: 'Network & Connect',       body: 'Meet 500+ designers from across India and the world — internal SAP designers and external community.' },
  { icon: '🎨', title: 'Exhibitions & Demos',     body: 'Explore cutting-edge design tools, immersive installations, and community showcases.' },
  { icon: '⭐', title: 'Awards & Recognition',    body: 'Celebrate outstanding design work and community contributions at the Impulse Awards ceremony.' },
]

const loved2025 = [
  { quote: 'Impulse is the one event I look forward to the entire year. The energy is unreal.', name: 'Priya S.', role: 'UX Designer, SAP' },
  { quote: 'The Challenge Arena was the highlight — intense, creative, and so much fun.', name: 'Rohit V.', role: 'Product Designer, SAP' },
  { quote: 'I met my best collaborators at Impulse 2025. The networking was incredible.', name: 'Ananya K.', role: 'UX Researcher, SAP' },
  { quote: 'The keynotes were world-class. The "Echoes of Tomorrow" theme was deeply inspiring.', name: 'Kiran R.', role: 'Design Lead, SAP' },
  { quote: 'Impulse 2025 made me feel proud to be a designer at SAP. Genuinely moved.', name: 'Neha B.', role: 'Content Designer, SAP' },
  { quote: 'The Mentoring Lounge changed my career trajectory. Found guidance I\'d been looking for.', name: 'Aditya M.', role: 'Junior Designer, SAP' },
]

export default function Impulse2026() {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % reasons.length), 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <PageTransition>
      <style>{`
        @keyframes sparkImpulse {
          0%   { opacity: 0; transform: scale(0.4) translateY(0); }
          50%  { opacity: 0.9; }
          100% { opacity: 0.2; transform: scale(1.4) translateY(-18px); }
        }
        @keyframes fadeSlide {
          0%   { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #040608 0%, #07101a 50%, #040608 100%)',
        }}
      >
        {/* Grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,125,158,0.05) 1px, transparent 1px), linear-gradient(90deg,rgba(26,125,158,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Center glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '120%', height: '120%', background: 'radial-gradient(ellipse 60% 50%, rgba(26,125,158,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <SparkField />

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem', maxWidth: 800, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.375rem 1rem', borderRadius: 999, background: 'rgba(144,204,223,0.1)', border: '1px solid rgba(144,204,223,0.3)', marginBottom: '2rem' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#90ccdf', boxShadow: '0 0 10px #90ccdf', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
              <span style={{ color: '#90ccdf', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.08em' }}>The most celebrated design festival is BACK</span>
            </div>

            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                marginBottom: '0.25rem',
                textShadow: '0 0 60px rgba(144,204,223,0.3)',
              }}
            >
              IMPULSE
            </h1>
            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                marginBottom: '2rem',
                background: 'linear-gradient(90deg, #90ccdf 0%, #ffffff 50%, #2a96b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              2026
            </h1>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.375rem)', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', marginBottom: '2.5rem', letterSpacing: '0.04em' }}>
              Theme: <span style={{ color: '#90ccdf', fontStyle: 'normal', fontWeight: 700 }}>Human Spark</span>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', borderRadius: 12, border: '1px solid rgba(144,204,223,0.25)', background: 'rgba(144,204,223,0.06)' }}>
                <span style={{ fontSize: '1.5rem' }}>📅</span>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Save the Date</p>
                  <p style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>29 September 2026</p>
                </div>
              </div>
              <Countdown />
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="#participation"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.75rem 2rem', borderRadius: 8,
                  background: 'rgba(26,125,158,0.3)', border: '1px solid rgba(144,204,223,0.45)',
                  color: '#90ccdf', fontSize: '0.9375rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s',
                }}
              >
                Call for Participation
              </a>
              <a
                href="#film"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.75rem 2rem', borderRadius: 8,
                  background: 'transparent', border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem', fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s',
                }}
              >
                ▶ Watch Impulse 2025 Film
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.4 }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>Scroll</p>
          <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }} />
        </div>
      </section>

      {/* Why you should join — Slider */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">6 Reasons</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3rem', lineHeight: 1.2 }}>
            Why you should <span className="text-gradient">join Impulse</span>
          </h2>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card"
                style={{ padding: '1.75rem' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{r.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.625rem' }}>{r.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>{r.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile slider */}
          <div className="md:hidden relative" style={{ minHeight: 200 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="card"
                style={{ padding: '1.75rem' }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{reasons[slide].icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.625rem' }}>{reasons[slide].title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.7 }}>{reasons[slide].body}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex gap-2 justify-center mt-4">
              {reasons.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  style={{
                    width: i === slide ? 20 : 6,
                    height: 6,
                    borderRadius: 999,
                    background: i === slide ? 'var(--accent-light)' : 'var(--bg-border)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Watch Film 2025 */}
      <section id="film" style={{ padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="section-label mb-4">Relive the Magic</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Watch the <span className="text-gradient">Impulse 2025 Film</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Relive the energy, the moments, and the magic of Impulse 2025 — "Echoes of Tomorrow". 500+ designers. One unforgettable day. Watch the official after-film.
              </p>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.9375rem', padding: '0.75rem 2rem' }}
              >
                ▶ Watch on YouTube
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 16,
                  overflow: 'hidden',
                  aspectRatio: '16/9',
                  border: '1px solid var(--bg-border)',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #040608 0%, #07101a 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,125,158,0.06) 1px, transparent 1px), linear-gradient(90deg,rgba(26,125,158,0.06) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      background: 'rgba(26,125,158,0.3)',
                      border: '2px solid rgba(144,204,223,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                      fontSize: '1.75rem',
                      color: '#90ccdf',
                      transition: 'all 0.2s',
                    }}
                  >
                    ▶
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem' }}>Impulse 2025 — After Film</p>
                  <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginTop: '0.25rem' }}>"Echoes of Tomorrow"</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What people loved — Impulse 2025 */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Voices from 2025</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3rem', lineHeight: 1.2 }}>
            What people loved about <span className="text-gradient">Impulse 2025</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {loved2025.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  padding: '1.75rem',
                  borderRadius: 12,
                  border: '1px solid var(--bg-border)',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <span style={{ fontSize: '1.75rem', color: 'var(--accent-light)', lineHeight: 1 }}>"</span>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7, fontStyle: 'italic', flex: 1 }}>{l.quote}</p>
                <div>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.875rem' }}>{l.name}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>{l.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme — Human Spark */}
      <section style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(26,125,158,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div
                style={{
                  aspectRatio: '4/3',
                  borderRadius: 16,
                  border: '1px solid rgba(144,204,223,0.2)',
                  background: 'linear-gradient(135deg, #040608 0%, #07101a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(26,125,158,0.05) 1px, transparent 1px), linear-gradient(90deg,rgba(26,125,158,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <SparkField count={20} />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.5rem', textShadow: '0 0 40px rgba(144,204,223,0.4)' }}>Human</p>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em', background: 'linear-gradient(90deg, #90ccdf, #2a96b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Spark</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="section-label mb-4">Impulse 2026 Theme</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                <span className="text-gradient">Human Spark</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                In a world increasingly shaped by AI and automation, the most powerful thing a designer can bring is their irreducibly human spark — curiosity, empathy, creativity, and the capacity to be moved.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
                Impulse 2026 explores what it truly means to be a human designer in the age of AI — and why that spark has never mattered more.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call for Participation */}
      <section id="participation" style={{ padding: '6rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--bg-border)' }}>
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
                padding: '0.375rem 1.25rem',
                borderRadius: 999,
                background: 'rgba(251,146,60,0.1)',
                border: '1px solid rgba(251,146,60,0.25)',
                color: '#fb923c',
                fontSize: '0.8125rem',
                fontWeight: 600,
                marginBottom: '2rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              ⏳ Opening Soon
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
              Call for Participation
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.0625rem', maxWidth: 540, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Want to speak, showcase, run a workshop, or be part of the Impulse 2026 curation team? Submissions open soon — stay tuned.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '1rem 2rem',
                borderRadius: 12,
                border: '1px solid var(--bg-border)',
                background: 'var(--bg-card)',
              }}
            >
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>Get notified when submissions open</span>
              <Link to="/join" className="btn-primary" style={{ fontSize: '0.8125rem', padding: '0.5rem 1.25rem' }}>
                Notify Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
