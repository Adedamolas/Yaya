import { FaStar } from "react-icons/fa6"
import { FaClock } from "react-icons/fa6"
import { FaMoneyBill } from "react-icons/fa6"
// import { useRef, useEffect, useState } from "react"
// import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'

import '../App.css'
function Benefit(){

// const [visible, setVisible] = useState()
// const { ref: myRef, inView: visible } = useInView();
// const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
    return(
        <section className="benefit_ctn">
            <div className="heading">
                <h1>Your Benefits</h1>
            </div>
            <section style={{overflow: 'hidden'}}>
                    <motion.div
                        initial= {{opacity: 0, y: 100}}
                        whileInView= {{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        >
                        <article>
                            <span><FaStar /></span>
                            <h3>High Quality Content</h3>
                        </article>
                    </motion.div>
                    <motion.div
                        initial= {{opacity: 0, y: 150}}
                        whileInView= {{opacity: 1, y: 0}}
                        transition={{duration: 1.2}}
                        viewport={{once: true}}
                        >
                        <article>
                            <span><FaClock /></span>
                            <h3>Fast Productions</h3>
                        </article>
                    </motion.div>
                    <motion.div
                        initial= {{opacity: 0, y: 150}}
                        whileInView= {{opacity: 1, y: 0}}
                        transition={{duration: 1.4}}
                        viewport={{once: true}}
                        >
                        <article>
                            <span><FaMoneyBill /></span>
                            <h3>Money back guarantee</h3>
                        </article>
                    </motion.div>
            </section>
        </section>
    )
}

export default Benefit