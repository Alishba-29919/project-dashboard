import React from 'react';

export default function BarGraph() {
  // Mock data for the bars
  const data = [30, 45, 35, 60, 55, 80, 70, 95, 65, 50, 40, 85];

  return (
    <div className="bg-[#11141d] border border-gray-800 rounded-3xl p-8 h-full">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-xl font-bold text-white">Visitor Insights</h3>
        <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <span className="text-orange-500 border-b-2 border-orange-500">New</span>
          <span>Returning</span>
        </div>
      </div>

      {/* The Actual Graph Area */}
      <div className="h-64 w-full flex items-end justify-between gap-2 border-b border-gray-800 pb-2">
        {data.map((val, i) => (
          <div key={i} className="flex-1 group relative">
            {/* Tooltip on Hover */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
              {val}k
            </div>
            {/* The Bar */}
            <div 
              style={{ height: `${val}%` }} 
              className="w-full bg-gradient-to-t from-orange-600/20 to-orange-500 rounded-t-lg transition-all duration-500 group-hover:brightness-125"
            ></div>
          </div>
        ))}
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-4 text-[10px] text-gray-600 font-bold uppercase">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </div>
  );
}