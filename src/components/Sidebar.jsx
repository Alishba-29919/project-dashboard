import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiGridAlt, BiUser, BiCartAlt, BiCog, BiLogOut, BiQuestionMark } from 'react-icons/bi';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: <BiGridAlt /> },
    { path: '/orders', label: 'Orders', icon: <BiCartAlt /> },
    { path: '/products', label: 'Products', icon: <BiGridAlt /> }, 
    {path: '/tasks', label: 'Tasks', icon: <BiGridAlt /> },
    { path: '/settings', label: 'Settings', icon: <BiCog /> },
    { path: '/profile', label: 'Profile', icon: <BiUser /> },
    ];

  return (
    <aside className="w-64 bg-[#11141d] h-screen p-6 border-r border-gray-800 flex flex-col fixed left-0 top-0 z-50">
      {/* 1. TOP: Logo */}
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
          <span className="text-white font-bold">A</span>
        </div>
        <span className="text-xl font-bold text-white tracking-tighter">ALISHBA</span>
      </div>

      {/* 2. MIDDLE: Navigation Links */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
              location.pathname === item.path 
              ? 'bg-orange-500 text-white shadow-lg' 
              : 'text-gray-500 hover:bg-gray-800 hover:text-gray-300'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* 3. BOTTOM: New Content Section (Extra Box) */}
      <div className="mt-auto space-y-6">
        {/* Help/Upgrade Box (Inspired by Image 2) */}
        <div className="bg-gradient-to-br from-orange-600/20 to-orange-400/5 p-4 rounded-2xl border border-orange-500/20 text-center">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto -mt-8 border-4 border-[#11141d]">
             <BiQuestionMark className="text-white" />
          </div>
          <p className="text-white text-xs font-bold mt-2">Need Help?</p>
          <p className="text-[10px] text-gray-500 mb-3">Check our documentation for more details.</p>
          <button className="bg-orange-500 text-white text-[10px] font-bold py-2 px-4 rounded-lg w-full hover:bg-orange-600 transition-all">
            Get Support
          </button>
        </div>

        {/* Logout Link */}
        <div className="pt-4 border-t border-gray-800">
          <button className="flex items-center gap-4 px-4 py-2 text-gray-500 hover:text-red-400 transition-all w-full">
            <BiLogOut size={20}/>
            <span className="text-sm font-bold uppercase tracking-widest">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}