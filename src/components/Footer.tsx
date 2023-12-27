import { FaWhatsapp } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa6"
import '../App.css'
function Footer(){
    return(
        <section className="footer_ctn">
            <article>
                <h2>X-PRESSIONS</h2>
            </article>
            <article> 
                <a href="#">
                    <span><FaInstagram /></span>
                </a>
                <a href="#">
                    <span><FaWhatsapp /></span>
                </a>
                <a href="#">
                    <span><FaYoutube /></span>
                </a>
            </article>
        </section>
    )
}

export default Footer