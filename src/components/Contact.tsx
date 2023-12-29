import '../App.css'
import {motion} from 'framer-motion'


function Contact(){
    return(
        <section className="contact_ctn">
            <motion.div
                className='hidden'
                initial= {{opacity: 0, y: 100}}
                whileInView= {{opacity: 1, y: 0}}
                transition={{duration: 1.2}}
                viewport={{once: true}}
            >
                <h1>
                    DO YOU HAVE A PROJECT OR IDEA?
                </h1>
            </motion.div>
            <motion.div
                initial= {{opacity: 0}}
                whileInView= {{opacity: 1,}}
                transition={{duration: 1.7}}
                viewport={{once: true}}
            >
                <h1>
                    LET'S REASON OURSELVES
                </h1>
            </motion.div>
        </section>
    )
}

export default Contact