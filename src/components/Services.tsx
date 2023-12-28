
import '../App.css'
import { FaArrowUp } from 'react-icons/fa6'
import uiux from '../assets/uiux_img_3.jpg'
import content from '../assets/content_1.jpg'
import project from '../assets/project_management.jfif'
import { useState } from 'react'
import {motion} from 'framer-motion'
function Services(){
let i = ''
const [selected, setSelected] = useState(null)

const toggle = (i: any) => {
    if(selected == i){
        return setSelected(null)
    }

    setSelected(i)

}
const data = [
    <article onClick={() => toggle(i)}>
            <div>
                <h2>Content Creation</h2>
                <span><FaArrowUp /></span>
            </div>
            <div className = {
                selected === i ? 'content show' : 'content'
            }>
                <img src={content} alt="" />
                <span>
                    <h2>Description</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa ipsam sunt ut!
                        Voluptatem sit adipisci optio, temporibus recusandae ullam dolorum voluptates? Quia natus, explicabo voluptatum
                    </p>
                    <button>Learn more</button>
                </span>
            </div>
    </article>,
    <article>
        <div>
            <h2>UI/UX Design</h2>
            <span><FaArrowUp /></span>
        </div>
        <div className={
            selected === i ? 'content show' : 'content'
        }>
            <img src={uiux} alt="" />
            <span>
                <h2>Description</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa ipsam sunt ut!
                    Voluptatem sit adipisci optio, temporibus recusandae ullam dolorum voluptates? Quia natus, explicabo voluptatum
                </p>
                <button>Learn more</button>
            </span>
        </div>
    </article>,
    <article>
        <div>
            <h2>Project Management</h2>
            <span className='arrow'><FaArrowUp /></span>
        </div>
        <div className={
            selected === i ? 'content show' : 'content'
        }>
            <img src={project} alt="" />
            <span>
                <h2>Description</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa ipsam sunt ut!
                    Voluptatem sit adipisci optio, temporibus recusandae ullam dolorum voluptates? Quia natus, explicabo voluptatum
                </p>
                <button>Learn more</button>
            </span>
        </div>
    </article>
]
const services = data.map((text) => (
    <>
        {text}
    </>
))
    return(
        <section className='services_ctn'>
            <div className="heading">
                <h1>Our Services</h1>
            </div>
            <section>
            <motion.div
                initial= {{opacity: 0, y: 150}}
                whileInView= {{opacity: 1, y: 0}}
                transition={{duration: 1.2}}
                >
                    {services}
                </motion.div>
            </section>
        </section>
    )
}
export default Services