import { Link } from 'react-router-dom'

const footerLinks = {
  Community: [
    { to: '/about',       label: 'About Us' },
    { to: '/initiatives', label: 'Initiatives' },
    { to: '/impulse',     label: 'Impulse 2026' },
    { to: '/join',        label: 'Become a Volunteer' },
  ],
  Learn: [
    { to: '/resources',   label: 'Learning Resources' },
    { to: '/initiatives', label: 'Active Initiatives' },
    { to: '/about',       label: 'Our Team' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid var(--bg-border)', background: 'var(--bg-secondary)', marginTop: 'auto' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <div style={{ width: 32, height: 32, background: 'var(--accent)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px rgba(26,125,158,0.3)' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>D</span>
              </div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Design Hub <span className="text-gradient">India</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 320, marginBottom: '1.5rem' }}>
              The Beating Heart of Global SAP Design — connecting 200+ designers across India to learn, collaborate, and celebrate design.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="mailto:uxdesignindia@global.corp.sap" style={{ padding: '0.375rem 0.875rem', borderRadius: 6, border: '1px solid var(--bg-border)', color: 'var(--text-muted)', fontSize: '0.75rem', textDecoration: 'none', transition: 'all 0.2s ease' }}>
                uxdesignindia@global.corp.sap
              </a>
            </div>
            <div className="flex gap-4 mt-4">
              {[
                { label: 'Impulse 2026', to: '/impulse' },
                { label: 'SAP.com', href: 'https://sap.com' },
              ].map(l => l.to ? (
                <Link key={l.label} to={l.to} style={{ color: 'var(--accent-light)', fontSize: '0.8125rem', textDecoration: 'none', fontWeight: 500 }}>{l.label} →</Link>
              ) : (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', textDecoration: 'none' }}>{l.label}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>{group}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s ease' }}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glow-line mt-12 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>© {year} Design Hub India · Part of SAP SE</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>Built with ♥ by the DHI volunteer community</p>
        </div>
      </div>
    </footer>
  )
}
