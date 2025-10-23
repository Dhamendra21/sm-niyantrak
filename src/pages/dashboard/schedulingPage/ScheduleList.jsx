import React from 'react';

const ScheduleList = ({ schedules, onDeleteSchedule }) => {
  const getStatusColor = (action, active) => {
    if (!active) return 'bg-gray-900/30 text-gray-400 border-gray-700';
    return action === 'on' 
      ? 'bg-green-900/30 text-green-400 border-green-800' 
      : 'bg-red-900/30 text-red-400 border-red-800';
  };

  const getActionIcon = (action) => {
    return action === 'on' ? '⚡' : '⏹️';
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-sm h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-poppins text-xl font-semibold text-white">Upcoming Schedules</h2>
        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          {schedules.filter(s => s.active).length} Active
        </span>
      </div>
      
      <div className="space-y-4">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            className={`p-4 rounded-lg border transition-all duration-200 transform hover:-translate-y-1 ${getStatusColor(schedule.action, schedule.active)}`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-xl">{getActionIcon(schedule.action)}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-white">
                      Motor {schedule.action === 'on' ? 'ON' : 'OFF'}
                    </p>
                    {!schedule.active && (
                      <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded">Paused</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-300">{schedule.repeat}, {schedule.time}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onDeleteSchedule(schedule.id)}
                  className="text-gray-500 hover:text-red-500 transition-colors p-1"
                  title="Delete Schedule"
                >
                  <span className="material-symbols-outlined text-lg">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {schedules.length === 0 && (
          <div className="text-center py-8">
            <span className="material-symbols-outlined text-gray-500 text-4xl mb-3">schedule</span>
            <p className="text-gray-500 text-sm">No schedules created yet</p>
            <p className="text-gray-400 text-xs mt-1">Create your first schedule to get started</p>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-green-400">
              {schedules.filter(s => s.active && s.action === 'on').length}
            </p>
            <p className="text-xs text-gray-400">ON Schedules</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-400">
              {schedules.filter(s => s.active && s.action === 'off').length}
            </p>
            <p className="text-xs text-gray-400">OFF Schedules</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-400">
              {schedules.filter(s => !s.active).length}
            </p>
            <p className="text-xs text-gray-400">Paused</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleList;