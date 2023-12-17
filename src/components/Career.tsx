import '../App.css'
import { MdOutlineScience } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
function Career(){
    return(
        <section className='career_ctn'>
            <div className="heading">
                <h1>Our Courses</h1>
            </div>
            <section>
                <h3>
                    Everybody has a different career path, so research well before picking your niche.
                </h3>
                <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr', placeItems:'center', gap:'30px'}}>
                    <article>
                        <div>
                            <h2>Science</h2>
                            <span>
                                <MdOutlineScience />
                            </span>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sunt ea vel temporibus
                                facilis facere provident esse maxime quae 
                                ut enim sapiente consequatur voluptates consequuntur, a sed? Aliquam, id reprehenderit!
                            </p>
                        </div>
                    </article>                
                    <article>
                        <div>
                            <h2>Art</h2>
                            <span>
                                <GoLaw />
                            </span>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sunt ea vel temporibus
                                facilis facere provident esse maxime quae 
                                ut enim sapiente consequatur voluptates consequuntur, a sed? Aliquam, id reprehenderit!
                            </p>
                        </div>
                    </article>
                    <article>
                        <div>
                            <h2>Commercial</h2>
                            <span>
                                <FaChartPie />
                            </span>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sunt ea vel temporibus
                                facilis facere provident esse maxime quae 
                                ut enim sapiente consequatur voluptates consequuntur, a sed? Aliquam, id reprehenderit!
                            </p>
                        </div>
                    </article>           
                    <article>
                        <div>
                            <h2>IT & Tech</h2>
                            <span>
                                <GrTechnology />
                            </span>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sunt ea vel temporibus
                                facilis facere provident esse maxime quae 
                                ut enim sapiente consequatur voluptates consequuntur, a sed? Aliquam, id reprehenderit!
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </section>
    )
}

export default Career