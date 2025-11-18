import { motion } from 'framer-motion'
import { MapPin, Clock, Utensils } from 'lucide-react'

export default function Reach(){
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-5xl font-extrabold text-white">Hyper-Targeted Reach</motion.h2>
        <p className="text-blue-100/80 mt-4 max-w-3xl">Animated heatmaps focus around city centre, campuses and suburbs at peak hours. Ads appear where hunger and attention peak.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 40% 50%, rgba(0,229,255,0.65) 0, rgba(0,229,255,0) 50%), radial-gradient(circle at 70% 40%, rgba(59,130,246,0.6) 0, rgba(59,130,246,0) 50%)'}}/>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"/>
          </div>
          <div className="grid gap-4">
            <Stat icon={<Utensils className="text-neon-cyan"/>} title="Seen outside 500+ restaurants & takeaways" desc="High-frequency exposure at decision points."/>
            <Stat icon={<MapPin className="text-neon-cyan"/>} title="Citywide routes" desc="Temple Bar, Grafton Street, campuses and suburbs."/>
            <Stat icon={<Clock className="text-neon-cyan"/>} title="Peak hours = peak attention" desc="Lunch, evening, weekend rushes."/>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon, title, desc }){
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:-translate-y-1 transition-transform">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10">{icon}</div>
        <div>
          <div className="text-white font-semibold">{title}</div>
          <div className="text-blue-200/80 text-sm">{desc}</div>
        </div>
      </div>
    </div>
  )
}
