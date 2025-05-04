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

    const res = await fetch('http://13.250.1.8:8000/api/auth/customer-activation/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('✅ Activation successful. You can now log in.');
    } else {
      setMessage(data.message || '❌ Activation failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Activate Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded" />
        <input type="text" name="otp" placeholder="OTP" onChange={handleChange} required className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Activate</button>
      </form>
      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      <p className="text-sm mt-4 text-center">
        Didn't get the OTP?{' '}
        <a href="/auth/Resent-otp" className="text-blue-600 underline">
          Resend OTP
        </a>
      </p>
    </div>
  );
}
