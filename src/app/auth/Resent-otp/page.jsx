'use client';
import { useState } from 'react';

export default function ResendOtpPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch('http://13.250.1.8:8000/api/auth/otp-resend/', {
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
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Resend OTP</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">Resend OTP</button>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
}
