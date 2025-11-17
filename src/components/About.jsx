import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="bg-white" id="about">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-24 grid md:grid-cols-[320px_1fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-zinc-50 to-white border border-zinc-200"
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif text-zinc-900">Daniel Rautscher – Elektroplaner</h3>
          <p className="mt-4 text-zinc-600 leading-relaxed text-lg">
            Daniel leads Studio Rautscher with a focus on safety, reliability and compliance. With experience across mission-critical infrastructure, he translates complex requirements into clear, buildable designs – always aligned with IEC/EN/SIA standards and client objectives.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
