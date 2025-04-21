import React from 'react';
import Footer from '@/app/Component2/Footer/page';
import Image from 'next/image';

const page = () => {
    return (
        <div>
          <div>

            <h1 className='text-center text-2xl font-bold mt-15'>Choose Your Order Type</h1>

            <div className='container mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-10 mb-20'>

              <div>
                <div className='border-2 border-gray-900/50 rounded-xl shadow-lg p-2 mb-2'>
                  <Image className=''  alt='Pic' width={200} height={200}  src="/Img/DineIn.png"/>
                </div>
                <p className='text-center text-lg font-bold'>Dine In</p>
              </div>

              <div>
              <div className='border-2 border-gray-900/50 rounded-xl shadow-lg p-2 mb-2'>
                  <Image className=''  alt='Pic' width={200} height={200}  src="/Img/HomeDelivery.png"/>
                </div>
                <p className='text-center text-lg font-bold'>Take Away</p>
              </div>

              <div>
              <div className='border-2 border-gray-900/50 rounded-xl shadow-lg p-2 mb-2'>
                  <Image className=''  alt='Pic' width={200} height={200}  src="/Img/TakeAway.png"/>
                </div>
                <p className='text-center text-lg font-bold'>Delivery</p>
              </div>

            </div>

          </div>
          <Footer/>

          

        </div>
    );
};

export default page;