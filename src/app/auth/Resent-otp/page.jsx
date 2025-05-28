'use client';

import { useState } from 'react';

export default function ResendOtpPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch('http://13.215.203.33:8000/api/auth/otp-resend/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('✅ OTP resent successfully. Check your email.');
    } else {
      setMessage(data.message || '❌ Failed to resend OTP.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4">
      <h2 className="text-2xl font-bold text-black mt-12 mb-8">Resend OTP</h2>

      <div className="w-full max-w-md border-2 border-[#f26645] rounded-xl p-8 shadow-lg text-center">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="text-left">
            <label htmlFor="email" className="block text-lg font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border-2 border-[#f26645] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f26645]"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-white border-2 border-[#f26645] font-bold text-black px-6 py-2 rounded-full shadow-md hover:bg-[#f26645] hover:text-white transition-all"
          >
            Resend OTP
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm font-semibold text-green-600">{message}</p>
        )}
      </div>
    </div>
  );
}
