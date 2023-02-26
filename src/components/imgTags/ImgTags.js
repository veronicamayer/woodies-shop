/* css import */
import './ImgTags.css';

/* router dom import */
import { Link } from "react-router-dom";

/* img import */
import Schuesseln from "../../images/Schuesseln.png";
import Stuhl from "../../images/Stuhl.png";
import Tisch from "../../images/Tisch.png";

/* mapping names, img, description together */
const imageMap = {
    Krisha: { src: Schuesseln, description: "These bowls are perfect for any kitchen." },
    Deon: { src: Stuhl, description: "This chair is comfortable and stylish." },
    Jenson: { src: Tisch, description: "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points - not that this dining table needs it. Nordic retro? You got it." },
};

const ImgTags = (props) => {
    /* destructuring */
    const { name } = props;

    return ( 
        <section id='imgTags'>
            <Link to={`/products/${name}`}><img src={imageMap[name].src} alt={name} /></Link>
            <p>{name}</p>
            <Link to={`/products/${name}`} id="links">Shop now</Link>
        </section>
    );
};

export default ImgTags;
