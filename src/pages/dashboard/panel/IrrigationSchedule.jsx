import React from 'react';

const IrrigationSchedule = () => {
  const schedules = [
    { time: '06:00 AM', duration: '30 mins', status: 'completed', field: 'North Field' },
    { time: '02:00 PM', duration: '45 mins', status: 'upcoming', field: 'South Field' },
    { time: '08:00 PM', duration: '25 mins', status: 'upcoming', field: 'East Field' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      completed: 'bg-green-900/30 text-green-400 border border-green-800',
      upcoming: 'bg-blue-900/30 text-blue-400 border border-blue-800',
      running: 'bg-orange-900/30 text-orange-400 border border-orange-800'
    };
    return colors[status] || 'bg-gray-700 text-gray-300';
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-white">Irrigation Schedule</h2>
        <button className="text-green-400 hover:text-green-300 text-sm font-medium">
          + Add Schedule
        </button>
      </div>

      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700/50 hover:border-green-500/50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-semibold">
                {schedule.time.split(' ')[0]}
              </div>
              <div>
                <p className="font-medium text-white">{schedule.time}</p>
                <p className="text-sm text-gray-400">{schedule.field}</p>
              </div>
            </div>
            
            <div className="text-right">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(schedule.status)}`}>
                {schedule.status}
              </span>
              <p className="text-sm text-gray-400 mt-1">{schedule.duration}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Water Usage Summary */}
      <div className="mt-6 pt-6 border-t border-gray-700">
        <h3 className="font-medium text-white mb-3">Today's Water Usage</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-white">1,250 L</p>
            <p className="text-sm text-gray-400">Total consumed</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-green-400">65%</p>
            <p className="text-sm text-gray-400">Efficiency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrrigationSchedule;