import React from 'react';




const page = () => {
<<<<<<< HEAD:src/app/Cart/page.jsx
    return (
        <div>
            <h2>Cart Page</h2>
            
        </div>
    );
=======
  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4">
      {/* Heading OUTSIDE the box */}
      <h2 className="text-3xl font-bold text-black mt-12 mb-8">
        Log In / Sign Up
      </h2>

      {/* Form shifted lower */}
      <div className="mt-4 w-full max-w-md border-2 border-[#f3492a] rounded-xl p-8 shadow-lg text-center">
        <form className="space-y-5">
          <div className="text-left">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue="zeeglyismail@gmail.com"
              className="w-full mt-1 px-4 py-2 border-2 border-[#f3492a] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#f3492a]"
              required
            />
          </div>
          <div className="text-left">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-black mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="pasword123"
              className="w-full mt-1 px-4 py-2 border-2 border-[#f3492a] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#f3492a]"
              required
            />
          </div>
          <button
            type="submit"
            className=" bg-white border-2 border-[#f3492a] text-black px-6 py-2 rounded-full shadow-md hover:bg-[#f3492a] hover:text-white transition-all"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-sm text-black">
          Not an user?{' '}
          <a href="#" className="text-[#f3492a] hover:underline font-semibold">
            Sign Up
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-16 w-full">
        <Footer />
      </div>
    </div>
  );
>>>>>>> 9ece85e5bed6ef5f03eca96ce436fcaa8dce548f:src/app/Component/LogIn/page.jsx
};

export default page;
