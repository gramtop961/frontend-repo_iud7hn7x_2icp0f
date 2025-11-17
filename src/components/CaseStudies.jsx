import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Data Center LUPIN3 (Zürich)',
    desc: '3.2 MVA installed power, UPS + Diesel, LV/MV design'
  },
  {
    title: 'Unterwerk Waldegg – Swissgrid',
    desc: 'Substation design, schematics, interfaces'
  },
  {
    title: 'Residential & Commercial Buildings',
    desc: 'Full electrical planning, energy optimization'
  }
]

const CaseStudies = () => {
  return (
    <section className="bg-zinc-50" id="case-studies">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="h-40 rounded-xl bg-gradient-to-b from-zinc-50 to-white border border-zinc-200" />
              <h3 className="mt-6 text-lg font-semibold text-zinc-900">{p.title}</h3>
              <p className="mt-2 text-zinc-600 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
