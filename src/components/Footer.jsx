import { useEffect, useState } from 'react'

export default function Footer() {
  const [impressions, setImpressions] = useState(12_000_000)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState({ loading: false, ok: false, error: '' })
  const API = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, '') || ''

  useEffect(() => {
    const id = setInterval(() => setImpressions(v => v + Math.floor(Math.random()*50)), 120)
    return () => clearInterval(id)
  }, [])

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: false, error: '' })
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || undefined,
          message: form.message,
        })
      })
      if (!res.ok) throw new Error((await res.json()).detail || 'Request failed')
      setStatus({ loading: false, ok: true, error: '' })
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, ok: false, error: err.message || 'Something went wrong' })
    }
  }

  return (
    <footer className="relative mt-24" id="contact">
      <div className="absolute inset-0 bg-noise"/>
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <div className="text-neon-cyan font-extrabold text-xl">Deliver<span className="text-white">Ads</span></div>
          <p className="mt-3 text-blue-100/80 max-w-md">Dublin’s mobile mini-billboards. We turn delivery bikes into illuminated, hyper-local ad space that moves with the city.</p>
          <div className="mt-6 text-white/90 text-lg">Together we’ve already delivered over {new Intl.NumberFormat('en-IE').format(impressions)} impressions in Dublin.</div>
          <div className="mt-4 flex gap-3">
            <a className="text-blue-200/80 hover:text-white" href="#" aria-label="Twitter">Twitter</a>
            <a className="text-blue-200/80 hover:text-white" href="#" aria-label="Instagram">Instagram</a>
            <a className="text-blue-200/80 hover:text-white" href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 backdrop-blur border border-white/10">
          <div className="text-white font-semibold text-lg">Contact us</div>
          <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3" onSubmit={onSubmit} noValidate>
            <input
              required
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Name"
              aria-label="Your name"
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60"/>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email"
              aria-label="Your email"
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60"/>
            <input
              name="company"
              value={form.company}
              onChange={onChange}
              placeholder="Company"
              aria-label="Company"
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 sm:col-span-2"/>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="What would you like to achieve?"
              aria-label="Your message"
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 sm:col-span-2" rows="4"/>
            <button
              disabled={status.loading}
              aria-busy={status.loading}
              className="mt-2 sm:col-span-2 px-4 py-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-midnight-900 font-semibold shadow-neon disabled:opacity-60">
              {status.loading ? 'Sending…' : status.ok ? 'Sent ✓' : 'Book Advertising Space'}
            </button>
          </form>
          {status.error && <div role="alert" className="mt-3 text-red-300 text-sm">{status.error}</div>}
          {status.ok && !status.loading && <div className="mt-3 text-green-300 text-sm">Thanks! We’ll get back to you shortly.</div>}
          <div className="mt-4 text-blue-200/60 text-sm">By submitting this form you agree to our privacy policy.</div>
        </div>
      </div>
      <div className="text-center text-blue-200/50 text-sm py-6 border-t border-white/10">© {new Date().getFullYear()} DeliverAds Ltd. All rights reserved.</div>
    </footer>
  )
}
