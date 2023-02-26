/* css import */
import './Home.css';

/* router dom import */
import { Link } from "react-router-dom";

/* img import */
import HomeImg from "../../images/Home.png";

const Home = () => {
    return ( 
        <section id='home'>
            {/* pink background div */}
            <div></div>
            <article>
                <h4>Are you looking for <span>woodden furniture</span> for your place?</h4>
                <h1>This is the Right Place</h1>
                <Link to="/products">Explore Categories</Link>
            </article>
            <article>
                <img src={HomeImg} alt="home" />
            </article>
        </section>
    );
}

export default Home;