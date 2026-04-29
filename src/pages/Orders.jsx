import React from 'react';

export default function Orders() {
  const tableData = [
    { id: '#1481', product: 'Home Decor Range', status: 'Completed', amount: '$5,000' },
    { id: '#1482', product: 'Disney Princess Dress', status: 'Pending', amount: '$1,200' },
    { id: '#1483', product: 'Apple Smartwatch', status: 'Cancelled', amount: '$850' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8 italic">Product Orders</h1>
      <div className="bg-[#11141d] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-[#1a1f2b] text-gray-400 text-xs uppercase tracking-widest">
            <tr>
              <th className="p-6">Order ID</th>
              <th className="p-6">Product Name</th>
              <th className="p-6">Amount</th>
              <th className="p-6">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-300">
            {tableData.map((order) => (
              <tr key={order.id} className="border-t border-gray-800 hover:bg-[#161a25] transition-all">
                <td className="p-6 font-bold text-orange-500">{order.id}</td>
                <td className="p-6">{order.product}</td>
                <td className="p-6 text-white font-semibold">{order.amount}</td>
                <td className="p-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    order.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 
                    order.status === 'Pending' ? 'bg-orange-500/10 text-orange-500' : 'bg-red-500/10 text-red-500'
                  }`}>
                    {order.status}
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