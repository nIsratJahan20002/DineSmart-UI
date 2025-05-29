'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone_number: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch(
      'http://13.215.203.33:8000/api/auth/customer-registration/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (res.ok) {
      setMessage(
        '✅ Registration successful. Please check your email for OTP.'
      );
      setTimeout(() => {
        router.push('/auth/Activate');
      }, 1500);
    } else {
      setMessage(data.message || '❌ Registration failed.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-black mt-12 mb-8">
        Log In / Sign up
      </h2>

      {/* Registration Form */}
      <div className="w-full max-w-md border-2 border-[#f26645] rounded-xl p-8 shadow-lg text-center">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="text-left">
            <label htmlFor="name" className="block text-lg font-bold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#f26645] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f26645]"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="email" className="block text-lg font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#f26645] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f26645]"
              required
            />
          </div>

          <div className="text-left">
            <label
              htmlFor="phone_number"
              className="block text-lg font-bold mb-1"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#f26645] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f26645]"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="password" className="block text-lg font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#f26645] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f26645]"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-white border-2 border-[#f26645] font-bold text-black px-6 py-2 rounded-full shadow-md hover:bg-[#f26645] hover:text-white transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="mt-4 text-sm font-semibold text-center text-green-600">
            {message}
          </p>
        )}

        <p className="mt-6 text-sm text-black">
          Already a user?{' '}
          <a
            href="/auth/Login"
            className="text-[#f26645] hover:underline font-bold"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
