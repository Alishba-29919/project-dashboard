import React from 'react';
import { BiSearch, BiBell, BiChevronDown } from 'react-icons/bi';

export default function Navbar() {
  return (
    <div className="h-20 bg-[#0b0e14] border-b border-gray-800 flex items-center justify-between px-8 sticky top-0 z-50">
      {/* Search Bar - Professional & Clean */}
      <div className="relative w-1/3">
        <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
        <input 
          type="text" 
          placeholder="Search analytics, tasks..." 
          className="w-full bg-[#11141d] border border-gray-800 rounded-xl py-2 pl-10 pr-4 text-sm text-gray-300 focus:outline-none focus:border-orange-500 transition-all"
        />
      </div>

      {/* Profile & Notifications */}
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer p-2 hover:bg-gray-800 rounded-full transition-all">
          <BiBell className="text-gray-400 text-xl" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-[#0b0e14]"></span>
        </div>
        
        <div className="flex items-center gap-3 border-l border-gray-800 pl-6 cursor-pointer group">
          <div className="text-right">
            <p className="text-sm font-bold text-white group-hover:text-orange-500 transition-all">Alishba Abbas</p>
            <p className="text-[10px] text-gray-500 font-semibold uppercase">Admin Mode</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-yellow-400 flex items-center justify-center font-bold text-white shadow-lg">
            <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alishba" 
                  alt="Avatar" 
                  className="w-full h-full rounded-full bg-[#11141d] object-cover"
                />
          </div>
          <BiChevronDown className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}