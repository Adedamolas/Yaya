import '../App.css'
import heroImg from '../assets/hero_img.jfif'
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
function Hero() {
    return(
        <header>
            <section>
                <h1>WE <span style={{padding:'0px'}}><FaArrowLeft /></span> ARE A CREATIVE DIGITAL 
                    <span style={{border:'1px solid black', borderRadius:'55px'}}>AGENCY</span>
                     <span style={{padding:'0px'}}><FaArrowTrendUp /></span>
                </h1>
                <div>
                    <article>
                        <h2>
                            200+
                        </h2>
                        <p>Completed Projects</p>
                    </article>
                    <article>
                        <h2>
                            5+ 
                        </h2>
                        <p>Years of Experience</p>
                    </article>
                    <article>
                        <h2>
                            50+ 
                        </h2>
                        <p>Happy Clients</p>
                    </article>
                </div>
            </section>
            <section>
                <span><MdOutlineArrowOutward /></span>
                <img src= {heroImg} alt="" />
                {/* <img src= {heroimg2} alt="" />
                <img src= {heroimg2} alt="" />
                <img src= {heroImg} alt="" /> */}
            </section>
        </header>
    )
}

export default Hero