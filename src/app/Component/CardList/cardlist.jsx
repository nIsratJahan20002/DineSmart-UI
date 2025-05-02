'use client';
import React, { useState } from 'react';

const CardList = () => {
    const [quantity, setQuantity] = useState(1);
    
    const burgerItems = [
        { name: 'Sesame Bun', quantity: 'x1', price: 80 },
        { name: 'Chicken Fried Patty', quantity: 'x1', price: 80 },
        { name: 'Cheddar Cheese', quantity: 'x1', price: 20 },
        { name: 'Cucumber', quantity: 'x1', price: 10 },
        { name: 'Tomato', quantity: 'x1', price: 10 },
        { name: 'Egg', quantity: 'x1', price: 30 },
        { name: 'Onion', quantity: 'x1', price: 10 },
        { name: 'Lettuce', quantity: 'x1', price: 10 },
        { name: 'Red Sauce', quantity: 'x1', price: 10 },
        { name: 'White Sauce', quantity: 'x1', price: 10 },
        { name: 'Sesame Lower Bun', quantity: 'x1', price: 80 },
    ];

    const burgerPrice = 400;
    const totalPrice = burgerPrice * quantity;

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="font-sans max-w-md mx-auto border border-gray-300 rounded-lg p-5 shadow-md">
            <h3 className="text-gray-800 mb-4 font-semibold">Your Custom Burger</h3>

            <table className="w-full border-collapse mb-5">
                <tbody>
                    <tr>
                        <td colSpan="2" className="py-2 font-bold border-b border-gray-200">
                            Own Style Burger 1
                        </td>
                        <td className="text-right py-2 font-bold border-b border-gray-200">
                            {burgerPrice} BDT
                        </td>
                    </tr>
                    {burgerItems.map((item, index) => (
                        <tr key={index}>
                            <td className="w-5"></td>
                            <td className="py-1">{item.name} {item.quantity}</td>
                            <td className="text-right py-1">{item.price} BDT</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="my-2 flex items-center">
                <span className="mr-4 font-bold">Qty</span>
                <button 
                    onClick={increaseQuantity}
                    className="bg-gray-200 hover:bg-gray-300 border border-gray-300 px-3 py-1 rounded cursor-pointer transition"
                >
                    +
                </button>
                <span className="mx-3">{quantity}</span>
                <button 
                    onClick={decreaseQuantity}
                    className="bg-gray-200 hover:bg-gray-300 border border-gray-300 px-3 py-1 rounded cursor-pointer transition"
                >
                    -
                </button>
                <button className="ml-4 bg-red-100 hover:bg-red-200 text-red-600 border border-red-300 px-3 py-1 rounded cursor-pointer transition">
                    Remove
                </button>
            </div>

            <div className="border-t border-dashed border-gray-300 my-5"></div>

            <div className="flex justify-between font-bold text-lg mb-5">
                <span>Total</span>
                <span>{totalPrice} BDT</span>
            </div>
        </div>
    );
};

export default CardList;