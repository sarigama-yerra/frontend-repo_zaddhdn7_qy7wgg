import { motion } from 'framer-motion'

export default function WhySection(){
  const rows = [
    { f: 'DeliverAds Bike', imp: '8,500–12,000 per bike', cpm: '€1–€2', mob: 'Yes', impact: 'Highest' },
    { f: 'JCDecaux Billboard', imp: '20,000–50,000', cpm: '€8–€15', mob: 'No', impact: 'Distant' },
    { f: 'Dublin Bus / Luas', imp: '15,000–40,000', cpm: '€10–€20', mob: 'Limited', impact: 'Side/High' },
  ]

  return (
    <section id="how" className="relative py-24">
      <div className="absolute inset-0 bg-noise pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-5xl font-extrabold text-white">Why Mobile Bike Ads Beat Everything</motion.h2>
        <p className="text-blue-100/80 mt-4 max-w-3xl">Our fleet moves with the people – door-to-door, between traffic, right outside restaurants, cafés, supermarkets and offices. No blind spots, no ignoring.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-blue-100">Interactive 3D bike mockup</div>
            <p className="text-blue-200/80 text-sm mt-3">Rotate to view the illuminated triple-panel rack</p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr className="text-blue-200 text-sm">
                  <th className="p-3">Format</th>
                  <th className="p-3">Avg. Daily Impressions</th>
                  <th className="p-3">CPM Estimate</th>
                  <th className="p-3">Mobility</th>
                  <th className="p-3">Eye-Level Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {rows.map((r,i)=> (
                  <tr key={i} className="text-white/90 hover:bg-white/5 transition-colors">
                    <td className="p-3 font-semibold">{r.f}</td>
                    <td className="p-3">{r.imp}</td>
                    <td className="p-3">{r.cpm}</td>
                    <td className="p-3">{r.mob}</td>
                    <td className="p-3">{r.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
