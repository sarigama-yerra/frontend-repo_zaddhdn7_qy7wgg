import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  const navLink = 'text-sm font-medium text-blue-100/80 hover:text-white transition-colors'

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-midnight-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-neon-cyan font-extrabold text-xl tracking-tight drop-shadow-[0_0_12px_rgba(0,229,255,0.5)]">Deliver<span className="text-white">Ads</span></div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLink}>Home</NavLink>
          <a href="#how" className={navLink}>How It Works</a>
          <a href="#pricing" className={navLink}>Pricing</a>
          <NavLink to="/riders" className={navLink}>For Riders</NavLink>
          <a href="#contact" className={navLink}>Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button aria-label="Toggle dark mode" onClick={() => setDark(d => !d)} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
            {dark ? <Sun size={18} className="text-neon-cyan"/> : <Moon size={18} className="text-neon-cyan"/>}
          </button>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-midnight-900 font-semibold shadow-neon animate-pulse-soft">Book Advertising Space</a>
        </div>

        <button onClick={() => setOpen(o=>!o)} className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white">{open? <X/> : <Menu/>}</button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-midnight-900/80 backdrop-blur border-t border-white/10">
          <a href="#" className={navLink}>Home</a>
          <a href="#how" className={navLink}>How It Works</a>
          <a href="#pricing" className={navLink}>Pricing</a>
          <Link to="/riders" className={navLink} onClick={()=>setOpen(false)}>For Riders</Link>
          <a href="#contact" className={navLink}>Contact</a>
          <a href="#contact" className="block text-center px-4 py-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-midnight-900 font-semibold shadow-neon">Book Advertising Space</a>
        </div>
      )}
    </header>
  )
}
