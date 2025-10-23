import React, { useState } from 'react';

const DashboardControl = () => {
  const [motorStatus, setMotorStatus] = useState(true);
  const [selectedMode, setSelectedMode] = useState('auto');

  const controlModes = [
    { id: 'auto', name: 'Auto', icon: '🤖', description: 'Smart automation' },
    { id: 'manual', name: 'Manual', icon: '👋', description: 'Direct control' },
    { id: 'schedule', name: 'Schedule', icon: '⏰', description: 'Time-based' },
  ];

  const handleMotorToggle = () => {
    setMotorStatus(!motorStatus);
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6 h-full">
      <h2 className="text-lg font-semibold text-white mb-4">Motor Control</h2>
      
      {/* Motor Status Card */}
      <div className="bg-gray-700 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Current Status</p>
            <p className={`text-xl font-bold ${motorStatus ? 'text-green-400' : 'text-red-400'}`}>
              {motorStatus ? 'RUNNING' : 'STOPPED'}
            </p>
          </div>
          <button
            onClick={handleMotorToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              motorStatus ? 'bg-green-500' : 'bg-gray-600'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                motorStatus ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Control Modes */}
      <div className="space-y-4">
        <h3 className="font-medium text-white">Control Mode</h3>
        {controlModes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setSelectedMode(mode.id)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
              selectedMode === mode.id
                ? 'border-green-500 bg-green-900/20'
                : 'border-gray-600 hover:bg-gray-700'
            }`}
          >
            <span className="text-2xl">{mode.icon}</span>
            <div className="text-left">
              <p className="font-medium text-white">{mode.name}</p>
              <p className="text-sm text-gray-400">{mode.description}</p>
            </div>
            {selectedMode === mode.id && (
              <span className="ml-auto text-green-400">✓</span>
            )}
          </button>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-gray-700">
        <h3 className="font-medium text-white mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-blue-900/30 text-blue-400 py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-900/50 transition-colors border border-blue-800">
            Start Now
          </button>
          <button className="bg-orange-900/30 text-orange-400 py-2 px-3 rounded-lg text-sm font-medium hover:bg-orange-900/50 transition-colors border border-orange-800">
            Stop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardControl;