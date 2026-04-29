export default function Profile() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-6">User Profile</h1>
      <div className="bg-[#11141d] p-10 rounded-3xl border border-gray-800">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-4xl font-bold">A</div>
          <div>
            <h2 className="text-2xl font-semibold text-white">Alishba Abbas</h2>
            <p className="text-gray-500 font-medium">Front-end Developer & Designer</p>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <p className="text-gray-400">Account Details and Settings will appear here.</p>
      </div>
    </div>
  );
}