import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle split background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-zinc-50" />

      {/* Spline 3D Scene */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-90">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft light overlay for premium vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="max-w-2xl py-20 md:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight text-zinc-900"
          >
            Studio Rautscher – Electrical Engineering & Energy Systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="mt-6 text-zinc-600 text-lg md:text-xl leading-relaxed"
          >
            Premium electrical design for data centers, substations and complex buildings. Safe. Precise. Compliant with IEC/EN/SIA standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ backgroundColor: '#C9A227' }}
            >
              Book a Consultation
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-zinc-900 border border-zinc-200 hover:border-zinc-300 bg-white/80 backdrop-blur transition"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
