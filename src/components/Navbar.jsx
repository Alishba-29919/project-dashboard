import React from 'react';
import { BiSearch, BiBell, BiUser } from 'react-icons/bi';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 w-full bg-[#11141d]/80 backdrop-blur-md border-b border-gray-800 p-4">
      <div className="flex items-center justify-between gap-4 max-w-full">
        
        {/* 1. SEARCH BAR (Mobile par width adjust ho rahi hai) */}
        <div className="flex-1 max-w-[150px] sm:max-w-xs md:max-w-md relative ml-12 md:ml-0">
          <input 
            type="text" 
            placeholder="Search analytics..." 
            className="w-full bg-[#1b1f29] text-gray-300 p-2.5 pl-10 rounded-2xl text-sm outline-none border border-transparent focus:border-orange-500/50 transition-all"
          />
          <BiSearch className="absolute left-3 top-3 text-gray-500" size={18} />
        </div>

        {/* 2. RIGHT SIDE: Notifications & Profile */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Notification Icon (Mobile par chupa sakte hain) */}
          <button className="relative p-2 text-gray-400 hover:text-orange-500 transition-colors hidden sm:block">
            <BiBell size={24} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-[#11141d]"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 border-l border-gray-800 pl-4 md:pl-6">
            <div className="text-right hidden lg:block">
              <p className="text-white text-sm font-bold leading-none">Alishba Abbas</p>
              <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mt-1">Admin Mode</p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-500 to-yellow-400 p-[2px]">
              <div className="w-full h-full bg-[#1b1f29] rounded-[14px] flex items-center justify-center overflow-hidden">
                {/* Agar image nahi hai to icon dikhayega */}
                <BiUser className="text-gray-400" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}