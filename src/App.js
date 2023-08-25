import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Shop from './components/Shop.js';
import About from './components/About.js';
import Contact from './components/Contact';
import Cart from './components/Cart.js';
import { useState, createContext, useEffect } from 'react';
import ProductDetails from "./components/ProductDetails.js";
import { useAuth0 } from '@auth0/auth0-react';

export const CartContext = createContext();

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  


  

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
  
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(" https://fakestoreapi.com/products?json");
      const data = await response.json();
      setData(data);

      localStorage.setItem('data', JSON.stringify(data));

    };

    fetchData();
  }, []);



  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  
  return (
    <CartContext.Provider value={{ cartItems, handleAddProduct, setCartItems }}>
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart key={cartItems.length}/>} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </HashRouter>
    </CartContext.Provider>
  );
};

export default App;
