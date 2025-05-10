'use client';

import useSWR from 'swr';
import { toast } from 'sonner';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

export default function TableListPage() {
  const { data, error, isLoading } = useSWR(
    'http://13.250.1.8:8000/api/order/table-list/',
    fetcher
  );

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error) {
    toast.error('Failed to load tables');
    return <div className="text-center mt-10 text-red-500">Failed to load</div>;
  }

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'booked':
        return 'bg-red-100 text-red-800';
      case 'cleaning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Header Section */}
      <h1 className="text-3xl font-bold mb-2">DineSmart</h1>
      <h2 className="text-xl font-semibold mb-1">Order Type: Dine In</h2>
      <h3 className="text-lg font-medium mb-6">Choose Your Table</h3>

      {/* Table List */}
      <div className="space-y-4">
        {data.data.map((table) => {
          let status = 'Available';
          if (table.booked_seats >= table.total_seats) status = 'Booked';
          if (table.available_seats === 0 && table.booked_seats < table.total_seats) status = 'Cleaning';

          return (
            <div
              key={table.table_id}
              className={`border rounded-lg p-4 ${status === 'Available' ? 'hover:bg-green-50 cursor-pointer' : 'opacity-70 cursor-not-allowed'}`}
            >
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold">Table {table.table_number}</h2>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyle(status)}`}>
                  {status}
                </span>
              </div>
              <p className="text-gray-600 mt-1">Seats: {table.total_seats}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}