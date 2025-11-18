import { motion } from 'framer-motion'

export default function Pricing() {
  const plans = [
    { name: 'Starter Fleet', bikes: 10, price: 'Custom', features: ['Panel production included', 'City heat-map report', 'Weekly photo proof', 'Estimated 85k–120k daily impressions'] },
    { name: 'City Dominator', bikes: 50, price: 'Custom', featured: true, features: ['Panel production included', 'Granular route planning', 'Daily photo/video proof', '425k–600k daily impressions'] },
    { name: 'Total Dublin', bikes: 100, price: 'Custom', features: ['Full-city saturation', 'Dedicated account team', 'A/B panel creative testing', '850k–1.2m+ daily impressions'] },
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl sm:text-5xl font-extrabold text-white">Pricing & Packages</motion.h2>
        <p className="mt-4 text-blue-100/80 max-w-2xl">Transparent packages sized to your goals. All plans include illuminated panels, installation, rider coordination and reporting.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.06}} className={`relative p-6 rounded-3xl border ${p.featured? 'bg-gradient-to-br from-neon-cyan/15 to-neon-blue/15 border-white/20 shadow-neon' : 'bg-white/5 border-white/10'} backdrop-blur`}> 
              {p.featured && <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-neon-cyan/40 to-neon-blue/40 blur-xl opacity-40"/>}
              <div className="relative">
                <div className="text-blue-100/80">{p.bikes} bikes</div>
                <div className="text-2xl font-bold text-white">{p.name}</div>
                <div className="mt-3 text-3xl font-extrabold text-neon-cyan">{p.price}</div>
                <ul className="mt-6 space-y-2 text-blue-100/80">
                  {p.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
                <a href="#contact" className="mt-6 inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-midnight-900 font-semibold shadow-neon">Request Quote</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
