import React, { useState, useEffect } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10 text-white animate-pulse text-2xl font-bold">Loading Products...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Store Inventory</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-[#11141d] border border-gray-800 rounded-2xl p-4 hover:border-orange-500 transition-all group">
            <div className="h-48 bg-white rounded-xl mb-4 overflow-hidden p-4">
              <img src={item.image} alt={item.title} className="w-full h-full object-contain group-hover:scale-110 transition-all" />
            </div>
            <h3 className="text-white font-bold text-sm truncate">{item.title}</h3>
            <div className="flex justify-between items-center mt-3">
              <span className="text-orange-500 font-black">${item.price}</span>
              <span className="text-[10px] text-gray-500 uppercase font-bold bg-gray-800 px-2 py-1 rounded">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}