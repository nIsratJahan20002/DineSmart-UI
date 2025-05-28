'use client';

import { useState } from 'react';

export default function ActivatePage() {
  const [formData, setFormData] = useState({ email: '', otp: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch(
      'http://13.215.203.33:8000/api/auth/customer-activation/',
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (res.ok) {
      setMessage('✅ Activation successful. You can now log in.');
    } else {
      setMessage(data.message || '❌ Activation failed.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4">
      <h2 className="text-2xl font-bold text-black mt-12 mb-8">
        Activate Account
      </h2>

      <div className="w-full max-w-md border-2 border-[#f26645] rounded-xl p-8 shadow-lg text-center">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="text-left">
            <label htmlFor="email" className="block text-lg font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-[#f26645] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f26645]"
            />
          </div>

          <div className="text-left">
            <label htmlFor="otp" className="block text-lg font-bold mb-1">
              OTP
            </label>
            <input
              type="text"
              name="otp"
              id="otp"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-[#f26645] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f26645]"
            />
          </div>

          <button
            type="submit"
            className="bg-white border-2 border-[#f26645] font-bold text-black px-6 py-2 rounded-full shadow-md hover:bg-[#f26645] hover:text-white transition-all"
          >
            Activate
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm font-semibold text-green-600">{message}</p>
        )}

        <p className="mt-6 text-sm text-black">
          Didn't get the OTP?{' '}
          <a
            href="/auth/Resent-otp"
            className="text-[#f26645] hover:underline font-semibold"
          >
            Resend OTP
          </a>
        </p>
      </div>
    </div>
  );
}
