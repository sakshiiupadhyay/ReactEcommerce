import React from 'react';
import bg2 from '../components/bg2.jpg';
import Footer from '../components/Footer.js';
import img2 from '../components/img2.jpg'
import img3 from '../components/img3.jpg'
import img4 from '../components/img4.webp'
import img5 from '../components/background.jpg';
import img10 from '../components/img10.jpg'



export default function About() {

  return (
    <>

      <section className='w-full mt-12 bg-cover opacity-3 h-screen bg-center flex items-start justify-center flex-col  bg-no-repeat sm:h-screen'
        style={{
          backgroundImage: `url(${bg2})`,
        }}>

        <h1 className='text-6xl font-bold text-red-500 ml-14'>Know More </h1>
        <h1 className='text-6xl font-bold mt-5 text-blue-600 ml-14'>About Us</h1>
      </section>

      <section class="m-4 md:m-8 mt-10 md:mt-20 flex flex-col md:flex-row">
  <div class="md:w-1/2">
    <img class="w-full" src={img10} alt="" />
  </div>
  <div class="md:w-1/2 max-w-screen-xl mx-auto p-6">
    <h3 class="text-2xl md:text-5xl font-bold text-center mt-2">Who We Are</h3>
    <p class="text-base md:text-xl mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, soluta officiis vitae, eveniet alias expedita voluptates quis corrupti labore beatae recusandae hic consequuntur ratione sequi eos facere magnam sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi, reiciendis aliquid ipsum corrupti ex perferendis. Optio cum, adipisci, fugiat dolorem animi aperiam placeat, fugit laudantium magni sint unde  </p>
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
            <img src={img5} alt="Seasonal Sale" className='h-40 w-80' />
            <h2 className='text-white text-center text-xl font-bold bg-black bg-opacity-80 py-2 px-4  bottom-0 left-0 w-full'>
              Budget Friendly
            </h2>
          </div>
        </div>

      <Footer />

    </>
  );
}
