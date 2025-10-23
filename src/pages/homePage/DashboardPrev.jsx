import React from 'react';

const Dashboard = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <article className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold">Your Farm's Command Center</h2>
          <p className="mt-4 text-white/70 mb-8">
            An intuitive, clean dashboard that gives you complete control. Monitor every critical parameter in real-time, from motor status to network strength, all in one place.
          </p>
        </article>

        <div className="p-4 md:p-6 bg-gray-900/50 border border-white/10 rounded-2xl shadow-2xl shadow-black/30">
          <header className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Live IoT Dashboard</h3>
            <div className="flex items-center space-x-2 text-sm text-[#10B981]">
              <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
              <span>Online</span>
            </div>
          </header>

          <div className="bg-gray-800/50 rounded-lg p-6 flex justify-between items-center mb-4">
            <span className="font-bold text-xl">Motor Status</span>
            <div className="flex items-center space-x-4">
              <span className="font-bold text-[#10B981]">ON</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-14 h-7 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A86B]"></div>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-sm text-white/60 mb-1">Voltage</p>
              <p className="text-2xl font-bold text-[#3ABEF9]">415V</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-sm text-white/60 mb-1">Current</p>
              <p className="text-2xl font-bold text-[#3ABEF9]">10.2A</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-sm text-white/60 mb-1">Network</p>
              <p className="text-2xl font-bold text-[#3ABEF9]">85%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;