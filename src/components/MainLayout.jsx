import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Ye icons install kar lena: npm install react-icons

export default function MainLayout({ setIsLoggedIn }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#0b0e14] relative overflow-x-hidden">
      
      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-5 left-4 z-[100] p-2 bg-orange-500 text-white rounded-xl shadow-lg hover:bg-orange-600 transition-all"
      >
        {isSidebarOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>

      {/* --- SIDEBAR --- */}
      {/* Mobile par ye slide ho kar aayega, Desktop par fixed rahega */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 transform bg-[#11141d] transition-transform duration-300 ease-in-out border-r border-gray-800
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block
      `}>
        <Sidebar setIsLoggedIn={setIsLoggedIn} closeMobileMenu={() => setIsSidebarOpen(false)} />
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Navbar ko toggle function pass kar rahe hain agar wahan bhi button chahiye ho */}
        <Navbar />
        
        <main className="p-4 md:p-8">
          {/* Jahan saare pages load honge */}
          <Outlet />
        </main>
      </div>

      {/* --- OVERLAY (Sirf mobile par jab sidebar khule) --- */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}