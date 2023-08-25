import bg6 from '../components/bg6.webp';
import Footer from '../components/Footer.js';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../App.js';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export default function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddToCart = (item) => {
    if (isAuthenticated) {
      const updatedCartItems = [...cartItems, item];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      loginWithRedirect(); 
    }
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (isAuthenticated) {
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    } else {
      setCartItems([]); 
      localStorage.removeItem('cartItems');
    }
    setIsLoading(false); 
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      axios
        .get("https://fakestoreapi.com/products?json")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data from API:", error);
        });
    }
  }, [isAuthenticated, isLoading]);




  return (
    <div>
      <section className='w-full h-screen sm:h-screen bg-cover bg-center flex  justify-center flex-col md:h-screen bg-no-repeat text-center items-center '
        style={{
          backgroundImage: `url(${bg6})`,
        }}>

        <h1 className='text-6xl font-bold text-orange-500 '>Here Is Your</h1>
        <h1 className='text-6xl font-bold mt-5 text-red-950'>Cart Section</h1>
      </section>

      <section>
        <div className='px-10 mt-10'>
          {cartItems.length === 0 ? (
            <p className='text-3xl text-center font-bold text-blue-600'>No Items in Your Cart</p>
          ) : (

            <div className="overflow-x-auto">
              <table className="table-auto min-w-max w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="text-center">
                      <td className="border px-4 py-2">{item.title}</td>
                      <td className="border px-4 py-2">
                        <img
                          className="w-20 h-20 object-cover"
                          src={item.image}
                          alt="not found"
                        />
                      </td>
                      <td className="border px-4 py-2">${item.price}</td>
                      <td className="border px-4 py-2">
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleRemoveFromCart(item)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          )}
        </div>
      </section>


      <Footer />

    </div>
  );
}