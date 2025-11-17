import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Zap, Shield, FileText } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Electrical LV/MV Design',
    desc: 'From concept to detailed schematics with full compliance.'
  },
  {
    icon: Shield,
    title: 'Cable sizing, Short-circuit & Selectivity Studies',
    desc: 'Robust protection coordination for reliable operation.'
  },
  {
    icon: Cpu,
    title: 'UPS, Diesel, Redundancy & Critical Systems',
    desc: 'High-availability architectures for mission-critical loads.'
  },
  {
    icon: FileText,
    title: 'BIM & Technical Documentation (Revit, EPLAN)',
    desc: 'Digital twins and documentation for seamless coordination.'
  }
]

const Services = () => {
  return (
    <section className="bg-zinc-50" id="services">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <s.icon className="h-6 w-6 text-zinc-900" />
              <h3 className="mt-4 text-zinc-900 font-semibold">{s.title}</h3>
              <p className="mt-2 text-zinc-600 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-1 w-8 bg-zinc-200 group-hover:w-14 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
