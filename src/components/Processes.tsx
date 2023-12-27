import { FaArrowRight } from "react-icons/fa"
import { FaArrowDown } from "react-icons/fa"
import { FaArrowUp } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa"
import "../App.css"
function Processes(){
    return(
        <section className="processes_ctn">
            <div className="heading">
                <h1>Our Processes</h1>
            </div>
            <section>
                <article>
                    <div>
                        <h1>1</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, repudiandae deleniti nobis nulla repellendus sequi,
                            consequuntur porro laboriosam aliquam, nihil incidunt!
                        </p>
                    </div>
                    <span><FaArrowRight /></span>
                    <div>
                        <h1>2</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, repudiandae deleniti nobis nulla repellendus sequi,
                            consequuntur porro laboriosam aliquam, nihil incidunt!
                        </p>
                    </div>
                </article>
                <article>
                    <span><FaArrowUp /></span>
                    <span><FaArrowDown /></span>
                </article>
                <article>
                    <div>
                        <h1>4</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, repudiandae deleniti nobis nulla repellendus sequi,
                            consequuntur porro laboriosam aliquam, nihil incidunt!
                        </p>
                    </div>
                    <span><FaArrowLeft /></span>
                    <div>
                        <h1>3</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis, repudiandae deleniti nobis nulla repellendus sequi,
                            consequuntur porro laboriosam aliquam, nihil incidunt!
                        </p>
                    </div>
                </article>
            </section>
        </section>
    )
}


export default Processes