/* css import */
import './Header.css';

/* img import */
import Icon from "../../images/Icon.png";

const Header = (props) => {
    return ( 
        <section id='header'>
            <img src={Icon} alt="icon" />
            <h1>{props.page}</h1>
            <span></span>
            <h2>{props.name}</h2>
        </section>
    );
}

export default Header;