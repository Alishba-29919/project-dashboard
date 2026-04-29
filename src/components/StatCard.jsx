import React from 'react';
import { BiTrendingUp } from 'react-icons/bi';

// We pass props (title, value, growth, icon) to make it reusable
export default function StatCard({ title, value, growth, icon, desc }) {
  return (
    <div className="bg-[#11141d] border border-gray-800 p-6 rounded-3xl hover:border-orange-500/50 transition-all group">
      <div className="flex justify-between items-start mb-4">
        {/* Icon with a nice background */}
        <div className="p-3 bg-gray-900 rounded-2xl group-hover:bg-orange-500/10 transition-all text-xl">
          {icon}
        </div>
        {/* Growth Badge */}
        <span className="bg-orange-500/10 text-orange-500 text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
          <BiTrendingUp /> {growth}
        </span>
      </div>
      
      <div>
        <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{title}</h3>
        <h2 className="text-3xl font-black text-white">{value}</h2>
        <p className="text-[10px] text-gray-600 mt-4 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}