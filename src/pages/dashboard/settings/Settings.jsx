import React from 'react';

const Settings = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 min-h-full">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400 mb-6">Configure device and system preferences</p>
          
          <div className="space-y-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-white mb-3">Device Settings</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">GSM Mode</span>
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">Enabled</button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">WiFi Mode</span>
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">Enabled</button>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-white mb-3">Notification Settings</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">SMS Alerts</span>
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">On</button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Email Notifications</span>
                  <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm">Off</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;