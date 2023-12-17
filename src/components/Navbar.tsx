 import {useState} from 'react'
 import cardImage from "../assets/card.jpg";
 import '../App.css'
 
function Navbar(){
 const [count, setCount] = useState(0)
 const name = 'Damola'
 const navLinks = [
    "Home",
    "About us",
    "Services",
    "Contact Us"
 ] 
 const headerlinks = navLinks.map((text) => (
    <li>
        {text}
    </li>
 ));
 return(
    <>
        <nav>
                <h3> SIMT EDUCATIONAL CONSULTS</h3>
                <ul>
                        {headerlinks}
                </ul>
                <button>Sign Up</button>
        </nav>
    </>
 )
}

export default Navbar