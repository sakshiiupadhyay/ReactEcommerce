import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import money from '../components/money.png'
import fast from '../components/fast.png'
import support from '../components/support.png'



export default function ProductDetails() {
  const location = useLocation();
  const product = location.state && location.state.product;



  if (!product) {
    return <div>Loading...</div>;
  }



  return (
    <>

<div className='container mx-auto mt-32'>
  <div className='text-center'>
    <h1 className='uppercase mb-10 text-3xl text-purple-500 font-bold '>
      {product.category}
    </h1>
  </div>

  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
    <div>
      <img
        src={product.image}
        alt={product.title}
        className='h-4/6 mx-auto md:h-4/6'
      />
    </div>
    <div className='md:mt-0'>
      <h2 className='text-3xl font-semibold mb-2 '>{product.title}</h2>
      <h3 className='text-3xl mt-5 font-bold text-blue-600 mb-4'>
        ${product.price}
      </h3>
      <div>
        <h2 className='text-2xl mb-2 font-semibold'>Product Details</h2>
        <h5 className='text-yellow-500 mt-3 mb-3 '>
          <i className="fa-solid fa-star mr-1"></i>
          {product.rating.rate}
        </h5>
        <p className='mb-4'>{product.description}</p>
      </div>

      <div className='mt-10'>
        <Link to='/'>
          <button className='bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-900'>
            Back to home
          </button>
        </Link>
      </div>
      
    </div>
    
  </div>

  
</div>

  

<section className='mt-24'>
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

      <Footer />
    </>
  );
}
