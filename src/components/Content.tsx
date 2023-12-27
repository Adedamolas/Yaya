import '../App.css'
import { FaArrowRight } from 'react-icons/fa6'
function Content(){
    return(
        <section className='content_ctn'>
            <div className="heading">
                <h1>Our Content/Products</h1>
            </div>
            <section>
                <div>
                    <article>
                        <h2>AI UI/UX Design</h2>
                        <span><FaArrowRight /></span>
                    </article>
                    <article>
                        <h2>Mobile App Design</h2>
                        <span><FaArrowRight /></span>
                    </article>
                </div>
                <div>
                    <article>
                        <h3>One Piece Movie</h3>
                        <span><FaArrowRight /></span>
                    </article>
                    <article>
                        <h3>One Piece Movie</h3>
                        <span><FaArrowRight /></span>
                    </article>
                    <article>
                        <h3>One Piece Movie</h3>
                        <span><FaArrowRight /></span>
                    </article>
                </div>
            </section>
        </section>
    )
}

export default Content