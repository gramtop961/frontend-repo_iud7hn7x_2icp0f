import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Developers & General Contractors',
    desc: 'Trusted partner for large-scale builds from concept to commissioning.'
  },
  {
    title: 'Industry & Data Centers',
    desc: 'High-availability power systems with redundancy and fault tolerance.'
  },
  {
    title: 'Utilities & Infrastructure',
    desc: 'Grid-facing design, protection, and interface coordination.'
  }
]

const Clients = () => {
  return (
    <section className="bg-white" id="clients">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-zinc-200 p-8 bg-white shadow-sm/50 hover:shadow-lg/40 transition-shadow"
            >
              <h3 className="text-lg font-semibold text-zinc-900">{card.title}</h3>
              <p className="mt-3 text-zinc-600">{card.desc}</p>
              <div className="mt-6 h-1 w-10 bg-zinc-200 group-hover:w-16 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
