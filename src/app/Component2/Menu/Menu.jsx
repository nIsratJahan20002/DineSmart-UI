'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {Menu,X} from 'lucide-react';
const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);

    return (
        <div>
            <nav className='bg-amber-600 shadow-md py-4 px-6'>
                <div className='container mx-auto flex justify-between items-center'>
                    <Link href="/">
                    <span className='text-2xl font-bold text-white'>DineSmart</span>
                    </Link>

                    <div className='hidden md:flex space-x-6'>
                        <Link href="/" className='text-white hover:text-black'>Home</Link>
                        <Link href="/Component/About" className='text-white hover:text-black'>About</Link>
                        <Link href="/Component/LogIn" className='text-white hover:text-black'>Log In</Link>
                        <Link href="/Component/SignUp" className='text-white hover:text-black'>Sign Up</Link>
                        <Link href="/Component/Cart" className='text-white hover:text-black'>Cart</Link>
                    </div>

                    <button className='md:hidden' onClick={()=>setIsOpen(!isOpen)}>
                    {isOpen?<X className="w-6 h-6"/>:<Menu className="w-6 h-6"/>}
                    </button>

                </div>

                {isOpen && (
                    <div className='md:hidden mt-4 space-y-2 px-6'>
                    <Link href="/" className='block text-white hover:text-black'>Home</Link>
                    <Link href="/Component/About" className='block text-white hover:text-black'>About</Link>
                    <Link href="/Component/LogIn" className='block text-white hover:text-black'>Log In</Link>
                    <Link href="/Component/SignUp" className='block text-white hover:text-black'>Sign Up</Link>
                    <Link href="/Component/Cart" className='block text-white hover:text-black'>Cart</Link>
                </div>
                )}

            </nav>
        </div>
    );
};

export default Navbar;