import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ riderCount = 50 }) {
  const impressionsPerRider = 8500
  const totalImpressions = riderCount * impressionsPerRider

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-24" aria-label="DeliverAds Hero">
      <div className="absolute inset-0 bg-hero-gradient"/>
      <div className="absolute inset-0 bg-noise pointer-events-none"/>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-3/5">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_24px_rgba(0,229,255,0.15)]"
          >
            Mobile Mini-Billboards That Follow The Crowd
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl text-blue-100/90 max-w-2xl"
          >
            Reach thousands daily with eye-level ads on Dublin’s busiest delivery bikes – closer, cheaper, and far more effective than static billboards, Dublin Bus or Luas plotting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-midnight-900 font-semibold shadow-neon">Get a Free Quote</a>
            <a href="#pricing" className="px-6 py-3 rounded-xl bg-white/5 backdrop-blur border border-white/10 text-white hover:bg-white/10">See Pricing</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <GlassCard>
              <Counter label="Riders Active" value={riderCount} suffix="+"/>
            </GlassCard>
            <GlassCard>
              <Counter label="Daily Impressions" value={totalImpressions} suffix="+"/>
            </GlassCard>
            <GlassCard>
              <div>
                <div className="text-sm text-blue-100/70">Panels per Bike</div>
                <div className="text-3xl font-bold text-white">3 illuminated</div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <FloatingRackCard/>
        </div>
      </div>
    </section>
  )
}

function GlassCard({ children }) {
  return (
    <div className="p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors">
      {children}
    </div>
  )
}

function Counter({ value, label, suffix = '' }) {
  return (
    <div>
      <AnimatedNumber value={value} className="text-3xl font-extrabold text-white" suffix={suffix}/>
      <div className="text-sm text-blue-100/70 mt-1">{label}</div>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
function useCountUp(target, duration = 1400) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let start
    const startVal = 0
    const endVal = target
    const step = (t) => {
      if (!start) start = t
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(startVal + (endVal - startVal) * eased))
      if (p < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [target, duration])
  return val
}

function AnimatedNumber({ value, suffix = '', className = '' }) {
  const display = useCountUp(value)
  const formatted = new Intl.NumberFormat('en-IE').format(display)
  return <div className={className}>{formatted}{suffix}</div>
}

function FloatingRackCard() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute -inset-1 bg-gradient-to-tr from-neon-cyan/40 to-neon-blue/40 blur-2xl opacity-60"/>
      <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur border border-white/10 shadow-neon animate-float">
        <div className="text-sm text-blue-100/70">Triple-Panel Rack</div>
        <div className="text-2xl font-bold text-white mb-4">Illuminated. Weatherproof. Quick-swap.</div>
        <ul className="space-y-2 text-blue-100/80">
          <li>• Two sides + rear for maximum street coverage</li>
          <li>• Lightweight, balanced for rider comfort</li>
          <li>• High-visibility edge lighting for safety</li>
        </ul>
      </div>
    </div>
  )
}
