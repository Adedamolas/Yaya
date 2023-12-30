import '../App.css'
import { useState } from 'react'
import {Link} from 'react-scroll'
// import { CiMenuFries } from "react-icons/ci";
import {motion} from 'framer-motion'

function Navbar(){
const [visible, setVisible] = useState(false)
const handleClick = () => {
   setVisible(!visible)
}
 const navLinks = [
    <Link to='section1' smooth={true} duration={500} >Home</Link>,
    <Link to='section2' smooth={true} duration={500} >Benefits</Link>,
    <Link to='section3' smooth={true} duration={500} >Services</Link>,
    <Link to='section4' smooth={true} duration={500} >Content</Link>,
    <Link to='section5' smooth={true} duration={500} >Team</Link>,
    <Link to='section6' smooth={true} duration={500} >Contact</Link>
 ]
 const headerlinks = navLinks.map((text) => (
    <li className= { visible === true ? 'navopen' : 'navclose' }>
        {text}
    </li>
 ))
 const Nav = () => {
    return(
        <motion.div
        initial= {{opacity: 0, x: -100}}
        whileInView= {{opacity: 1, x: 0}}
        transition={{duration: 0.9}}
      //   viewport={{once: true}}
        >
            <ul>
                {headerlinks}
            </ul>     
            <button>Subscribe</button>
        </motion.div>
    )
 }
 return(
    <>
         <nav>
            <h1>XPRESSIONS</h1>
            
            {visible === true ? <Nav /> : ''}
            

            <p onClick={handleClick}>
               {visible === true ? "Close" : 'Menu'}
            </p>
            {/* <h2>
               {CiMenuFries}
            </h2> */}

            {/* <span onClick={handleClick}>
                  <HiMenuAlt4 />
            </span> */}
         </nav>
   </>
)}

export default Navbar