import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'

const levelColors = {
  Beginner:     { bg: 'rgba(52,168,83,0.12)',  color: '#52a853', border: 'rgba(52,168,83,0.25)' },
  Intermediate: { bg: 'rgba(251,188,5,0.12)',  color: '#c8a200', border: 'rgba(251,188,5,0.25)' },
  Advanced:     { bg: 'rgba(234,67,53,0.12)',  color: '#ea4335', border: 'rgba(234,67,53,0.25)' },
}

const resources = [
  { id: 1, title: 'Introduction to Design Systems', type: 'Guide', level: 'Beginner', excerpt: 'Understand the fundamentals of design systems — what they are, why they matter, and how to build one for your product.', tags: ['Design Systems', 'Foundations'], author: 'Priya S.', readTime: '12 min', contributed: true },
  { id: 2, title: 'Figma Variables: A Complete Guide', type: 'Article', level: 'Intermediate', excerpt: 'Everything you need to know about Figma variables — from basic color tokens to complex multi-mode theming setups.', tags: ['Figma', 'Variables', 'Tokens'], author: 'Ananya K.', readTime: '18 min', contributed: true },
  { id: 3, title: 'UX Writing for Enterprise Products', type: 'Guide', level: 'Intermediate', excerpt: 'Learn the craft of writing clear, concise copy for enterprise software — error messages, empty states, and onboarding.', tags: ['Writing', 'Content Design'], author: 'Neha B.', readTime: '20 min', contributed: true },
  { id: 4, title: 'Accessibility-First Design Principles', type: 'Article', level: 'Beginner', excerpt: 'A practical guide to designing inclusive digital products — WCAG 2.1, color contrast, keyboard navigation.', tags: ['Accessibility', 'WCAG'], author: 'Rohit V.', readTime: '15 min', contributed: false },
  { id: 5, title: 'Advanced Prototyping Techniques in Figma', type: 'Training', level: 'Advanced', excerpt: 'Go beyond basic click-throughs. Build dynamic, data-driven prototypes with variables, expressions, and complex flows.', tags: ['Figma', 'Prototyping'], author: 'Divya N.', readTime: '30 min', contributed: true },
  { id: 6, title: 'Strategic Design Leadership', type: 'Article', level: 'Advanced', excerpt: 'Frameworks for design leaders — influencing strategy, building design culture, and communicating value to stakeholders.', tags: ['Leadership', 'Strategy'], author: 'Kiran R.', readTime: '25 min', contributed: true },
  { id: 7, title: 'User Interview Best Practices', type: 'Guide', level: 'Beginner', excerpt: 'How to plan, conduct, and synthesize user interviews that uncover real needs — question structures and affinity mapping.', tags: ['Research', 'Interviews'], author: 'Meera J.', readTime: '14 min', contributed: false },
  { id: 8, title: 'Designing for Data-Heavy Products', type: 'Article', level: 'Intermediate', excerpt: 'Principles and patterns for dashboards, analytics, and data visualization in enterprise products.', tags: ['Data Viz', 'Dashboard'], author: 'Sanjay P.', readTime: '22 min', contributed: true },
  { id: 9, title: 'AI Prompts for UX Designers', type: 'Guide', level: 'Beginner', excerpt: 'A curated collection of prompt templates and strategies for UX designers working with AI tools — research, ideation, writing.', tags: ['AI', 'Prompts', 'Tools'], author: 'Aditya K.', readTime: '16 min', contributed: true },
  { id: 10, title: 'Design Critique Facilitation', type: 'Training', level: 'Intermediate', excerpt: 'How to run effective design critiques — setting context, giving structured feedback, and building a culture of review.', tags: ['Process', 'Critique', 'Culture'], author: 'Kavya M.', readTime: '18 min', contributed: true },
  { id: 11, title: 'Motion Principles for Product Design', type: 'Article', level: 'Intermediate', excerpt: 'The 12 principles of motion design applied to digital products — purposeful animation without adding friction.', tags: ['Motion', 'Animation'], author: 'Lakshmi S.', readTime: '20 min', contributed: false },
  { id: 12, title: 'Neuroaesthetics in UX', type: 'Article', level: 'Advanced', excerpt: 'How brain science informs great design — cognitive load, visual hierarchy, emotional response, and persuasive patterns.', tags: ['Psychology', 'Neuroaesthetics'], author: 'Arjun M.', readTime: '28 min', contributed: true },
]

const typeFilters  = ['All', 'Article', 'Guide', 'Training']
const levelFilters = ['All', 'Beginner', 'Intermediate', 'Advanced']
const allTags = [...new Set(resources.flatMap(r => r.tags))]

