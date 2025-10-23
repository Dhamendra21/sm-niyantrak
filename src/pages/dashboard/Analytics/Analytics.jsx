import React from 'react';

const Analytics = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 min-h-full">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h1 className="text-2xl font-bold text-white mb-2">Analytics</h1>
          <p className="text-gray-400 mb-6">Detailed reports and performance analytics</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-green-400">85%</p>
              <p className="text-gray-400">Efficiency</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-blue-400">1,250L</p>
              <p className="text-gray-400">Water Used Today</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-3xl font-bold text-purple-400">2.4kW</p>
              <p className="text-gray-400">Power Consumption</p>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Weekly Report</h2>
            <p className="text-gray-400">Analytics charts and graphs will be displayed here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;