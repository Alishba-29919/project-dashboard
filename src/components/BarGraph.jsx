import React from 'react';

export default function BarGraph() {
  // Mock data: Heights in percentage
  const data = [40, 65, 45, 90, 70, 85, 40, 95, 60, 50, 75, 80];

  return (
    <div className="bg-[#11141d] border border-gray-800 rounded-3xl p-6 h-full flex flex-col min-h-[400px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">Visitor Insights</h3>
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Monthly Analytics</p>
        </div>
        <div className="flex gap-3 text-[10px] font-bold">
          <span className="text-orange-400 border-b-2 border-orange-400 pb-1">New</span>
          <span className="text-gray-600 hover:text-gray-400 cursor-pointer transition-colors">Returning</span>
        </div>
      </div>

      {/* Graph Area - Yahan 'flex-1' aur 'h-full' boht zaroori hai */}
      <div className="flex-1 w-full flex items-end justify-between gap-2 border-b border-gray-800/50 pb-4 relative">
        {data.map((val, i) => (
          <div key={i} className="flex-1 group relative h-full flex items-end">
            {/* Tooltip on Hover */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange-400 text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              {val}%
            </div>
            
            {/* The Bar - Using Cyber Lime Theme */}
            <div 
              style={{ height: `${val}%` }} 
              className="w-full bg-gradient-to-t from-lime-400/10 to-orange-500 rounded-t-md transition-all duration-700 ease-out group-hover:brightness-125 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]"
            ></div>
          </div>
        ))}
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-between mt-4 text-[10px] text-gray-600 font-black uppercase tracking-tighter">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
          <span key={month} className="flex-1 text-center">{month}</span>
        ))}
      </div>
    </div>
  );
}