export default function Resources() {
  const [typeF,  setTypeF]  = useState('All')
  const [levelF, setLevelF] = useState('All')
  const [activeTag, setActiveTag] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = resources.filter(r => {
    if (typeF  !== 'All' && r.type  !== typeF)  return false
    if (levelF !== 'All' && r.level !== levelF) return false
    if (activeTag && !r.tags.includes(activeTag)) return false
    if (search && !r.title.toLowerCase().includes(search.toLowerCase()) && !r.excerpt.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <PageTransition>
      <section className="grid-bg relative" style={{ padding: '8rem 0 4rem' }}>
        <div style={{ position: 'absolute', top: '20%', right: '8%', width: 400, height: 300, background: 'radial-gradient(ellipse, rgba(26,95,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">From Designers, For Designers</p>
          <h1 style={{ fontFamily: "'72', sans-serif", fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 200, color: 'var(--text-primary)', maxWidth: 640, marginBottom: '1rem', lineHeight: 1.2 }}>
            Learning <span className="text-gradient">Resources</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 520, lineHeight: 1.7 }}>
            A community-curated repository of articles, guides, and training materials — crowdsourced by SAP India designers, for designers everywhere.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0 6rem', borderTop: '1px solid var(--bg-border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Search */}
          <div style={{ marginBottom: '1.5rem' }}>
            <input
              type="text"
              placeholder="Search resources..."
              className="form-input"
              style={{ maxWidth: 400, fontSize: '0.9375rem' }}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-5 mb-5">
            <div className="flex items-center gap-2 flex-wrap">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>Type:</span>
              {typeFilters.map(f => (
                <button key={f} onClick={() => setTypeF(f)} style={{ padding: '0.4rem 0.875rem', borderRadius: 999, fontSize: '0.8125rem', fontWeight: 500, cursor: 'pointer', border: '1px solid', transition: 'all 0.2s ease', borderColor: typeF === f ? 'var(--accent)' : 'var(--bg-border)', background: typeF === f ? 'var(--accent-dim)' : 'transparent', color: typeF === f ? 'var(--accent-light)' : 'var(--text-muted)' }}>{f}</button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>Level:</span>
              {levelFilters.map(f => (
                <button key={f} onClick={() => setLevelF(f)} style={{ padding: '0.4rem 0.875rem', borderRadius: 999, fontSize: '0.8125rem', fontWeight: 500, cursor: 'pointer', border: '1px solid', transition: 'all 0.2s ease', borderColor: levelF === f ? 'var(--accent)' : 'var(--bg-border)', background: levelF === f ? 'var(--accent-dim)' : 'transparent', color: levelF === f ? 'var(--accent-light)' : 'var(--text-muted)' }}>{f}</button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => setActiveTag(null)} className="tag" style={{ cursor: 'pointer', background: !activeTag ? 'rgba(26,95,255,0.25)' : undefined, borderColor: !activeTag ? 'var(--accent)' : undefined }}>All Topics</button>
            {allTags.map(tag => (
              <button key={tag} onClick={() => setActiveTag(t => t === tag ? null : tag)} className="tag" style={{ cursor: 'pointer', background: activeTag === tag ? 'rgba(26,95,255,0.25)' : undefined, borderColor: activeTag === tag ? 'var(--accent)' : undefined }}>{tag}</button>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{filtered.length}</span> resource{filtered.length !== 1 ? 's' : ''}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent-light)', display: 'inline-block' }} />
              Community contributed
            </div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Nothing found</p>
              <p style={{ fontSize: '0.875rem' }}>Try different filters or search terms</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((r, i) => {
                const level = levelColors[r.level] || levelColors.Beginner
                return (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="card"
                    style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}
                  >
                    {/* Type + Level */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="tag">{r.type}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 500, padding: '0.2rem 0.7rem', borderRadius: 999, background: level.bg, color: level.color, border: `1px solid ${level.border}` }}>{r.level}</span>
                      {r.contributed && (
                        <span style={{ fontSize: '0.65rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: 999, background: 'var(--accent-dim)', color: 'var(--accent-light)', border: '1px solid rgba(26,95,255,0.2)' }}>Community</span>
                      )}
                    </div>

                    <h3 style={{ fontFamily: "'72', sans-serif", fontSize: '1.0625rem', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.625rem', lineHeight: 1.4, flex: 'none' }}>{r.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, flex: 1, marginBottom: '1.25rem' }}>{r.excerpt}</p>

                    <div className="flex gap-2 flex-wrap mb-3">
                      {r.tags.slice(0, 3).map(t => <span key={t} className="tag" style={{ fontSize: '0.7rem', padding: '0.18rem 0.55rem' }}>{t}</span>)}
                    </div>

                    <div className="flex items-center justify-between" style={{ borderTop: '1px solid var(--bg-border)', paddingTop: '0.875rem', marginTop: 'auto' }}>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{r.author}</p>
                        <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{r.readTime} read</p>
                      </div>
                      <span style={{ color: 'var(--accent-light)', fontSize: '1.125rem', cursor: 'pointer' }}>→</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* Contribute CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginTop: '4rem', padding: '2rem', borderRadius: 16, border: '1px solid rgba(26,95,255,0.25)', background: 'linear-gradient(135deg, rgba(26,95,255,0.08), transparent)', textAlign: 'center' }}
          >
            <p style={{ fontFamily: "'72', sans-serif", fontSize: '1.375rem', fontWeight: 300, color: 'var(--text-primary)', marginBottom: '0.625rem' }}>
              Have something to share?
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: 420, margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              This repository is crowdsourced. If you've written an article, guide, or training material — contribute it to the community.
            </p>
            <a
              href="mailto:uxdesignindia@global.corp.sap"
              className="btn-primary"
              style={{ fontSize: '0.875rem', padding: '0.625rem 1.75rem' }}
            >
              Submit a Resource
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
