import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const page = () => {
  return (
    <div>
      <div>

      <h1 className='text-center text-2xl font-bold mt-15'>Choose Your Order Type</h1>

      <div className='container mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-10 mb-20'>

        <div>
        <Link href="./Component/SelectMenu">
          <div className='border-2 border-gray-900/50 rounded-xl shadow-lg p-2 mb-2'>
          <Image className='' alt='Pic' width={200} height={200} src="/Img/DineIn.png" />
          </div>
          <p className='text-center text-lg font-bold'>Dine In</p>
        </Link>
        </div>

        <div>
        <Link href="/">
          <div className='border-2 border-gray-900/50 rounded-xl shadow-lg p-2 mb-2'>
          <Image className='' alt='Pic' width={200} height={200} src="/Img/HomeDelivery.png" />
          </div>
        </Link>
        <p className='text-center text-lg font-bold'>Take Away</p>
        </div>

        <div>
        <Link href="/">
          <div className='border-2 border-gray-900/50 rounded-xl shadow-lg p-2 mb-2'>
          <Image className='' alt='Pic' width={200} height={200} src="/Img/TakeAway.png" />
          </div>
        </Link>
        <p className='text-center text-lg font-bold'>Delivery</p>
        </div>

      </div>

      </div>
    </div>
  );
};

export default page;