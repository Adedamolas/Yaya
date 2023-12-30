import '../App.css'
import { CiMenuFries } from "react-icons/ci";
// import {motion} from 'framer-motion'

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
            
            <Nav />
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