import React from 'react';
import Footer from '@/app/Component2/Footer/page';

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4">
      {/* Heading outside the box */}
      <h2 className="text-2xl font-bold text-black mt-12 mb-8">
        Log In / Sign Up
      </h2>

      {/* Sign Up Form */}
      <div className="w-full max-w-md border-2 border-[#f3492a] rounded-xl p-8 shadow-lg text-center">
        <form className="space-y-5">
          <div className="text-left">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue="zeeglyismail@gmail.com"
              className="w-full px-4 py-2 border-2 border-[#f3492a] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f3492a]"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue="MD. ISMAIL HOSSAIN"
              className="w-full px-4 py-2 border-2 border-[#f3492a] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f3492a]"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="phone" className="block text-sm font-semibold mb-1">
              Phone No
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue="+8801580381235"
              className="w-full px-4 py-2 border-2 border-[#f3492a] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f3492a]"
              required
            />
          </div>

          <div className="text-left">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="pasword123"
              className="w-full px-4 py-2 border-2 border-[#f3492a] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f3492a]"
              required
            />
          </div>

          <button
            type="submit"
            className=" bg-white border-2 border-[#f3492a] text-black px-6 py-2 rounded-full shadow-md hover:bg-[#f3492a] hover:text-white transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-black">
          Already a user?{' '}
          <a href="#" className="text-[#f3492a] hover:underline font-semibold">
            Sign In
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-16 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default page;
