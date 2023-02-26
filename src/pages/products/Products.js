/* css import */
import './Products.css';

/* img import */
import ImgTags from '../../components/imgTags/ImgTags.js';

/* components import */
import Header from '../../components/header/Header.js';

const Products = () => {
    return ( 
        <section id='products'>
            <Header page="What we have" name="Products" />
            <article>
                {/* these img tags have a router to the ProductsDetails page */}
                <ImgTags name="Jenson" />
                <ImgTags name="Deon" />
                <ImgTags name="Krisha" />
            </article>
        </section>
    );
};

export default Products;
