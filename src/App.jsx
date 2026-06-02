import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import FindCare from './pages/FindCare'
import Intelligence from './pages/Intelligence'
import Compare from './pages/Compare'
import Knowledge from './pages/Knowledge'
import Resources from './pages/Resources'
import Insurance from './pages/Insurance'
import About from './pages/About'
import Terms from './pages/Terms'
import Sources from './pages/Sources'
import Tools from './pages/Tools'
import Lifestyle from './pages/Lifestyle'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-surface flex flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-care" element={<FindCare />} />
            <Route path="/intelligence" element={<Intelligence />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sources" element={<Sources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
