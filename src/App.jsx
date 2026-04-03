import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import WhyUs from './sections/WhyUs'
import Work from './sections/Work'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Contact from './sections/Contact'

export default function App() {
  const { isDark, toggle } = useTheme()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Work />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
