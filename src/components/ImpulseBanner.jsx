import { useRef } from 'react'
import { Link } from 'react-router-dom'

const BLUE   = '#0070F2'
const PINK   = '#FF5C77'
const YELLOW = '#FFDF72'

function Sparks({ count = 48 }) {
  const colors = [BLUE, PINK, YELLOW, '#7bb3ff', '#ff8fa3', '#ffe082', '#4d7cff']
  const sparks = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left:     Math.random() * 100,
      top:      Math.random() * 100,
      size:     1.5 + Math.random() * 4,
      delay:    Math.random() * 6,
      duration: 2.5 + Math.random() * 4,
      color:    colors[i % colors.length],
    }))
  ).current

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {sparks.map(s => (
        <span
          key={s.id}
          style={{
            position: 'absolute',
            left:     `${s.left}%`,
            top:      `${s.top}%`,
            width:    s.size,
            height:   s.size,
            borderRadius: '50%',
            background: s.color,
            boxShadow: `0 0 ${s.size * 4}px ${s.size * 1.5}px ${s.color}55`,
            animation: `sparkFloat ${s.duration}s ${s.delay}s ease-in-out infinite alternate`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  )
}

export default function ImpulseBanner() {
  return (
    <>
      <style>{`
        @keyframes sparkFloat {
          0%   { opacity: 0;   transform: scale(0.4) translateY(0); }
          40%  { opacity: 0.9; }
          100% { opacity: 0.2; transform: scale(1.4) translateY(-18px); }
        }
        @keyframes impulsePulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.85; }
        }
        @keyframes festivalBorder {
          0%   { border-color: rgba(0,112,242,0.5); }
          33%  { border-color: rgba(255,92,119,0.5); }
          66%  { border-color: rgba(255,223,114,0.5); }
          100% { border-color: rgba(0,112,242,0.5); }
        }
        @keyframes colorShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <Link to="/impulse" style={{ textDecoration: 'none', display: 'block' }}>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 20,
            border: '1px solid rgba(0,112,242,0.5)',
            background: 'linear-gradient(135deg, #04050e 0%, #07050e 40%, #060408 100%)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            cursor: 'pointer',
            animation: 'festivalBorder 4s ease-in-out infinite',
          }}
        >
          {/* Blue glow — top left */}
          <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '55%', height: '140%', background: `radial-gradient(ellipse, ${BLUE}28 0%, transparent 65%)`, pointerEvents: 'none' }} />
          {/* Pink glow — top right */}
          <div style={{ position: 'absolute', top: '-30%', right: '-5%',  width: '50%', height: '130%', background: `radial-gradient(ellipse, ${PINK}22 0%, transparent 65%)`, pointerEvents: 'none' }} />
          {/* Yellow glow — bottom center */}
          <div style={{ position: 'absolute', bottom: '-30%', left: '30%', width: '45%', height: '100%', background: `radial-gradient(ellipse, ${YELLOW}18 0%, transparent 65%)`, pointerEvents: 'none' }} />

          {/* Subtle diagonal grid */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />

          {/* Large ghost "2026" watermark */}
          <div style={{ position: 'absolute', right: '-2%', bottom: '-10%', fontFamily: "'72', sans-serif", fontSize: 'clamp(8rem, 22vw, 16rem)', fontWeight: 700, color: 'rgba(255,255,255,0.025)', lineHeight: 1, userSelect: 'none', letterSpacing: '-0.04em', pointerEvents: 'none' }}>
            2026
          </div>

          <Sparks />

          <div style={{ position: 'relative', zIndex: 2 }}>
            {/* Top badges */}
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.3rem 0.875rem', borderRadius: 999, background: `${BLUE}18`, border: `1px solid ${BLUE}55` }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: BLUE, boxShadow: `0 0 6px ${BLUE}`, display: 'inline-block' }} />
                <span style={{ color: '#7bb3ff', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Annual Design Festival</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.3rem 0.875rem', borderRadius: 999, background: `${PINK}14`, border: `1px solid ${PINK}44` }}>
                <span style={{ color: PINK, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em' }}>29 September 2026</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.3rem 0.875rem', borderRadius: 999, background: `${YELLOW}12`, border: `1px solid ${YELLOW}44` }}>
                <span style={{ color: YELLOW, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em' }}>Bangalore</span>
              </div>
            </div>

            {/* "Impulse is back!" label */}
            <p style={{
              fontSize: 'clamp(0.75rem, 1.5vw, 0.9375rem)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
              background: `linear-gradient(90deg, ${BLUE}, ${PINK}, ${YELLOW}, ${BLUE})`,
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'colorShift 4s linear infinite',
            }}>
              ✦ Impulse is back ✦
            </p>

            {/* Main headline */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{
                fontFamily: "'72', sans-serif",
                fontSize: 'clamp(3rem, 9vw, 6.5rem)',
                fontWeight: 200,
                color: '#ffffff',
                lineHeight: 0.95,
                letterSpacing: '-0.025em',
                marginBottom: '0.15em',
              }}>
                IMPULSE
              </h2>
              <h2 style={{
                fontFamily: "'72', sans-serif",
                fontSize: 'clamp(3rem, 9vw, 6.5rem)',
                fontWeight: 200,
                lineHeight: 0.95,
                letterSpacing: '-0.025em',
                background: `linear-gradient(90deg, ${BLUE} 0%, ${PINK} 55%, ${YELLOW} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                2026
              </h2>
            </div>

            {/* Tagline */}
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 300, letterSpacing: '0.04em', marginBottom: '2rem' }}>
              Stay tuned.
            </p>

            {/* CTA row */}
            <div className="flex items-center gap-4 flex-wrap">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.6rem 1.5rem', borderRadius: 8, background: `${BLUE}22`, border: `1px solid ${BLUE}55`, color: '#7bb3ff', fontSize: '0.875rem', fontWeight: 600 }}>
                Learn more →
              </div>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8125rem' }}>India's largest enterprise design festival</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
