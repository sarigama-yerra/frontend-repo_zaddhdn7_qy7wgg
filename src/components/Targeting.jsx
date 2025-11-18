import { motion } from 'framer-motion'
import { MapPin, Utensils, GraduationCap } from 'lucide-react'

export default function Targeting() {
  const items = [
    {icon: Utensils, title: 'Seen outside 500+ restaurants & takeaways', desc: 'Prime exposure exactly where hunger decisions are made.'},
    {icon: MapPin, title: 'Hyper-local streets & hotspots', desc: 'Temple Bar, Grafton Street, Docklands, Smithfield and more.'},
    {icon: GraduationCap, title: 'University zones', desc: 'UCD, Trinity, DCU and TU Dublin at peak hours.'},
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl sm:text-5xl font-extrabold text-white">Hyper-Targeted Reach</motion.h2>
        <p className="mt-4 text-blue-100/80 max-w-2xl">Animated heatmaps highlight daily flows across the city — map routes shift to match footfall and delivery demand.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-midnight-700 to-midnight-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_30%_40%,rgba(0,229,255,0.35),transparent_40%),radial-gradient(circle_at_70%_55%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_50%_70%,rgba(0,229,255,0.25),transparent_40%)]"/>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="absolute inset-0 grid place-items-center text-blue-100/70">
              Dublin heat-map (visual placeholder)
            </motion.div>
          </div>

          <div className="grid gap-4">
            {items.map((it, i) => (
              <motion.div key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 border border-white/10">
                    <it.icon className="text-neon-cyan"/>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{it.title}</div>
                    <div className="text-blue-100/80 text-sm">{it.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
