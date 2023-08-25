import React from 'react';
import bg5 from '../components/bg7.webp';
import Footer from '../components/Footer.js';
import { useAuth0 } from '@auth0/auth0-react';
import money from '../components/money.png'
import fast from '../components/fast.png'
import support from '../components/support.png'

export default function Contact() {

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleSubmit = () => {
    if (isAuthenticated) {
      
    } else {
      alert('You need to login first');
      loginWithRedirect();
    }
  };
  return (
    <>
    <div className=' mt-12'>
     <section className='w-full bg-cover opacity-3 h-screen bg-center flex items-start justify-center flex-col  bg-no-repeat sm:h-screen'
      style={{
        backgroundImage: `url(${bg5})`,
      }}>
      
      <h1 className='text-6xl font-bold text-white ml-14'>Contact Us </h1>
      <h1 className='text-6xl font-bold mt-5 text-green-300 ml-14'>For More Details</h1>
    </section>

    <section className='mt-20'>
      <h2 className='text-4xl font-bold text-center'>Feel Free to Contact Us</h2>

      <iframe className='mt-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.09799722425!2d82.90870623666285!3d25.320894921086335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1690438865150!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:0}}
      allowFullScreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </section>

    <section className='mt-10 '>
      <div className='flex-col items-center block text-gray-700 text-sm font-bold mb-2'>
      <form action="https://formspree.io/f/xqkvarqk" method='POST' className="max-w-lg mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <input 
        className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500 mt-5"
        type="text" 
        name='username'
        placeholder='username'
        autoComplete='off'
        required
        />

       <input 
       className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500 mt-5"
        type="email" 
        name='Email'
        placeholder='Email'
        autoComplete='off'
        required
        />

        <textarea 
        className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500 mt-5"
        name="message"  
        cols="30" 
        rows="6"
        placeholder='feedback'
        autoComplete='off'
        required>
        </textarea>

        <div className="flex justify-center">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 mt-5"
          type="submit" onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>

      </form>
      </div>
    </section>

    
    </div>

    <section className='mt-20'>
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

<Footer/>
</>
  );
}
