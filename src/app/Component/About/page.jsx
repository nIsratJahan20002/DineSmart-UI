import React from 'react';
import Footer from '@/app/Component2/Footer/page';
import OurService from '@/app/Component2/OurService/page';
import ClientCard from '@/app/Component2/ClientCard/clientcard';
import ClientCardGrid from '@/app/Component2/ClientCardGrid/clientcardgrid';
import { FaStar } from "react-icons/fa";


const page = () => {
  return (
    <div>
      <OurService/>
      <div className='pt-10 pl-17 pb-10'>
      <h1 className='text-2xl font-bold  '>Our clients know best</h1>
      <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <ClientCardGrid/>

      <div className='container mx-auto items-center justify-center py-15 '>
        <h1 className='text-2xl font-bold text-center '>How was your experience with our restaurant?</h1>

        <div className="flex items-center justify-center py-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7 "
              stroke="none"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 
                      7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>


        <button className='bg-amber-600 py-3 px-7 rounded-lg text-white font-semibold text-sm cursor-pointer hover:bg-white hover:text-amber-600 hover:border hover:border-amber-600/30 hover:shadow-xl mx-auto block mt-2 '>Continue</button>
      </div>
      <Footer/>
    </div>
  );
};

export default page;