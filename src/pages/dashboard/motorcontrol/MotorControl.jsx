import React from 'react';

const MotorControl = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 min-h-full">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h1 className="text-2xl font-bold text-white mb-2">Motor Control</h1>
          <p className="text-gray-400 mb-6">Direct control and monitoring of your motor</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Control Panel */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Quick Controls</h2>
              <div className="space-y-4">
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Start Motor
                </button>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Stop Motor
                </button>
              </div>
            </div>
            
            {/* Status Panel */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Current Status</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Motor Status</span>
                  <span className="text-green-400 font-semibold">RUNNING</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Voltage</span>
                  <span className="text-white font-semibold">415V</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current</span>
                  <span className="text-white font-semibold">10.2A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorControl;