import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import LearningHub from './pages/LearningHub'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import JoinVolunteer from './pages/JoinVolunteer'

export default function App() {
  const location = useLocation()

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"              element={<Home />} />
            <Route path="/about"         element={<About />} />
            <Route path="/events"        element={<Events />} />
            <Route path="/events/:id"    element={<EventDetail />} />
            <Route path="/learning"      element={<LearningHub />} />
            <Route path="/projects"      element={<Projects />} />
            <Route path="/projects/:id"  element={<ProjectDetail />} />
            <Route path="/join"          element={<JoinVolunteer />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
