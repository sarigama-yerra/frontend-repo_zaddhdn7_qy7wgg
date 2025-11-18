import { Link } from 'react-router-dom'
import { Bike } from 'lucide-react'

export default function FloatingCTA(){
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link to="/riders" className="group flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-blue text-midnight-900 font-semibold shadow-neon">
        <Bike className="h-5 w-5"/>
        <span>For Riders</span>
      </Link>
    </div>
  )
}
