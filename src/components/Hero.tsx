import '../App.css'
import bg from '../public/blob 2.svg'



function Hero(){
    return(
        <>
            <header>
                <section>
                    <h1 style={{fontWeight:'900', fontFamily:' ThickPoppins'}}>
                        LEARN ANYTHING, ANYTIME, ANYHWERE
                    </h1>
                    <p>Your academic future is guaranteed with us.</p>
                    <div>
                        <button>Sign up</button>
                        <button>Learn more</button>
                    </div>
                    <section className='header-ctn-2'>
                        <section>
                            <article>
                                <p>Bestseller</p>
                                <div className="details">
                                    <h3>WAEC Exam Registration</h3>
                                    <h3>Service by SIMT</h3>
                                </div>
                            </article>
                        </section>
                        <section>
                            <article>
                                <h3>Join our Community</h3>
                            </article>
                            <article>
                                <h3>15K Members</h3>
                            </article>
                        </section>
                    </section>
                </section>
            </header>
        </>
    )
}

export default Hero