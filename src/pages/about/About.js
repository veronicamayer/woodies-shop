/* css import */
import './About.css';

/* img import */
import AboutImg from "../../images/About.png";

/* components import */
import Header from '../../components/header/Header.js';

const About = () => {
    return ( 
        <section id='about'>
            <Header page="Who we are" name="About Us" />
            <article>
                <img src={AboutImg} alt="About Us" />
                <div>
                    <h4><span>WOODIES</span> is the <span>home of modern wooden furniture</span></h4>
                    <p>the answer to your need for furniture with shapes, sizes and colors.</p>
                </div>
            </article>
        </section>
    );
}

export default About;