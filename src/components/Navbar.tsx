 import {useState} from 'react'
 import cardImage from "../assets/card.jpg";
 import { HiMenuAlt4 } from "react-icons/hi";
 import '../App.css'
function Navbar(){
 const [visible, setVisible] = useState(false)
 const handleClick = () => {
    setVisible(!visible)
 }
 const name = 'XPRESSIONS'
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
 )
}

export default Navbar