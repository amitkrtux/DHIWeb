import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const activeProjects = projects.filter(p => p.status === 'active')
  const otherProjects  = projects.filter(p => p.status !== 'active')

  return (
    <PageTransition>
      <section className="grid-bg relative" style={{ padding: '8rem 0 4rem' }}>
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '15%',
            width: 500,
            height: 400,
            background: 'radial-gradient(ellipse, rgba(26,95,255,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Community Work</p>
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
            Projects &{' '}
            <span className="text-gradient">Initiatives</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: 500, lineHeight: 1.7 }}>
            Real work that shapes how design is practiced across SAP India. Find where you can contribute.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0 6rem', borderTop: '1px solid var(--bg-border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="Currently Running" title="Active Initiatives" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {activeProjects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
          </div>

          {otherProjects.length > 0 && (
            <>
              <SectionHeader label="Completed" title="Past Projects" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherProjects.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
              </div>
            </>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
