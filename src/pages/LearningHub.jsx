import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import LearningCard from '../components/LearningCard'
import { learningItems } from '../data/learning'

const typeFilters  = ['All', 'Article', 'Guide', 'Training']
const levelFilters = ['All', 'Beginner', 'Intermediate', 'Advanced']

const allTags = [...new Set(learningItems.flatMap(i => i.tags))]

export default function LearningHub() {
  const [typeFilter,  setTypeFilter]  = useState('All')
  const [levelFilter, setLevelFilter] = useState('All')
  const [activeTag,   setActiveTag]   = useState(null)

  const filtered = learningItems.filter(item => {
    if (typeFilter  !== 'All' && item.type  !== typeFilter)  return false
    if (levelFilter !== 'All' && item.level !== levelFilter) return false
    if (activeTag && !item.tags.includes(activeTag))         return false
    return true
  })

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
            background: 'radial-gradient(ellipse, rgba(26,125,158,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Knowledge & Growth</p>
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              maxWidth: 600,
              marginBottom: '1rem',
              lineHeight: 1.2,
            }}
          >
            Learning <span className="text-gradient">Hub</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 500, lineHeight: 1.7 }}>
            Articles, guides, and training materials curated for designers at every stage of their journey.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0 6rem', borderTop: '1px solid var(--bg-border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>Type:</span>
              {typeFilters.map(f => (
                <button
                  key={f}
                  onClick={() => setTypeFilter(f)}
                  style={{
                    padding: '0.4rem 0.875rem',
                    borderRadius: 999,
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    border: '1px solid',
                    transition: 'all 0.2s ease',
                    borderColor: typeFilter === f ? 'var(--accent)' : 'var(--bg-border)',
                    background: typeFilter === f ? 'var(--accent-dim)' : 'transparent',
                    color: typeFilter === f ? 'var(--accent-light)' : 'var(--text-muted)',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 500 }}>Level:</span>
              {levelFilters.map(f => (
                <button
                  key={f}
                  onClick={() => setLevelFilter(f)}
                  style={{
                    padding: '0.4rem 0.875rem',
                    borderRadius: 999,
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    border: '1px solid',
                    transition: 'all 0.2s ease',
                    borderColor: levelFilter === f ? 'var(--accent)' : 'var(--bg-border)',
                    background: levelFilter === f ? 'var(--accent-dim)' : 'transparent',
                    color: levelFilter === f ? 'var(--accent-light)' : 'var(--text-muted)',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveTag(null)}
              className="tag"
              style={{
                cursor: 'pointer',
                background: !activeTag ? 'rgba(26,125,158,0.25)' : undefined,
                borderColor: !activeTag ? 'var(--accent)' : undefined,
              }}
            >
              All Topics
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(t => t === tag ? null : tag)}
                className="tag"
                style={{
                  cursor: 'pointer',
                  background: activeTag === tag ? 'rgba(26,125,158,0.25)' : undefined,
                  borderColor: activeTag === tag ? 'var(--accent)' : undefined,
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{filtered.length}</span> resource{filtered.length !== 1 ? 's' : ''}
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Nothing matches your filters</p>
              <p style={{ fontSize: '0.875rem' }}>Try a different combination</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((item, i) => <LearningCard key={item.id} item={item} index={i} />)}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
