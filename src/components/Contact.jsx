import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="bg-zinc-50" id="contact">
      <div className="mx-auto max-w-3xl px-6 md:px-12 py-24">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-serif text-zinc-900"
        >
          Request a Project Call
        </motion.h3>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid gap-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input className="rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Full name" />
            <input type="email" className="rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Email" />
          </div>
          <input className="rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Company (optional)" />
          <textarea rows={5} className="rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Project details" />
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition" style={{ backgroundColor: '#C9A227' }}>
            Send Request
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
