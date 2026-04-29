import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Direct Logic: Click hote hi login kar do
    setIsLoggedIn(true); 
    navigate('/'); // Login hote hi home page par le jao
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] flex items-center justify-center p-6 text-white">
      <form onSubmit={handleLogin} className="bg-[#11141d] p-10 rounded-[30px] border border-gray-800 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Dashboard</h2>
        
        <input 
          type="email" 
          placeholder="Enter email" 
          className="w-full bg-[#0b0e14] border border-gray-800 p-4 rounded-xl mb-4 outline-none focus:border-orange-500"
          required 
        />
        
        <input 
          type="password" 
          placeholder="Enter password" 
          className="w-full bg-[#0b0e14] border border-gray-800 p-4 rounded-xl mb-6 outline-none focus:border-orange-500"
          required 
        />

        <button type="submit" className="w-full bg-orange-500 p-4 rounded-xl font-bold hover:bg-orange-600">
          Sign In
        </button>
      </form>
    </div>
  );
}