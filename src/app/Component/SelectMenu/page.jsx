import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SelectMenu = () => {
    const menuItems = [
        { name: 'Burger', image: '/Img/Burger.png', link: '/menu/burger' },
        { name: 'Pizza', image: '/Img/Pizza.png', link: '/menu/pizza' },
        { name: 'Salad', image: '/Img/Salad.png', link: '/menu/salad' },
    ];

    return (
        <div className="max-w-md mx-auto p-4 text-center bg-white rounded-lg shadow-sm">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-1">Order Type: Dine In</h1>
                <h2 className="text-lg text-gray-600 mb-4">Chosen: Table 1 Seat 6</h2>
                <div className="relative">
                    <h3 className="text-xl font-semibold text-gray-800 inline-block relative z-10 px-4 bg-white">
                        Select Menu
                    </h3>
                    <div className="absolute top-1/2 left-0 right-0 border-t border-gray-200 -z-1"></div>
                </div>
            </header>
            
            <section className="space-y-4">
                {menuItems.map((item, index) => (
                    <Link 
                        key={index} 
                        href={item.link} 
                        className="group flex items-center gap-4 p-3 border border-gray-200 rounded-lg transition-all hover:bg-gray-50 hover:border-gray-400/50"
                    >
                        <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                                src={item.image}
                                alt={`${item.name}`}
                                fill
                                className="object-contain"
                                sizes="64px"
                            />
                        </div>
                        <h4 className="text-lg font-medium text-gray-800 text-left flex-grow">
                            {item.name}
                        </h4>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-gray-400 group-hover:text-gray-600" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default SelectMenu;