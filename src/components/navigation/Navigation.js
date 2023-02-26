/* css import */
import './Navigation.css';

/* router dom import */
import { Link } from "react-router-dom";

/* img import */
import Logo from "../../images/Logo.png";

const Navigation = () => {
    return ( 
        <section id='navigation'>
            <Link to="/" id='logo'><img src={Logo} alt="logo" /></Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/products">Products</Link>
            </nav>
        </section>
    );
}

export default Navigation;