import '../App.css'
import {motion} from 'framer-motion'

function Navbar(){
 const navLinks = [
    "Home",
    "About",
    "Content",
    "Projects"
 ]
 const headerlinks = navLinks.map((text) => (
    <li>
        {text}
    </li>
 ))
 const Nav = () => {
    return(
        <div>
            <ul>
                {headerlinks}
            </ul>     
            <button>Subscribe</button>
        </div>
    )
 }
 return(
    <>
         <nav>
            <h1>XPRESSIONS</h1>
            <div>
               <Nav />
            </div>
            {/* <span onClick={handleClick}>
                  <HiMenuAlt4 />
            </span> */}
         </nav>
   </>
)}

export default Navbar