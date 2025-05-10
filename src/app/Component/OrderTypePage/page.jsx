import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OrderTypePage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-2xl font-bold mt-8 mb-12">Choose Your Order Type</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          {/* Dine In */}
          <div className="text-center">
            <Link href="/TableList" passHref>
              <div className="cursor-pointer border-2 border-gray-400/50 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 mb-4">
                <Image 
                  alt="Dine In" 
                  width={200} 
                  height={200} 
                  src="/Img/DineIn.png" 
                  className="mx-auto"
                />
              </div>
              <p className="text-lg font-semibold">Dine In</p>
            </Link>
          </div>

          {/* Take Away */}
          <div className="text-center">
            <Link href="/" passHref>
              <div className="cursor-pointer border-2 border-gray-400/50 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 mb-4">
                <Image 
                  alt="Take Away" 
                  width={200} 
                  height={200} 
                  src="/Img/TakeAway.png" 
                  className="mx-auto"
                />
              </div>
              <p className="text-lg font-semibold">Take Away</p>
            </Link>
          </div>

          {/* Delivery */}
          <div className="text-center">
            <Link href="/" passHref>
              <div className="cursor-pointer border-2 border-gray-400/50 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 mb-4">
                <Image 
                  alt="Delivery" 
                  width={200} 
                  height={200} 
                  src="/Img/HomeDelivery.png" 
                  className="mx-auto"
                />
              </div>
              <p className="text-lg font-semibold">Delivery</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTypePage;