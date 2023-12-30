import './App.css'
import Navbar from '../src/components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Content from './components/Content'
import Contact from './components/Contact'
import Benefit from './components/Benefit'
import Team from './components/Team'
import Footer from './components/Footer'
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    
      <>
            <>
              <motion.div
              className="progress-bar"
              style={{ scaleX: scrollYProgress }}
            />
            </>
          <>
            <Navbar />
          </>
          <>
            <Hero />
          </>
          <>
            <Benefit />
          </>
          <>
            <Services />
          </>
          <>
            <Content />
          </>
          <>
            <Team />
          </>
          <>
            <Contact />
          </>
          <Footer />
      </>
)  
  }    
export default App
