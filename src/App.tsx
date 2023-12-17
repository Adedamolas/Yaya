import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Career from './components/Career'
import Services from './components/Services'
import Processes from './components/Processes'
function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Stats />
    <Career />
    <Services />
    <Processes />
    </>
  )
}

export default App
