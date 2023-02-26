/* router dom import */
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* pages import */
import Home from './pages/home/Home'
import About from './pages/about/About'
import Products from './pages/products/Products'
import ProductsDetails from './pages/productsDetails/ProductsDetails'

/* components import */
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:name" element={<ProductsDetails/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
