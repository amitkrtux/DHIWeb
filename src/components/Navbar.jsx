import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/events',   label: 'Events' },
  { to: '/learning', label: 'Learning' },
  { to: '/projects', label: 'Projects' },
  { to: '/join',     label: 'Join Us' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const location = useLocation()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--bg-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="Design Hub India Home">
          <div
            style={{
              width: 32,
              height: 32,
              background: 'var(--accent)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(26,125,158,0.4)',
              transition: 'box-shadow 0.3s ease',
            }}
            className="group-hover:shadow-glow"
          >
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>D</span>
          </div>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Design Hub <span className="text-gradient">India</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                padding: '0.4rem 0.875rem',
                borderRadius: 6,
                fontSize: '0.875rem',
                fontWeight: isActive(to) ? 500 : 400,
                color: isActive(to) ? 'var(--accent-light)' : 'var(--text-secondary)',
                background: isActive(to) ? 'var(--accent-dim)' : 'transparent',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
              className="hover:text-accent-400"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: '1px solid var(--bg-border)',
              background: 'var(--bg-card)',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: 16,
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* CTA */}
          <Link to="/join" className="btn-primary hidden md:inline-flex" style={{ padding: '0.5rem 1.125rem', fontSize: '0.8125rem' }}>
            Join Community
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="md:hidden"
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: '1px solid var(--bg-border)',
              background: 'var(--bg-card)',
              color: 'var(--text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              cursor: 'pointer',
            }}
          >
            <span style={{ width: 16, height: 1.5, background: 'currentColor', display: 'block', transition: 'all 0.2s', transform: menuOpen ? 'translateY(3.25px) rotate(45deg)' : '' }} />
            <span style={{ width: 16, height: 1.5, background: 'currentColor', display: 'block', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 16, height: 1.5, background: 'currentColor', display: 'block', transition: 'all 0.2s', transform: menuOpen ? 'translateY(-3.25px) rotate(-45deg)' : '' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden', borderTop: '1px solid var(--bg-border)', background: 'var(--bg-secondary)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    padding: '0.625rem 0.875rem',
                    borderRadius: 8,
                    fontSize: '0.875rem',
                    color: isActive(to) ? 'var(--accent-light)' : 'var(--text-secondary)',
                    background: isActive(to) ? 'var(--accent-dim)' : 'transparent',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              ))}
              <Link to="/join" className="btn-primary mt-2">Join Community</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
