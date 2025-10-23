import React, { useState } from 'react';
import ScheduleForm from './SchedulingForm';
import ScheduleList from './ScheduleList';

const SchedulingPage = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      action: 'on',
      time: '08:00 AM - 08:30 AM',
      repeat: 'Daily',
      active: true
    },
    {
      id: 2,
      action: 'off',
      time: '05:00 PM - 05:05 PM',
      repeat: 'Weekdays',
      active: true
    }
  ]);

  const addSchedule = (newSchedule) => {
    const schedule = {
      id: Date.now(),
      ...newSchedule,
      active: true
    };
    setSchedules(prev => [...prev, schedule]);
  };

  const deleteSchedule = (id) => {
    setSchedules(prev => prev.filter(schedule => schedule.id !== id));
  };

  const togglePauseAll = () => {
    setSchedules(prev => prev.map(schedule => ({
      ...schedule,
      active: !schedule.active
    })));
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 min-h-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-poppins text-3xl font-bold text-white">Scheduling</h1>
          <p className="text-gray-400 mt-1">Set daily or custom timers for motor control.</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={togglePauseAll}
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-sm hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">pause_circle</span>
            <span>Pause All</span>
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
        {/* Schedule Form */}
        <div className="xl:col-span-3">
          <ScheduleForm onAddSchedule={addSchedule} />
        </div>
        
        {/* Schedule List */}
        <div className="xl:col-span-2">
          <ScheduleList schedules={schedules} onDeleteSchedule={deleteSchedule} />
        </div>
      </div>
    </div>
  );
};

export default SchedulingPage;