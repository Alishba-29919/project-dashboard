import React from 'react';
// Importing our custom components
import StatCard from '../components/StatCard';
import BarGraph from '../components/BarGraph';
import CircularProgress from '../components/CircularProgress';
// Icons for the cards
import { BiWallet, BiPackage, BiTrendingUp, BiUserVoice } from 'react-icons/bi';

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      
      {/* 1. TOP SECTION: Welcome Text */}
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Project Dashboard</h1>
        <p className="text-gray-500 mt-1 italic">Hello Alishba, welcome back to your admin panel.</p>
      </div>

      {/* 2. STATS SECTION: 4 Responsive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Earnings" 
          value="$6,078" 
          growth="+48%" 
          icon={<BiWallet className="text-green-400" />} 
          desc="Based on last 30 days"
        />
        <StatCard 
          title="Total Orders" 
          value="500" 
          growth="+12%" 
          icon={<BiPackage className="text-blue-400" />} 
          desc="8% increase from last week"
        />
        <StatCard 
          title="Product Sold" 
          value="1,240" 
          growth="+5%" 
          icon={<BiTrendingUp className="text-orange-400" />} 
          desc="Top seller: Tech Gadgets"
        />
        <StatCard 
          title="New Users" 
          value="45" 
          growth="+18%" 
          icon={<BiUserVoice className="text-purple-400" />} 
          desc="Active users right now"
        />
      </div>

      {/* 3. GRAPHS SECTION: Grid of 3 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Visitor Insights (Takes 2 columns) */}
        <div className="lg:col-span-2">
          <BarGraph />
        </div>

        {/* Target Analysis (Takes 1 column) */}
        <div className="lg:col-span-1">
          <CircularProgress percentage={75} />
        </div>

      </div>

      {/* 4. OPTIONAL: Bottom Row for Recent Activities or Tables */}
      <div className="bg-[#11141d] border border-gray-800 p-6 rounded-3xl">
        <h3 className="text-white font-bold mb-4">Quick Tip</h3>
        <p className="text-gray-500 text-sm">
          You can click on each graph bar to see detailed daily analytics. All data is updated in real-time.
        </p>
      </div>

    </div>
  );
}