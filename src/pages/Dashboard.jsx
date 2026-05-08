import React from 'react';
import StatCard from '../components/StatCard';
import BarGraph from '../components/BarGraph';
import CircularProgress from '../components/CircularProgress';
import { BiWallet, BiPackage, BiTrendingUp, BiUserVoice } from 'react-icons/bi';

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 space-y-6 md:space-y-8 animate-in fade-in duration-500 overflow-x-hidden">
      
      {/* 1. TOP SECTION */}
      <div className="ml-10 md:ml-0"> {/* Mobile menu button ki jagah chori hai */}
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Project Dashboard</h1>
        <p className="text-gray-500 mt-1 italic text-xs md:text-sm">Hello, welcome back to your admin panel.</p>
      </div>

      {/* 2. STATS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard title="Total Earnings" value="$6,078" growth="+48%" icon={<BiWallet className="text-green-400" />} desc="Last 30 days" />
        <StatCard title="Total Orders" value="500" growth="+12%" icon={<BiPackage className="text-blue-400" />} desc="8% increase" />
        <StatCard title="Product Sold" value="1,240" growth="+5%" icon={<BiTrendingUp className="text-orange-400" />} desc="Top seller" />
        <StatCard title="New Users" value="45" growth="+18%" icon={<BiUserVoice className="text-purple-400" />} desc="Active now" />
      </div>

      {/* 3. GRAPHS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Visitor Insights - ISMEIN SCROLL ADD KIYA HAI */}
        <div className="lg:col-span-2 bg-[#11141d] border border-gray-800 rounded-3xl p-4 md:p-6 overflow-hidden">
          <h3 className="text-white font-bold mb-4 text-sm md:text-base">Visitor Insights</h3>
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[500px] md:min-w-full h-[300px]">
               <BarGraph />
            </div>
          </div>
        </div>

        {/* Target Analysis */}
        <div className="lg:col-span-1 bg-[#11141d] border border-gray-800 rounded-3xl p-6 flex flex-col items-center justify-center">
          <CircularProgress percentage={75} />
        </div>

      </div>

      {/* 4. Quick Tip */}
      <div className="bg-[#11141d] border border-gray-800 p-6 rounded-3xl">
        <h3 className="text-white font-bold mb-2 text-sm">Quick Tip</h3>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
          You can click on each graph bar to see detailed daily analytics. All data is updated in real-time.
        </p>
      </div>

    </div>
  );
}