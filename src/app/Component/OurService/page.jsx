import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      
      <div className='container mx-auto bg-white border-2 border-gray-900/15 rounded-2xl shadow-2xl my-10 py-10 px-5'>

        {/* 1st div */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-items-center'>
          <div><Image alt='Pic' width={150} height={150} src="/Img/FreeFastDelivery.png"/></div>
          <div>
            <h2 className='text-sm font-bold'>Fast & Free Delivery</h2>
            <p className='text-xs text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia magnam modi deserunt dicta reiciendis, at distinctio cupiditate labore laborum obcaecati ut eius neque consectetur, dolorem repudiandae. Maxime, natus quae!</p>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-items-center'>
        <div><Image alt='Pic' width={150} height={150} src="/Img/CustomOrdering.png"/></div>
          <div>
            <h2 className='text-sm font-bold'>Fast & Free Delivery</h2>
            <p className='text-xs text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia magnam modi deserunt dicta reiciendis, at distinctio cupiditate labore laborum obcaecati ut eius neque consectetur, dolorem repudiandae. Maxime, natus quae!</p>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-items-center'>
        <div><Image alt='Pic' width={150} height={150} src="/Img/QualifiedFoods.png"/></div>
          <div>
            <h2 className='text-sm font-bold'>Fast & Free Delivery</h2>
            <p className='text-xs text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia magnam modi deserunt dicta reiciendis, at distinctio cupiditate labore laborum obcaecati ut eius neque consectetur, dolorem repudiandae. Maxime, natus quae!</p>
            </div>
        </div>
        </div>
        {/* 2nd div */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-items-center'>
        <div><Image alt='Pic' width={150} height={150} src="/Img/SaveYourCustomMenu.png"/></div>
          <div>
            <h2 className='text-sm font-bold'>Fast & Free Delivery</h2>
            <p className='text-xs text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia magnam modi deserunt dicta reiciendis, at distinctio cupiditate labore laborum obcaecati ut eius neque consectetur, dolorem repudiandae. Maxime, natus quae!</p>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-items-center'>
        <div><Image alt='Pic' width={150} height={150} src="/Img/ChatWithUs.png"/></div>
          <div>
            <h2 className='text-sm font-bold'>Fast & Free Delivery</h2>
            <p className='text-xs text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia magnam modi deserunt dicta reiciendis, at distinctio cupiditate labore laborum obcaecati ut eius neque consectetur, dolorem repudiandae. Maxime, natus quae!</p>
            </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 place-items-center'>
        <div><Image alt='Pic' width={150} height={150} src="/Img/Reservation.png"/></div>
          <div>
            <h2 className='text-sm font-bold'>Fast & Free Delivery</h2>
            <p className='text-xs text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia magnam modi deserunt dicta reiciendis, at distinctio cupiditate labore laborum obcaecati ut eius neque consectetur, dolorem repudiandae. Maxime, natus quae!</p>
            </div>
        </div>
        </div>


      </div>

    </div>
  );
};

export default page;