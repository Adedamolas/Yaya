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
          <div>
            <Navbar />
          </div>
          <div id='section1'>
            <Hero />
          </div>
          <div id='section2'>
            <Benefit />
          </div>
          <div id='section3'>
            <Services />
          </div>
          <div id='section4'>
            <Content />
          </div>
          <div id='section5'>
            <Team />
          </div>
          <div id='section6'>
            <Contact />
          </div>
          <Footer />
      </>
)  
  }    
export default App
