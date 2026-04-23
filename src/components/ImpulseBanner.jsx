import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Animated spark particles for the Impulse hero banner
function Sparks({ count = 28 }) {
  const sparks = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top:  Math.random() * 100,
      size: 1.5 + Math.random() * 3,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3,
    }))
  ).current

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {sparks.map(s => (
        <span
          key={s.id}
          style={{
            position: 'absolute',
            left:  `${s.left}%`,
            top:   `${s.top}%`,
            width:  s.size,
            height: s.size,
            borderRadius: '50%',
            background: '#90ccdf',
            boxShadow: `0 0 ${s.size * 3}px ${s.size}px rgba(144,204,223,0.7)`,
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
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; }
          100% { opacity: 0.3; transform: scale(1.2) translateY(-14px); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.95); opacity: 0.5; }
          100% { transform: scale(1.05); opacity: 0; }
        }
        @keyframes textGlowPulse {
          0%, 100% { text-shadow: 0 0 40px rgba(144,204,223,0.4), 0 0 80px rgba(26,125,158,0.2); }
          50%       { text-shadow: 0 0 60px rgba(144,204,223,0.7), 0 0 120px rgba(26,125,158,0.4); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(26,125,158,0.4); box-shadow: 0 0 20px rgba(26,125,158,0.2); }
          50%       { border-color: rgba(144,204,223,0.7); box-shadow: 0 0 40px rgba(144,204,223,0.3); }
        }
      `}</style>

      <Link to="/impulse" style={{ textDecoration: 'none', display: 'block' }}>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 20,
            border: '1px solid rgba(26,125,158,0.4)',
            background: 'linear-gradient(135deg, #060810 0%, #0a0f1a 40%, #07121e 100%)',
            padding: 'clamp(2rem,5vw,4rem)',
            cursor: 'pointer',
            animation: 'borderGlow 3s ease-in-out infinite',
          }}
        >
          {/* Grid overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(26,125,158,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,125,158,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Radial glow center */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: '70%',
              height: '200%',
              background: 'radial-gradient(ellipse, rgba(26,125,158,0.18) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          {/* Pulse ring */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: '80%',
              height: '80%',
              border: '1px solid rgba(144,204,223,0.15)',
              borderRadius: 16,
              animation: 'pulseRing 2.5s ease-out infinite',
              pointerEvents: 'none',
            }}
          />

          <Sparks />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '0.3rem 0.875rem',
                  borderRadius: 999,
                  background: 'rgba(144,204,223,0.1)',
                  border: '1px solid rgba(144,204,223,0.3)',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#90ccdf', boxShadow: '0 0 8px #90ccdf', display: 'inline-block' }} />
                <span style={{ color: '#90ccdf', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Annual Flagship Event</span>
              </div>
              <span
                style={{
                  padding: '0.3rem 0.875rem',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                }}
              >
                Design Festival · 29 Sept 2026
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
                animation: 'textGlowPulse 3s ease-in-out infinite',
              }}
            >
              IMPULSE
            </h2>
            <h2
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
                background: 'linear-gradient(90deg, #90ccdf, #2a96b8, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              2026
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontStyle: 'italic', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Theme: <span style={{ color: '#90ccdf', fontStyle: 'normal', fontWeight: 600 }}>Human Spark</span>
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '0.625rem 1.5rem',
                  borderRadius: 8,
                  background: 'rgba(26,125,158,0.25)',
                  border: '1px solid rgba(144,204,223,0.4)',
                  color: '#90ccdf',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
              >
                Explore Impulse 2026 →
              </div>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8125rem' }}>
                Save the Date · 29 September 2026
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
