import img from '../public/header_img_2.jfif'
import '../App.css'
import { FaArrowUp } from 'react-icons/fa'

function Services(){
    return(
        <section className="services_ctn">
            <div className="heading">
                <h1>Services</h1>
            </div>
            <section style={{placeItems:'center'}}>
                <article>
                    <div>
                        <h3>Exam Registration</h3>
                        <span><FaArrowUp /></span>
                    </div>
                    <div>
                        <img src= {img} alt="" />
                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, repudiandae deleniti nobis nulla repellendus sequi,
                            consequuntur porro laboriosam aliquam, nihil incidunt!
                        </p> */}
                    </div>
                </article>
                <article>
                    <div>
                        <h3>Exam Registration</h3>
                        <span><FaArrowUp /></span>
                    </div>
                    <div>
                        <img src= {img} alt="" />
                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, repudiandae deleniti nobis nulla repellendus sequi,
                            consequuntur porro laboriosam aliquam, nihil incidunt!
                        </p> */}
                    </div>
                </article>
                <article>
                    <div>
                        <h3>Exam Registration</h3>
                        <span><FaArrowUp /></span>
                    </div>
                    <div>
                        <img src= {img} alt="" />
                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, repudiandae deleniti nobis nulla repellendus sequi,
                            consequuntur porro laboriosam aliquam, nihil incidunt!
                        </p> */}
                    </div>
                </article>
            </section>
        </section>
    )
}

export default Services