import React from 'react';
import { BiEditAlt, BiEnvelope, BiPhone, BiMap, BiLinkExternal } from 'react-icons/bi';

export default function Profile() {
  return (
    <div className="p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 overflow-x-hidden">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">User Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* LEFT COLUMN: Profile Header Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#11141d] border border-gray-800 rounded-3xl p-6 md:p-8 text-center relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl group-hover:bg-orange-400/20 transition-all"></div>
            
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-full mx-auto p-1 shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alishba" 
                  alt="Avatar" 
                  className="w-full h-full rounded-full bg-[#11141d] object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-1/2 translate-x-12 md:translate-x-16 bg-orange-400 p-2 rounded-full text-black shadow-lg hover:scale-110 transition-all">
                <BiEditAlt size={16} />
              </button>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-white mt-6">Alishba Abbas</h2>
            <p className="text-orange-400 font-bold text-xs uppercase tracking-widest">Admin Mode</p>
            
            <div className="mt-8 pt-8 border-t border-gray-800 flex justify-between gap-2">
              <div className="flex-1">
                <p className="text-white font-bold text-base md:text-lg">12</p>
                <p className="text-gray-500 text-[9px] md:text-[10px] uppercase font-bold">Projects</p>
              </div>
              <div className="flex-1 border-x border-gray-800">
                <p className="text-white font-bold text-base md:text-lg">450</p>
                <p className="text-gray-500 text-[9px] md:text-[10px] uppercase font-bold">Orders</p>
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-base md:text-lg">1.2k</p>
                <p className="text-gray-500 text-[9px] md:text-[10px] uppercase font-bold">Followers</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Details Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#11141d] border border-gray-800 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-white">Personal Information</h3>
              <button className="text-orange-400 text-sm font-bold flex items-center gap-2 hover:underline">
                Edit Details <BiEditAlt />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <InfoItem icon={<BiEnvelope />} label="Email Address" value="alishbaaa29@gmail.com" />
              <InfoItem icon={<BiPhone />} label="Phone Number" value="+92329 725 2905" />
              <InfoItem icon={<BiMap />} label="Location" value="Bahawalpur, Punjab, Pakistan" />
              <InfoItem icon={<BiLinkExternal />} label="Portfolio" value={
                <a href='https://alishba-abbas-personal-portfolio.netlify.app/' target='_blank' rel='noopener noreferrer' className='text-orange-400 hover:underline break-all'>View Portfolio</a>
              } />
            </div>

            <div className="mt-10">
              <h4 className="text-white text-[10px] uppercase font-bold mb-4 tracking-widest">Bio</h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
               I am a "Frontend & React Developer". While I love 
               crafting pixel-perfect designs with Tailwind CSS & CSS, I am currently expanding 
               my horizon by "learning the MERN stack" to become a full-stack professional. 
               I enjoy solving complex layout challenges.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 min-w-0">
      <div className="p-3 bg-gray-900 rounded-xl text-orange-400 text-xl shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{label}</p>
        <p className="text-white font-medium break-words text-sm md:text-base">{value}</p>
      </div>
    </div>
  );
}