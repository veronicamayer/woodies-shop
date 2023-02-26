/* css import */
import './ProductsDetails.css';

/* router dom import */
import { useParams } from "react-router-dom";

/* img import */
import Schuesseln from "../../images/Schuesseln.png";
import Stuhl from "../../images/Stuhl.png";
import Tisch from "../../images/Tisch.png";

/* components import*/
import Header from '../../components/header/Header.js';

/* mapping names, img, description together */
const imageMap = {
    Krisha: { src: Schuesseln, description: "These bowls are perfect for any kitchen." },
    Deon: { src: Stuhl, description: "This chair is comfortable and stylish." },
    Jenson: { src: Tisch, description: "Jenson demonstrates what designer Tim Fenby does best. Clean lines, subtle curves and an oak finish nail this season's trends. Boomerang legs add serious style points - not that this dining table needs it. Nordic retro? You got it." },
};

const ProductDetails = () => {
    return ( 
        <section id='productDetails'>
            <Header page={useParams().name} name="Products" />
            <article>
                <img src={imageMap[useParams().name].src} alt={useParams().name} />
                <p>{imageMap[useParams().name].description}</p>
            </article>
        </section>
    );
}

export default ProductDetails;
