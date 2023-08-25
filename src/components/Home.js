import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import bg5 from '../components/img9.jpg'
import img2 from '../components/img2.jpg'
import img3 from '../components/img3.jpg'
import img4 from '../components/img4.webp'
import money from '../components/money.png'
import img7 from '../components/img7.jpg'
import fast from '../components/fast.png'
import support from '../components/support.png'
import img5 from '../components/background.jpg';
import axios from 'axios';
import Footer from '../components/Footer.js';
import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useEffect, useState } from 'react';

export default function Home() {
  const { cartItems, handleAddProduct } = useContext(CartContext);
  const [fetchedData, setFetchedData] = useState([]);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleAddToCart = (item) => {
    if (isAuthenticated) {
      handleAddProduct(item)
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      alert('You need to login first');
      loginWithRedirect();
    }
  };

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setFetchedData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });

    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      handleAddProduct(JSON.parse(storedCartItems));
    }
  }, []);

  const categoryGroups = fetchedData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <>

      <section className='w-full mt-16 min-h-screen bg-cover bg-center flex items-start justify-center flex-col md:min-h-screen bg-violet-300 bg-no-repeat bg-gradient-to-r from-cyan-500 to-blue-500' style={{ backgroundImage: `url(${img5})`, backgroundSize: 'cover' }}>
        <div className='mx-4 md:mx-16 mt-10 md:mt-20 mb-10 md:mb-20'>
          <h4 className='ml-6 md:ml-10 text-lg md:text-xl text-black mb-3 font-semibold'>Trade-in Offer</h4>
          <h1 className='text-4xl md:text-6xl font-bold text-red-600 ml-6 md:ml-10'>Shopping Time</h1>
          <h1 className='text-4xl md:text-6xl text-white font-bold mt-2 md:mt-5 ml-6 md:ml-10'>Super Value Deals</h1>
          <p className='text-sm md:text-base mt-2 md:mt-5 ml-6 md:ml-10'>Save more with coupons</p>
        </div>
      </section>

      <section className='mt-14'>
        <h2 className='text-5xl text-center font-bold'>Featured Products</h2>
        <p className=' mt-5 text-center text-orange-600'>Shop with us and get the modern products</p>



        <div className='flex flex-col gap-4 sm:w-full justify-center mt-10 mb-0 lg:flex-row sm:flex-col md:flex-row'>
          <div className='w-80 h-56 bg-cover bg-center sm:text-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={img3} alt="Seasonal Sale" className='h-40 w-80' />
            <h2 className='text-white text-center text-xl font-bold bg-black bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              Beauty Brands
            </h2>
          </div>

          <div className='w-80 h-56 bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={img4} alt="Seasonal Sale" className='h-40 w-80' />
            <h2 className='text-white text-center text-xl font-bold bg-black bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              Trendy Clothes
            </h2>
          </div>

          <div className='w-80 h-56 bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={bg5} alt="Seasonal Sale" className='h-40 w-80' />
            <h2 className='text-white text-center text-xl font-bold bg-black bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              Budget Friendly
            </h2>
          </div>
        </div>

        <div className='ml-10 mt-10 mr-10'>
          {Object.entries(categoryGroups).map(([category, categoryItems]) => (
            <div key={category} className='mb-10'>
              <h3 className='text-4xl font-bold mb-4 text-violet-700 uppercase text-center mt-20 mb-16'>{category}</h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                {categoryItems.map((item) => (


                  <div key={item.id} className='border rounded-lg p-4 bg-white'>

                    <div>
                      <Link to={`/product/${item.id}`} state={{ product: item }}>


                        <img className='w-70 items-center justify-center h-60 object-cover' src={item.image} alt="not found" />

                      </Link>

                    </div>

                    <div className='mt-10'>
                      <div>

                        <Link to={`/product/${item.id}`} state={{ product: item }}>
                          <h4 className='text-lg font-semibold mb-2  h-36'>{truncateString(item?.title, 70)}</h4>
                        </Link>
                      </div>

                      <h5 className='text-yellow-500 mt-5 '><i class="fa-solid fa-star mr-1"> </i>{item.rating.rate}</h5>
                      <h3 className=' font-bold text-blue-600 bottom-3 mt-1'>${item.price}</h3>
                      <p className='text-green-500 float-right leading-4 bottom-0 cursor-pointer h-4 hover:text-gray-300' onClick={() => handleAddToCart(item)} ><i onClick={() => handleAddProduct(item)} class="fa-solid fa-cart-plus "></i></p>
                    </div>



                  </div>
                ))}
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


      <section
        className='ml-4 md:ml-16 mr-4 md:mr-16 mt-10 md:mt-20 mb-10 md:mb-20 bg-cover bg-center flex items-start justify-center flex-col md:h-screen bg-no-repeat bg-gradient-to-r from-cyan-500 to-blue-500'
        style={{
          backgroundImage: `url(${img7})`,
        }}
      >
        <h4 className='ml-6 md:ml-12 text-xl text-grey-300 mb-3 font-semibold'>Seasonal Sales</h4>
        <h1 className='text-3xl md:text-4xl font-bold text-red-600 ml-4 md:ml-10'>Shop for your</h1>
        <h1 className='text-3xl md:text-4xl text-blue-500 font-bold mt-2 md:mt-5 ml-4 md:ml-10'>Family & Friends</h1>
        <p className='text-sm md:text-base mt-2 md:mt-5 ml-4 md:ml-10'>The best trendy dresses are here</p>
      </section>


      <section className='mt-20'>
        <div className='flex flex-col gap-4 sm:w-full justify-center mt-10 mb-0 lg:flex-row sm:flex-col md:flex-row'>
          <div className='w-80 h-56 bg-cover border border-gray-300 shadow-lg shadow-gray-400 hover:shadow-gray-600 bg-center sm:text-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={money} alt="Seasonal Sale" className='h-40 w-72' />
            <h2 className='text-cyan-600 text-center text-xl font-bold bg-green-300 bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              Save Money
            </h2>
          </div>
          <div className='w-80 h-56 bg-cover border border-gray-300 shadow-lg shadow-gray-400 hover:shadow-gray-600 bg-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={fast} alt="Seasonal Sale" className='h-40 w-72' />
            <h2 className='text-cyan-600 text-center text-xl font-bold bg-green-300 bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              Fast Delivery
            </h2>
          </div>

          <div className='w-80 h-56 bg-cover border border-gray-300 shadow-lg shadow-gray-400 hover:shadow-gray-600 bg-center bg-no-repeat flex flex-col justify-end items-center mx-auto'>
            <img src={support} alt="Seasonal Sale" className='h-40 w-72' />
            <h2 className='text-cyan-600 text-center text-xl font-bold bg-green-300 bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              24/7 Support
            </h2>
          </div>
        </div>
      </section>



      <Footer />
    </>

  );
}




