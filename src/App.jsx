import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const FindCare = lazy(() => import('./pages/FindCare'))
const Intelligence = lazy(() => import('./pages/Intelligence'))
const Compare = lazy(() => import('./pages/Compare'))
const Knowledge = lazy(() => import('./pages/Knowledge'))
const Resources = lazy(() => import('./pages/Resources'))
const Insurance = lazy(() => import('./pages/Insurance'))
const About = lazy(() => import('./pages/About'))
const Terms = lazy(() => import('./pages/Terms'))
const Sources = lazy(() => import('./pages/Sources'))
const Tools = lazy(() => import('./pages/Tools'))
const Lifestyle = lazy(() => import('./pages/Lifestyle'))

function RouteLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex items-center gap-3 text-ink-secondary">
        <span className="w-5 h-5 border-2 border-ink-quaternary border-t-brand rounded-full animate-spin" />
        <span className="text-[13px] font-medium">Loading…</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-surface flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:text-[13px] focus:font-semibold"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          <Suspense fallback={<RouteLoading />}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
