import { Link } from 'react-router-dom'

const footerLinks = {
  Community: [
    { to: '/about',    label: 'About Us' },
    { to: '/events',   label: 'Events' },
    { to: '/projects', label: 'Projects' },
    { to: '/join',     label: 'Volunteer' },
  ],
  Resources: [
    { to: '/learning', label: 'Learning Hub' },
    { to: '/events',   label: 'Upcoming Events' },
    { to: '/projects', label: 'Active Initiatives' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid var(--bg-border)',
        background: 'var(--bg-secondary)',
        marginTop: 'auto',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: 'var(--accent)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>D</span>
              </div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                Design Hub India
              </span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 340 }}>
              A premium design community within SAP India — fostering creativity, collaboration, and cutting-edge design thinking across the enterprise.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://sap.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.375rem 0.875rem',
                  borderRadius: 6,
                  border: '1px solid var(--bg-border)',
                  color: 'var(--text-muted)',
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                SAP.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {group}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      className="hover:text-accent-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glow-line mt-12 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
            © {year} Design Hub India. Part of SAP SE.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
            Built with ♥ by the DHI community
          </p>
        </div>
      </div>
    </footer>
  )
}
