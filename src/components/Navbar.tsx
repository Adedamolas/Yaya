 import {useState} from 'react'
import reactLogo from './assets/react.svg'
 

function Navbar(){
 const [count, setCount] = useState(0)
 const name = 'Damola'
 const navLinks = [
    {
        name: "Home",
        id: 1,
        path: '/'
    },
    {
        name: "About",
        path: '/main.tsx',
        id: 2,
    },
    {
        name: "Services",
        path: '/main.tsx',
        id: 3,
    },
    {
        name: "Contact", 
        path: '/main.tsx',
        id: 4,
    }
 ] 
 const headerlinks = navLinks.map(navLinks =>
    <li key = {navLinks.id}> 
        {navLinks.name}
    </li>
 );
 function handleClick(){
    alert('It actually worked')
 }

 return(
    <>
     <nav>
        <h1>Earnest-ly</h1>
        <button onClick= {() => setCount(count + 1)}>
            I've been clicked {count} times
        </button>
        <h1>
            {name}
        </h1>
        <ul> 
            {headerlinks}
        </ul>
        <button onClick={handleClick}>
            Click me
        </button>
        <button>
            CLICK ME
        </button>
     </nav>
     <main>
        <article>
            <img src="{reactLogo}" alt="" />
        </article>
     </main>
    </>
 )
}

export default Navbar