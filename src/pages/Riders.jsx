import { motion } from 'framer-motion'

export default function Riders(){
  return (
    <div className="min-h-screen bg-midnight-900 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-16">
        <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="text-4xl md:text-6xl font-extrabold">Earn Extra While You Deliver – And Ride Healthier</motion.h1>
        <p className="text-blue-100/80 mt-4 max-w-2xl">Carry our lightweight, balanced rack and get a monthly bonus, better posture and extra visibility.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-blue-100">3D comparison mockup</div>
            <p className="text-blue-200/80 text-sm mt-3">Balanced, ergonomic, high-vis reflectors.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {t:'Free premium bike rack',d:'Distributes weight evenly and protects your back.'},
              {t:'€40 monthly bonus',d:'Paid reliably for carrying ads.'},
              {t:'Extra safety',d:'High-visibility reflective paint.'},
              {t:'Exclusive partner coupons',d:'Discounts at restaurants, gyms and bike shops.'},
            ].map((c,i)=> (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:-translate-y-1 transition-transform">
                <div className="text-white font-semibold">{c.t}</div>
                <div className="text-blue-200/80 text-sm">{c.d}</div>
              </div>
            ))}
            <a href="#join" className="sm:col-span-2 px-5 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-midnight-900 font-semibold shadow-neon text-center">Join the Fleet</a>
          </div>
        </div>

        <form id="join" className="mt-12 grid md:grid-cols-3 gap-3">
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Your name"/>
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Email"/>
          <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Delivery platform (e.g., Uber Eats)"/>
          <button className="md:col-span-3 px-4 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-midnight-900 font-semibold shadow-neon">Apply</button>
        </form>
      </div>
    </div>
  )
}
