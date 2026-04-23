export default function SectionHeader({ label, title, subtitle, center = false }) {
  return (
    <div style={{ marginBottom: '3rem', textAlign: center ? 'center' : 'left' }}>
      {label && <p className="section-label mb-3">{label}</p>}
      <h2
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 1.2,
          marginBottom: subtitle ? '1rem' : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: center ? 540 : undefined, margin: center ? '0 auto' : undefined, lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
