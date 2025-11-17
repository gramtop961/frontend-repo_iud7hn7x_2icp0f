import React from 'react'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import Process from './components/Process'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Simple top bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 md:px-12 h-14 flex items-center justify-between">
          <a href="#" className="font-serif text-lg">Studio Rautscher</a>
          <nav className="hidden md:flex gap-6 text-sm text-zinc-600">
            <a href="#services" className="hover:text-zinc-900">Services</a>
            <a href="#process" className="hover:text-zinc-900">Process</a>
            <a href="#case-studies" className="hover:text-zinc-900">Portfolio</a>
            <a href="#about" className="hover:text-zinc-900">About</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Clients />
        <Services />
        <Process />
        <CaseStudies />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-10 text-sm text-zinc-500 flex flex-col md:flex-row gap-2 md:items-center justify-between">
          <span>© {new Date().getFullYear()} Studio Rautscher. All rights reserved.</span>
          <span>Zurich, Switzerland</span>
        </div>
      </footer>
    </div>
  )
}

export default App
