import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-[#0b0e14]">
      {/* Sidebar fix rahega */}
      <Sidebar />
      
      {/* Right side wala area */}
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar />
        
        {/* Main Content: Jahan saare pages Outlet ki madad se load honge */}
        <main className="p-8 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}