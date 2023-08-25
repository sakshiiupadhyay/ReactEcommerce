import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../App';
import bg4 from '../components/bg4.webp';
import axios from 'axios';
import Footer from '../components/Footer.js';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import money from '../components/money.png'
import fast from '../components/fast.png'
import support from '../components/support.png'
import img2 from '../components/img2.jpg'
import img3 from '../components/img3.jpg'
import img4 from '../components/img4.webp'
import bg5 from '../components/img9.jpg'


export default function Shop() {

  const [data, setData] = useState([]);
  const { cartItems, handleAddProduct } = useContext(CartContext);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleAddToCart = (item) => {
    if (isAuthenticated) {
      handleAddProduct(item);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      alert('You need to login first');
      loginWithRedirect();
    }
  };

  useEffect(() => {

    axios.get(" https://fakestoreapi.com/products?json")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data from API:", error);
      });

    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      handleAddProduct(JSON.parse(storedCartItems));
    }

  }, []);




  return (
    <>


      <section className='w-full mt-12 h-screen sm:h-screen bg-cover bg-center flex  justify-center flex-col md:h-screen bg-no-repeat text-center items-center '
        style={{
          backgroundImage: `url(${bg4})`,
        }}>

        <h1 className='text-6xl font-bold text-cyan-700 '>Shop With Us</h1>
        <h1 className='text-6xl font-bold mt-5 text-cyan-950'>And Your Family</h1>

      </section>


      <section className='mt-20 mb-20'>
        <div class='flex flex-col gap-4 sm:w-full justify-center mt-10 mb-0 lg:flex-row sm:flex-col md:flex-row'>
          <div class='w-80 h-56 bg-cover border border-gray-300 shadow-lg shadow-gray-400 hover:shadow-gray-600 bg-center sm:text-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={money} alt="Seasonal Sale" class='h-40 w-72' />
            <h2 class='text-cyan-600 text-center text-xl font-bold bg-green-300 bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              Save Money
            </h2>
          </div>

          <div class='w-80 h-56 bg-cover border border-gray-300 shadow-lg shadow-gray-400 hover:shadow-gray-600 bg-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={fast} alt="Seasonal Sale" class='h-40 w-72' />
            <h2 class='text-cyan-600 text-center text-xl font-bold bg-green-300 bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              Fast Delivery
            </h2>
          </div>

          <div class='w-80 h-56 bg-cover border border-gray-300 shadow-lg shadow-gray-400 hover:shadow-gray-600 bg-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={support} alt="Seasonal Sale" class='h-40 w-72' />
            <h2 class='text-cyan-600 text-center text-xl font-bold bg-green-300 bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              24/7 Support
            </h2>
          </div>
        </div>
      </section>

      <section>

        <div className='text-center mt-10 mb-10'>
          <h1 className='text-4xl text-blue-500 font-bold'>OUR PRODUCTS</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ml-10 mt-10 mr-10 ' >

          {data.map(item => (
            <div className='border rounded p-4 bg-white' key={item.id}>
              

              <Link to={`/product/${item.id}`} state={{ product: item }}>
                <img className='w-70 items-center justify-center h-60 object-cover' src={item.image} alt="not found" />
              </Link>

              <div className='mt-10'>
              <Link to={`/product/${item.id}`} state={{ product: item }}>
                <h4>{item.category}</h4>
                </Link>
                <div>
                <Link to={`/product/${item.id}`} state={{ product: item }}>
                  <h4 className='text-lg font-bold mb-2 h-36'>{item.title}</h4>
                  </Link>
                </div>
                <h5 className='text-yellow-500 mt-5 ' ><i class="fa-solid fa-star"></i>{item.rating.rate}</h5>
                <h3 className=' font-semibold bottom-3 mt-1'>${item.price}</h3>
                <p className='text-green-500 float-right leading-4 bottom-0 cursor-pointer h-4 hover:text-gray-300' onClick={() => handleAddToCart(item)} ><i onClick={() => handleAddProduct(item)} class="fa-solid fa-cart-plus "></i></p>
              </div>


            </div>
          ))}
        </div>
      </section>

      <section
        className='w-full mt-20 mb-10 h-56 bg-cover bg-center flex justify-center items-center flex-col bg-no-repeat'
        style={{
          backgroundImage: `url(${img2})`,
        }}
      >
        <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white text-center'>
          Up to <span className='text-yellow-300'>50% OFF</span> on all Clothes and Accessories
        </h3>
        <h4 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-red-600 font-bold mt-2'>
          Shop with your family
        </h4>
      </section>

      <div class='flex flex-col gap-4 sm:w-full justify-center mt-10 mb-0 lg:flex-row sm:flex-col md:flex-row'>
          <div class='w-80 h-56 bg-cover bg-center sm:text-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={img3} alt="Seasonal Sale" class='h-40 w-80' />
            <h2 class='text-white text-center text-xl font-bold bg-black bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              Beauty Brands
            </h2>
          </div>

          <div class='w-80 h-56 bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={img4} alt="Seasonal Sale" class='h-40 w-80' />
            <h2 class='text-white text-center text-xl font-bold bg-black bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              Trendy Clothes
            </h2>
          </div>

          <div class='w-80 h-56 bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={bg5} alt="Seasonal Sale" class='h-40 w-80' />
            <h2 class='text-white text-center text-xl font-bold bg-black bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              Budget Friendly
            </h2>
          </div>
        </div>

      <Footer />

    </>


  );
}

