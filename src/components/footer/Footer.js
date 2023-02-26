/* css import */
import './Footer.css';

/* img import */
import Logo from "../../images/Logo.png";
import FooterImg from "../../images/Footer.png";

const Footer = () => {
    return ( 
        <section id='footer'>
            <article>
                <img src={Logo} alt="logo" />
                <p>(012) 8967453</p>
                <p>woodies@gmail.com</p>
                <p>Jakarta, Indonesia</p>
                <p id='copyright'>© 2020 WOODIES</p>
            </article>
            <img src={FooterImg} alt="Table and Chair" />
        </section>
    );
}

export default Footer;