import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'Requirements Analysis' },
  { n: '02', title: 'Concept & Variants' },
  { n: '03', title: 'Detailed Engineering' },
  { n: '04', title: 'Coordination & Implementation' },
  { n: '05', title: 'Verification & Optimization' }
]

const Process = () => {
  return (
    <section className="bg-white" id="process">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-24">
        <div className="space-y-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10 border-b border-zinc-200 pb-8"
            >
              <div className="text-5xl md:text-7xl font-serif text-zinc-200 leading-none">{s.n}</div>
              <div className="text-xl md:text-2xl text-zinc-900">{s.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
