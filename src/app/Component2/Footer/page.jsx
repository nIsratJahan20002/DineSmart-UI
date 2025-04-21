import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const page = () => {



    return (
        <div>
            <footer className='bg-white text-black py-10'>
                <div className='container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center'>

                    <div>
                        <h2 className='text-xl text-amber-600 font-bold'>DineSmart</h2>
                        <p className='mt-5 text-gray-900/80 text-sm text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A eius dolores quisquam magnam libero, aliquam officia dicta maxime nisi similique soluta molestias atque vitae, dolor mollitia laudantium animi debitis aperiam.</p>
                        <div className='flex space-x-4 mt-4'>
                            <FaFacebookF className="text-xl cursor-pointer hover:text-blue-500"/>
                            <FaTwitter className="text-xl cursor-pointer hover:text-blue-400"/>
                            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500"/>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-md font-semibold mb-3'>Company</h2>
                        <ul className='space-y-2 text-gray-600'>
                            <li><a href="#" className='hover:text-gray-900 text-sm'>About Us</a></li>
                            <li><a href="#" className='hover:text-gray-900 text-sm'>Email</a></li>
                            <li><a href="#" className='hover:text-gray-900 text-sm'>Contact</a></li>
                            <li><a href="#" className='hover:text-gray-900 text-sm'>Address</a></li>
                        </ul>
                    </div>

                    <div>
                    <h2 className='text-md font-semibold mb-3'>Services</h2>
                        <ul className='space-y-2 text-gray-600'>
                            <li><a href="#" className='text-gray-600 hover:text-gray-900 text-sm'>Pakages</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-900 text-sm'>Discount</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-900 text-sm'>Team</a></li>
                            <li><a href="#" className='text-gray-600 hover:text-gray-900 text-sm'>Features</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-md font-semibold mb-3'>Customer Support</h2>
                        <h2 className='text-md font-semibold'>Privacy & Security</h2>
                    </div>

                </div>

                <div className='text-center text-gray-500 mt-10 border-t border-gray-700/30 pt-5'>
                   &copy; {new Date().getFullYear()} DineSmart. All rights reserved. 
                </div>

            </footer>
        </div>
    );
};

export default page;






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