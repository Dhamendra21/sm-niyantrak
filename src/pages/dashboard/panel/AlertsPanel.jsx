import React from 'react';

const AlertsPanel = () => {
  const alerts = [
    {
      type: 'warning',
      title: 'Low Water Pressure',
      message: 'Water pressure dropped below threshold',
      time: '5 min ago',
      icon: '💧'
    },
    {
      type: 'info',
      title: 'Maintenance Due',
      message: 'Motor maintenance scheduled in 7 days',
      time: '2 hours ago',
      icon: '🔧'
    },
    {
      type: 'success',
      title: 'Irrigation Complete',
      message: 'North field irrigation completed successfully',
      time: '1 hour ago',
      icon: '✅'
    }
  ];

  const getAlertColor = (type) => {
    const colors = {
      warning: 'bg-orange-900/20 border-orange-800',
      info: 'bg-blue-900/20 border-blue-800',
      success: 'bg-green-900/20 border-green-800',
      error: 'bg-red-900/20 border-red-800'
    };
    return colors[type] || 'bg-gray-700 border-gray-600';
  };

  const getIconColor = (type) => {
    const colors = {
      warning: 'text-orange-400',
      info: 'text-blue-400',
      success: 'text-green-400',
      error: 'text-red-400'
    };
    return colors[type] || 'text-gray-400';
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-white">Recent Alerts</h2>
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3 New</span>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className={`p-4 rounded-lg border ${getAlertColor(alert.type)}`}>
            <div className="flex items-start space-x-3">
              <span className={`text-xl ${getIconColor(alert.type)}`}>
                {alert.icon}
              </span>
              <div className="flex-1">
                <h3 className="font-medium text-white">{alert.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{alert.message}</p>
                <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
              </div>
              <button className="text-gray-500 hover:text-gray-300">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Alert Statistics */}
      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-orange-400">2</p>
            <p className="text-xs text-gray-400">Warnings</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-400">1</p>
            <p className="text-xs text-gray-400">Info</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-400">5</p>
            <p className="text-xs text-gray-400">Resolved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsPanel;