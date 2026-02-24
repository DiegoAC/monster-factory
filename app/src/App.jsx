import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Supplements from './components/Supplements'
import Musculacion from './pages/Musculacion'
import Entrenamiento from './pages/Entrenamiento'
import Cardio from './pages/Cardio'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import SpotlightCursor from './components/SpotlightCursor'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-text-primary font-sans selection:bg-primary/30 relative">
        <SpotlightCursor />
        <ProgressBar />
        <Navbar />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/suplementos" element={<div className="pt-20"><Supplements /></div>} />
            <Route path="/musculacion" element={<Musculacion />} />
            <Route path="/entrenamiento" element={<Entrenamiento />} />
            <Route path="/cardio" element={<Cardio />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
