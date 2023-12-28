import '../App.css'
import { FaArrowRight } from 'react-icons/fa6'
import {motion} from 'framer-motion'

function Content(){
    return(
        <section className='content_ctn'>
            <div className="heading">
                <h1>Our Content/Products</h1>
            </div>
            <section className='hidden' style={{height: 'max-content'}}>
                <span className='hidden'>
                    <motion.div
                        initial= {{opacity: 0, y: 150}}
                        whileInView= {{opacity: 1, y: 0}}
                        transition={{duration: 1.2}}
                    >
                        <article>
                            <h2>AI UI/UX Design</h2>
                            <span><FaArrowRight /></span>
                        </article>
                    </motion.div>
                    <motion.div
                        initial= {{opacity: 0, x: 150}}
                        whileInView= {{opacity: 1, x: 0}}
                        transition={{duration: 1.2}}
                    >
                        <article>
                            <h2>Mobile App Design</h2>
                            <span><FaArrowRight /></span>
                        </article>
                    </motion.div>
                </span>
                <span>
                    <motion.div
                        initial= {{opacity: 0, y: 150}}
                        whileInView= {{opacity: 1, y: 0}}
                        transition={{duration: 1.5}}
                    >
                        <article>
                            <h3>One Piece Movie</h3>
                            <span><FaArrowRight /></span>
                        </article>
                    </motion.div>

                    <motion.div
                        initial= {{opacity: 0, y: 150}}
                        whileInView= {{opacity: 1, y: 0}}
                        transition={{duration: 1.6}}
                    >
                        <article>
                            <h3>One Piece Movie</h3>
                            <span><FaArrowRight /></span>
                        </article>
                    </motion.div>

                    <motion.div
                        initial= {{opacity: 0, y: 150}}
                        whileInView= {{opacity: 1, y: 0}}
                        transition={{duration: 1.7}}
                    >
                        <article>
                            <h3>One Piece Movie</h3>
                            <span><FaArrowRight /></span>
                        </article>
                    </motion.div>
                </span>
            </section>
        </section>
    )
}

export default Content