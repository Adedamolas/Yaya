import '../App.css'
import heroImg from '../assets/hero_img.jfif'
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import {motion} from 'framer-motion'
function Hero() {

    return(
        <header>
            <section className='hidden'>
                <>
                    <motion.div
                        style={{width: 'min-content'}}

                        initial= {{opacity: 0, x: -100}}
                        whileInView= {{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        // viewport={{once: true}}
                        >
                        <h1>WE <span style={{padding:'0px'}}><FaArrowLeft /></span> ARE A CREATIVE DIGITAL <br />
                            <span style={{border:'1px solid black', borderRadius:'55px'}}>AGENCY</span>
                            <span style={{padding:'0px'}}><FaArrowTrendUp /></span>
                        </h1>
                    </motion.div>
                </>
                <div style={{overflow: 'hidden'}}>
                    <motion.div 
                        initial= {{opacity: 0, x: 100}}
                        whileInView= {{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        >
                        <article>
                            <h2>
                                200+
                            </h2>
                            <p>Completed Projects</p>
                        </article>
                    </motion.div>
                    <motion.div
                        initial= {{opacity: 0, x: 100}}
                        whileInView= {{opacity: 1, x: 0}}
                        transition={{duration: 0.9}}
                        viewport={{once: true}}
                    >
                        <article>
                            <h2>
                                5+ 
                            </h2>
                            <p>Years of Experience</p>
                        </article>
                    </motion.div>
                    <motion.div
                        initial= {{opacity: 0, x: 100}}
                        whileInView= {{opacity: 1, x: 0}}
                        transition={{duration: 1.1}}
                        viewport={{once: true}}
                    >
                        <article>
                            <h2>
                                50+ 
                            </h2>
                            <p>Happy Clients</p>
                        </article>
                    </motion.div>
                </div>
            </section>

            <motion.div
                    initial= {{opacity: 0,}}
                    whileInView= {{opacity: 1,}}
                    transition={{duration: 1.3}}
                >
                    <section>
                        <span><MdOutlineArrowOutward /></span>
                        <img src= {heroImg} alt="" />
                    </section>

                </motion.div>

        </header>
    )
}

export default Hero