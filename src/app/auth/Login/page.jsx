'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(
        'http://13.215.203.33:8000/api/auth/customer-login/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        if (data?.inactive_user) {
          router.push('/auth/activate');
        } else {
          setMessage(data.message || '❌ Login failed.');
        }
      } else {
        setMessage('✅ Login successful!');
        setTimeout(() => {
          router.push('/order/type-list');
        }, 1500);
      }
    } catch (err) {
      setMessage('❌ Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4">
      <h2 className="text-2xl font-bold text-black mt-12 mb-8">
        Login / Sign Up
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
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-[#f26645] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f26645]"
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
              required
              className="w-full px-4 py-2 border-2 border-[#f26645] rounded-md focus:outline-none focus:ring-1 focus:ring-[#f26645]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-white border-2 border-[#f26645] font-bold text-black px-6 py-2 rounded-full shadow-md hover:bg-[#f26645] hover:text-white transition-all"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm font-semibold text-green-600">{message}</p>
        )}

        <p className="mt-6 text-sm text-black">
          Not an user?{' '}
          <a
            href="/auth/Register"
            className="text-[#f26645] hover:underline font-semibold"
          >
          Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
