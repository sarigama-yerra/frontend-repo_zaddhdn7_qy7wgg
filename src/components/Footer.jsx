import { useEffect, useState } from 'react'

export default function Footer() {
  const [impressions, setImpressions] = useState(12_000_000)
  useEffect(() => {
    const id = setInterval(() => setImpressions(v => v + Math.floor(Math.random()*50)), 120)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="relative mt-24" id="contact">
      <div className="absolute inset-0 bg-noise"/>
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <div className="text-neon-cyan font-extrabold text-xl">Deliver<span className="text-white">Ads</span></div>
          <p className="mt-3 text-blue-100/80 max-w-md">Dublin’s mobile mini-billboards. We turn delivery bikes into illuminated, hyper-local ad space that moves with the city.</p>
          <div className="mt-6 text-white/90 text-lg">Together we’ve already delivered over {new Intl.NumberFormat('en-IE').format(impressions)} impressions in Dublin.</div>
          <div className="mt-4 flex gap-3">
            <a className="text-blue-200/80 hover:text-white" href="#">Twitter</a>
            <a className="text-blue-200/80 hover:text-white" href="#">Instagram</a>
            <a className="text-blue-200/80 hover:text-white" href="#">LinkedIn</a>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white/5 backdrop-blur border border-white/10">
          <div className="text-white font-semibold text-lg">Contact us</div>
          <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input required placeholder="Name" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60"/>
            <input required type="email" placeholder="Email" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60"/>
            <input placeholder="Company" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 sm:col-span-2"/>
            <textarea required placeholder="What would you like to achieve?" className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60 sm:col-span-2" rows="4"/>
            <button className="mt-2 sm:col-span-2 px-4 py-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-midnight-900 font-semibold shadow-neon">Book Advertising Space</button>
          </form>
          <div className="mt-4 text-blue-200/60 text-sm">By submitting this form you agree to our privacy policy.</div>
        </div>
      </div>
      <div className="text-center text-blue-200/50 text-sm py-6 border-t border-white/10">© {new Date().getFullYear()} DeliverAds Ltd. All rights reserved.</div>
    </footer>
  )
}
