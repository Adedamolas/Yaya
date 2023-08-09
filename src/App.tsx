import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/Navbar'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
    <Navbar />
    </>
  )
}

export default App
