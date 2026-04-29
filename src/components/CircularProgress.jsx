import React from 'react';

export default function CircularProgress({ percentage = 80 }) {
  // Formula for SVG circle progress
  const strokeDasharray = 502;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

  return (
    <div className="bg-[#11141d] border border-gray-800 rounded-3xl p-8 flex flex-col items-center justify-between h-full">
      <h3 className="text-xl font-bold text-white w-full text-left">Target Analysis</h3>
      
      <div className="relative w-48 h-48 flex items-center justify-center my-6">
        <svg className="w-full h-full transform -rotate-90">
          {/* Gray Background Circle */}
          <circle cx="96" cy="96" r="80" stroke="#1f2937" strokeWidth="12" fill="transparent" />
          {/* Orange Progress Circle */}
          <circle 
            cx="96" cy="96" r="80" 
            stroke="#f97316" 
            strokeWidth="12" 
            fill="transparent" 
            strokeDasharray={strokeDasharray} 
            strokeDashoffset={strokeDashoffset} 
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute text-center">
          <span className="text-4xl font-black text-white">{percentage}%</span>
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Growth</p>
        </div>
      </div>

      <div className="w-full space-y-4">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Target Reached</span>
          <span className="text-white font-bold">80%</span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div style={{ width: `${percentage}%` }} className="h-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
        </div>
      </div>
    </div>
  );
}