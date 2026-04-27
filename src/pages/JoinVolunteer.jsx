import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'

const interests = [
  'UX Design',
  'Visual Design',
  'UX Research',
  'Content Design',
  'Design Systems',
  'Motion Design',
  'Design Strategy',
  'Mentorship',
  'Event Organisation',
  'Design Education',
]

const FORM_URL = 'https://formspree.io/f/xdoqlbpk'

export default function JoinVolunteer() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    interests: [],
    skills: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const toggle = (interest) =>
    setForm(f => ({
      ...f,
      interests: f.interests.includes(interest)
        ? f.interests.filter(i => i !== interest)
        : [...f.interests, interest],
    }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, interests: form.interests.join(', ') }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageTransition>
      <section className="grid-bg relative" style={{ padding: '8rem 0 4rem' }}>
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: 400,
            height: 300,
            background: 'radial-gradient(ellipse, rgba(26,95,255,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Get Involved</p>
          <h1
            style={{
              fontFamily: "'72', sans-serif",
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              maxWidth: 600,
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            Join as a <span className="text-gradient">Volunteer</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 500, lineHeight: 1.7 }}>
            Contribute to Design Hub India by volunteering your time, skills, and passion. Every contribution matters.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0 8rem', borderTop: '1px solid var(--bg-border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Why volunteer */}
            <div className="lg:col-span-2">
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Why Volunteer
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { icon: '◈', title: 'Grow your network',  body: 'Connect with design professionals across SAP India offices' },
                  { icon: '✦', title: 'Build leadership',   body: 'Take ownership of initiatives that impact hundreds of designers' },
                  { icon: '◇', title: 'Learn faster',       body: 'Get early access to workshops, talks, and exclusive content' },
                  { icon: '⬡', title: 'Leave a legacy',     body: 'Create resources and programs that outlast your tenure' },
                ].map(item => (
                  <li key={item.title} style={{ display: 'flex', gap: '0.875rem' }}>
                    <span style={{ color: 'var(--accent-light)', fontSize: '1.125rem', marginTop: '0.05rem' }}>{item.icon}</span>
                    <div>
                      <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{item.title}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      padding: '3rem',
                      borderRadius: 16,
                      border: '1px solid rgba(74,222,128,0.25)',
                      background: 'rgba(74,222,128,0.06)',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        background: 'rgba(74,222,128,0.15)',
                        border: '1px solid rgba(74,222,128,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        fontSize: '1.5rem',
                      }}
                    >
                      ✓
                    </div>
                    <h3 style={{ fontFamily: "'72', sans-serif", fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                      Thank you, {form.name.split(' ')[0]}!
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: 380, margin: '0 auto' }}>
                      We've received your application and will be in touch soon. Welcome to the Design Hub India community!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    style={{
                      padding: '2.5rem',
                      borderRadius: 16,
                      border: '1px solid var(--bg-border)',
                      background: 'var(--bg-card)',
                    }}
                  >
                    <div className="flex flex-col gap-6">
                      {/* Name */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                          Full Name <span style={{ color: 'var(--accent-light)' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="form-input"
                          placeholder="Your name"
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                          SAP Email <span style={{ color: 'var(--accent-light)' }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          className="form-input"
                          placeholder="your.name@sap.com"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        />
                      </div>

                      {/* Area of interest */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                          Areas of Interest <span style={{ color: 'var(--accent-light)' }}>*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {interests.map(interest => (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => toggle(interest)}
                              className="tag"
                              style={{
                                cursor: 'pointer',
                                background: form.interests.includes(interest) ? 'rgba(26,95,255,0.25)' : undefined,
                                borderColor: form.interests.includes(interest) ? 'var(--accent)' : undefined,
                                color: form.interests.includes(interest) ? 'var(--accent-light)' : undefined,
                              }}
                            >
                              {interest}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                          Skills & Tools
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Figma, Design Systems, UX Research, etc."
                          value={form.skills}
                          onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                          Why do you want to join?
                        </label>
                        <textarea
                          className="form-input"
                          rows={4}
                          placeholder="Tell us what excites you about the community..."
                          style={{ resize: 'vertical' }}
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        />
                      </div>

                      {status === 'error' && (
                        <p style={{ color: '#ef4444', fontSize: '0.875rem', padding: '0.75rem 1rem', borderRadius: 8, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting' || form.interests.length === 0}
                        className="btn-primary"
                        style={{
                          justifyContent: 'center',
                          fontSize: '0.9375rem',
                          padding: '0.75rem 2rem',
                          opacity: (status === 'submitting' || form.interests.length === 0) ? 0.6 : 1,
                          cursor: (status === 'submitting' || form.interests.length === 0) ? 'not-allowed' : 'pointer',
                        }}
                      >
                        {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
