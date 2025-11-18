import Header from './components/Header'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import Targeting from './components/Targeting'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

function App() {
  const riderCount = 50
  return (
    <div className="min-h-screen bg-midnight-900 text-white relative">
      <Header/>
      <main>
        <Hero riderCount={riderCount}/>
        <WhySection/>
        <Targeting/>
        <Pricing/>
      </main>
      <Footer/>
      <FloatingCTA/>
    </div>
  )
}

export default App
