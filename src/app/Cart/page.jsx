import React from 'react';
import CartList from '../Component/CardList/cardlist';

const CartPage = () => {
  return (
    <div className='font-sans max-w-md mx-auto border border-gray-300 rounded-lg p-5 shadow-md'>
        <h2 className="text-gray-800 pb-2  text-lg text-center font-semibold">
                Choosed: Table 1 Seat 6
        </h2>
        <h3 className="text-gray-600 mb-1">Order Type: Dine In</h3>
      <CartList/>
      
      <div className='flex justify-center mt-5'>
      <button className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black border-none shadow-xl hover:from-yellow-400 hover:to-amber-500 py-3 px-30 rounded font-bold text-lg cursor-pointer transform hover:scale-105 transition-transform">
                Pay Now
            </button>
      </div>

            <div className="mt-4 text-sm text-gray-500 text-center">
                If someone tries to add multiple order types in single cart there will be warning to process one type of cart one at a time
            </div>
    </div>
  );
};

export default CartPage;