import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-white text-black py-12 px-4'>
      <div className='container mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12'>
          {/* Brand Info */}
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-amber-600'>DineSmart</h2>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Revolutionizing dining experiences with smart technology and exceptional service. 
              We connect food lovers with the best restaurants in town.
            </p>
            <div className='flex space-x-4 pt-2'>
              <a href="#" className='text-gray-500 hover:text-blue-600 transition-colors'>
                <FaFacebookF className="text-lg" />
              </a>
              <a href="#" className='text-gray-500 hover:text-blue-400 transition-colors'>
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className='text-gray-500 hover:text-pink-600 transition-colors'>
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className='text-gray-500 hover:text-blue-700 transition-colors'>
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-800'>Company</h3>
            <ul className='space-y-3'>
              {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className='text-gray-600 hover:text-amber-600 text-sm transition-colors flex items-start'>
                    <span className='hover:underline'>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-800'>Services</h3>
            <ul className='space-y-3'>
              {['Reservations', 'Catering', 'Private Dining', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <a href="#" className='text-gray-600 hover:text-amber-600 text-sm transition-colors flex items-start'>
                    <span className='hover:underline'>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-800'>Contact Us</h3>
            <ul className='space-y-3 text-gray-600 text-sm'>
              <li className='flex items-start space-x-3'>
                <FaPhoneAlt className='mt-0.5 text-amber-600 flex-shrink-0' />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className='flex items-start space-x-3'>
                <FaEnvelope className='mt-0.5 text-amber-600 flex-shrink-0' />
                <span>info@dinesmart.com</span>
              </li>
              <li className='flex items-start space-x-3'>
                <FaMapMarkerAlt className='mt-0.5 text-amber-600 flex-shrink-0' />
                <span>123 Restaurant Row, Foodville, FK 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm'>
          <p>&copy; {new Date().getFullYear()} DineSmart. All rights reserved.</p>
          <div className='flex justify-center space-x-4 mt-2'>
            <a href="#" className='hover:text-amber-600 hover:underline'>Privacy Policy</a>
            <a href="#" className='hover:text-amber-600 hover:underline'>Terms of Service</a>
            <a href="#" className='hover:text-amber-600 hover:underline'>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






/* 

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Prevent Font Awesome from adding CSS
config.autoAddCss = false;


const page = () => {
    return (
        <div>
            <div className='w-sm h-sm bg-amber-200/20 flex items-center justify-center sm:w-screen sm:h-65 sm:bg-amber-200/20 sm:flex sm:items-center sm:justify-center sm:border-2 sm:border-gray-500/15 md:w-screen md:h-65 md:bg-amber-200/20 md:flex md:items-center md:justify-center'>
            <div className='w-110 h-sm flex space-x-2 pt-5 pl-10  sm:w-240 sm:h-65 sm:flex sm:space-x-2 sm:pt-10 md:w-240 md:h-65 md:flex md:space-x-2 md:pt-10'>
            <div className='w-sm h-sm space-y-2 sm:w-80 sm:h-65 pl-5 md:w-60 md:h-65 md:space-y-2 '>
                <h1 className='text-orange-600/80 text-md font-bold sm:text-2xl sm:font-bold md:text-orange-600/80 md:text-sm md:font-bold'>DineSmart</h1>
                <p className='text-gray-400 text-xs text-justify sm:text-gray-400 sm:text-sm sm:text-justify md:text-gray-400 md:text-xs md:text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorum hic illo, architecto quibusdam ipsam reiciendis ipsa repellat omnis libero dicta tenetur, laudantium, dolorem quos ex vel perferendis deleniti aperiam!</p>

                <div className="flex justify-center space-x-6 text-lg pt-5">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-500" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-400" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500" />
                </a>
             </div>

            </div>

            <div className='w- h- sm:w-40 sm:h-50 md:w-20 md:h-50'>

            </div>
        
            <div className='w-25 h-50 space-y-5 sm:w-40 sm:h-50 sm:space-y-5 md:w-30 md:h-50 md:space-y-5'>
                    <h2 className='text-sm font-bold sm:text-md sm:font-bold md:text-sm md:font-bold'>Company</h2>
                    <ul className='text-xs space-y-2 sm:text-sm sm:space-y-2 md:text-xs md:space-y-2'>
                        <li>About Us</li>
                        <li>Email</li>
                        <li>Contact</li>
                        <li>Address</li>
                    </ul>
            </div>

            <div className='w-25 h-50 space-y-5 sm:w-40 sm:h-50 sm:space-y-5 md:w-30 md:h-50 md:space-y-5'>
                    <h2 className='text-sm font-bold sm:text-md sm:font-bold md:text-sm md:font-bold'>Service</h2>
                    <ul className='text-xs space-y-2 sm:text-sm sm:space-y-2 md:text-xs md:space-y-2'>
                        <li>Pakages</li>
                        <li>Discount</li>
                        <li>Team</li>
                        <li>Features</li>
                    </ul>
            </div>

            <div className='w- h- space-y-2 pt-12 font-semibold text-xs sm:w-40 sm:h-50 sm:space-y-2 sm:pt-12 sm:font-semibold md:w-30 md:h-50 md:space-y-2 md:pt-12 md:font-semibold pl-3'>
                <h2>Customer Support</h2>
                <h2>Privacy & Security</h2>
            </div>
            </div>
        </div>


        <footer className="bg-gray-900 text-white py-2 h-12">
        <div className="container mx-auto text-center">
          <p className="mb-4">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          
        </div>
      </footer>

        </div>
    );
};

export default page;

*/