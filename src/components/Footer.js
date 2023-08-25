import React from 'react';

const Footer = () => {
  return (
    <section>
    <footer className="bg-gray-800 text-white py-6 mt-20 mb-3 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 md:flex md:justify-between md:items-center">
         
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg text-gray-400 font-bold">About Us</h3>
            <div className='flex flex-col'>
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            </div>
          </div>
         
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-gray-400">Help</h3>
            <p>Email: info@shopme.com</p>
            <p>Phone: (123) 456-7890</p>
            <a href="/contact">Contact</a>
          </div>
         
          <div>
            <h3 className="text-lg font-bold text-gray-400">Follow Us</h3>
            <div className="flex flex-col ">
              <a href="https://twitter.com/Sakshii_47" className="text-white hover:text-gray-400">
                Twitter
              </a>
              <a href="https://www.instagram.com/sakshii_upadhyay_/" className="text-white hover:text-gray-400">
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/sakshii-upadhyay/">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </section>
    
  );
};

export default Footer;

