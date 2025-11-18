import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Riders() {
  const benefits = [
    { title: 'Free premium bike rack', desc: 'Distributes weight evenly, protects your back & posture.' },
    { title: '€40 monthly bonus', desc: 'Earn a reliable monthly bonus just for carrying ads.' },
    { title: 'Extra safety', desc: 'High-vis reflective paint and illuminated edges for visibility.' },
    { title: 'Partner coupons', desc: 'Exclusive discounts at restaurants, gyms and bike shops.' },
  ]

  const [form, setForm] = useState({ name: '', email: '', platform: '' })
  const [status, setStatus] = useState({ loading: false, ok: false, error: '' })
  const API = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, '') || ''

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: false, error: '' })
    try {
      const res = await fetch(`${API}/api/riders/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          platform: form.platform || undefined,
        })
      })
      if (!res.ok) throw new Error((await res.json()).detail || 'Request failed')
      setStatus({ loading: false, ok: true, error: '' })
      setForm({ name: '', email: '', platform: '' })
    } catch (err) {
      setStatus({ loading: false, ok: false, error: err.message || 'Something went wrong' })
    }
  }

  return (
    <section className="pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-4xl sm:text-6xl font-extrabold text-white">Earn Extra While You Deliver — And Ride Healthier</motion.h1>
        <p className="mt-4 text-blue-100/80 max-w-2xl">Our ergonomic rack balances your load and boosts your visibility at night. Sign up in minutes.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-3xl bg-white/5 backdrop-blur border border-white/10">
            <div className="text-blue-100/70 mb-2">Comparison</div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-midnight-700 to-midnight-900 grid place-items-center text-blue-200/70">3D bike comparison placeholder</div>
          </div>
          <div className="grid gap-4">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white">
                <div className="font-semibold">{b.title}</div>
                <div className="text-blue-100/80 text-sm">{b.desc}</div>
              </motion.div>
            ))}
            <a href="#join" className="px-4 py-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-midnight-900 font-semibold shadow-neon w-max">Join the Fleet</a>
          </div>
        </div>

        <div id="join" className="mt-12 p-6 rounded-3xl bg-white/5 backdrop-blur border border-white/10">
          <div className="text-white font-semibold text-lg">Rider sign-up</div>
          <form className="mt-4 grid sm:grid-cols-2 gap-3" onSubmit={onSubmit} noValidate>
            <input required name="name" value={form.name} onChange={onChange} placeholder="Name" aria-label="Your name" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60"/>
            <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" aria-label="Your email" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60"/>
            <input name="platform" value={form.platform} onChange={onChange} placeholder="Delivery platform (Uber, Just Eat, etc.)" aria-label="Delivery platform" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 sm:col-span-2"/>
            <button disabled={status.loading} aria-busy={status.loading} className="mt-2 sm:col-span-2 px-4 py-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-midnight-900 font-semibold shadow-neon disabled:opacity-60">{status.loading ? 'Submitting…' : status.ok ? 'Applied ✓' : 'Apply'}</button>
          </form>
          {status.error && <div role="alert" className="mt-2 text-red-300 text-sm">{status.error}</div>}
          {status.ok && !status.loading && <div className="mt-2 text-green-300 text-sm">Thanks! We’ll be in touch ASAP.</div>}
        </div>
      </div>
    </section>
  )
}
