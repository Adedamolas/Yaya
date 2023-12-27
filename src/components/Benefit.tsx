import { FaStar } from "react-icons/fa6"
import { FaClock } from "react-icons/fa6"
import { FaMoneyBill } from "react-icons/fa6"

import '../App.css'
function Benefit(){
    return(
        <section className="benefit_ctn">
            <div className="heading">
                <h1>Your Benefits</h1>
            </div>
            <section>
                <article>
                    <span><FaStar /></span>
                    <h3>High Quality Content</h3>
                </article>
                <article>
                    <span><FaClock /></span>
                    <h3>Fast Productions</h3>
                </article>
                <article>
                    <span><FaMoneyBill /></span>
                    <h3>Money back guarantee</h3>
                </article>
            </section>
        </section>
    )
}

export default Benefit