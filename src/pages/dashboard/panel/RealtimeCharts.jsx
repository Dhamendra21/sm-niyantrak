import React from 'react';

const RealTimeCharts = () => {
  const voltageData = [410, 415, 412, 418, 415, 420, 415];
  const currentData = [8.5, 9.2, 10.1, 9.8, 10.5, 9.9, 10.2];
  const timeLabels = ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30'];

  return (
    <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
      <h2 className="text-lg font-semibold text-white mb-6">Real-time Monitoring</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Voltage Chart */}
        <div>
          <h3 className="font-medium text-white mb-4">Voltage (V)</h3>
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-end justify-between h-32">
              {voltageData.map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-6 bg-gradient-to-t from-green-500 to-green-600 rounded-t-lg transition-all duration-300"
                    style={{ height: `${(value - 400) * 2}px` }}
                  ></div>
                  <span className="text-xs text-gray-400 mt-1">{timeLabels[index]}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl font-bold text-white">{voltageData[voltageData.length - 1]}V</span>
              <span className="text-sm text-green-400 bg-green-900/30 px-2 py-1 rounded-full border border-green-800">Stable</span>
            </div>
          </div>
        </div>

        {/* Current Chart */}
        <div>
          <h3 className="font-medium text-white mb-4">Current (A)</h3>
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-end justify-between h-32">
              {currentData.map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-6 bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-lg transition-all duration-300"
                    style={{ height: `${value * 8}px` }}
                  ></div>
                  <span className="text-xs text-gray-400 mt-1">{timeLabels[index]}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl font-bold text-white">{currentData[currentData.length - 1]}A</span>
              <span className="text-sm text-blue-400 bg-blue-900/30 px-2 py-1 rounded-full border border-blue-800">Normal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Phase Status */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {['R', 'Y', 'B'].map((phase) => (
          <div key={phase} className="text-center">
            <div className="bg-green-900/30 text-green-400 rounded-lg p-3 border border-green-800">
              <p className="text-sm font-medium">Phase {phase}</p>
              <p className="text-lg font-bold">240V</p>
              <p className="text-xs">Healthy</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeCharts;