import React, { useState, useEffect } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Recent Orders</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-orange-500/20">
          Download Report
        </button>
      </div>

      <div className="bg-[#11141d] border border-gray-800 rounded-3xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#1a1f2b] text-gray-400 text-xs uppercase tracking-widest">
            <tr>
              <th className="p-6">Product ID</th>
              <th className="p-6">Customer Name</th>
              <th className="p-6">Amount</th>
              <th className="p-6">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-300">
            {orders.map((order, index) => (
              <tr key={order.id} className="border-t border-gray-800 hover:bg-[#161a25] transition-all">
                <td className="p-6 font-bold text-orange-500">#{1000 + order.id}</td>
                <td className="p-6">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-[10px]">US</div>
                      <span>User_{index + 1}</span>
                   </div>
                </td>
                <td className="p-6 text-white font-semibold">${order.price}</td>
                <td className="p-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    index % 2 === 0 ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'
                  }`}>
                    {index % 2 === 0 ? 'Delivered' : 'Processing'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}