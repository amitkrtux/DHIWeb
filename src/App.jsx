import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Impulse2026 from './pages/Impulse2026'
import Initiatives from './pages/Initiatives'
import Resources from './pages/Resources'
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
            <Route path="/"            element={<Home />} />
            <Route path="/about"       element={<About />} />
            <Route path="/impulse"     element={<Impulse2026 />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/resources"   element={<Resources />} />
            <Route path="/join"        element={<JoinVolunteer />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
