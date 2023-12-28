import '../App.css'
import {motion} from 'framer-motion'


function Team(){
    return(
        <section className="team_ctn">
            <div className="heading">
                <h1>Our Team</h1>
            </div>
            <section>
                <motion.div 
                    initial= {{opacity: 0, x: 150}}
                    whileInView= {{opacity: 1, x: 0}}
                    transition={{duration: 1.5}}
                >
                    <article>
                        <span>
                            <h3>Frontend Developer</h3>
                        </span>
                    </article>
                </motion.div>

                <motion.div
                    initial= {{opacity: 0}}
                    whileInView= {{opacity: 1}}
                    transition={{duration: 1.2}}
                >
                    <article>
                        <span>
                            <h3>Frontend Developer</h3>
                        </span>
                    </article>
                </motion.div>

                <motion.div
                    initial= {{opacity: 0, x: -150}}
                    whileInView= {{opacity: 1, x: 0}}
                    transition={{duration: 1.5}}
                >
                    <article>
                        <span>
                            <h3>Frontend Developer</h3>
                        </span>
                    </article>
                </motion.div>
            </section>
        </section>
    )
}

export default Team