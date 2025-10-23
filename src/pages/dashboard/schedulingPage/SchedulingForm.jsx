import React, { useState } from 'react';

const ScheduleForm = ({ onAddSchedule }) => {
  const [formData, setFormData] = useState({
    startTime: '',
    endTime: '',
    repeatDays: 'Daily',
    motorAction: 'on'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.startTime || !formData.endTime) {
      alert('Please select both start and end time');
      return;
    }

    const schedule = {
      action: formData.motorAction,
      time: `${formData.startTime} - ${formData.endTime}`,
      repeat: formData.repeatDays
    };

    onAddSchedule(schedule);
    
    // Reset form
    setFormData({
      startTime: '',
      endTime: '',
      repeatDays: 'Daily',
      motorAction: 'on'
    });

    alert('Schedule added successfully!');
  };

  const timeOptions = [
    '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM',
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
    '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM'
  ];

  return (
    <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-xl">
      <h2 className="font-poppins text-xl font-semibold text-white mb-6">Create New Schedule</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-2" htmlFor="start-time">
              Start Time
            </label>
            <select
              id="start-time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
              required
            >
              <option value="">Select Start Time</option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-300 block mb-2" htmlFor="end-time">
              End Time
            </label>
            <select
              id="end-time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
              required
            >
              <option value="">Select End Time</option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Repeat Days */}
        <div>
          <label className="text-sm font-medium text-gray-300 block mb-2" htmlFor="repeat-days">
            Repeat Days
          </label>
          <select
            id="repeat-days"
            name="repeatDays"
            value={formData.repeatDays}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3"
          >
            <option value="Daily">Daily</option>
            <option value="Weekdays">Weekdays (Mon-Fri)</option>
            <option value="Weekends">Weekends (Sat-Sun)</option>
            <option value="Custom">Custom</option>
          </select>
        </div>

        {/* Motor Action */}
        <div>
          <label className="text-sm font-medium text-gray-300 block mb-2">
            Motor Action
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="motorAction"
                value="on"
                checked={formData.motorAction === 'on'}
                onChange={handleChange}
                className="form-radio text-green-500 bg-gray-700 border-gray-600 focus:ring-green-500 focus:ring-offset-gray-800"
              />
              <span className="font-medium text-gray-300">Turn ON</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="motorAction"
                value="off"
                checked={formData.motorAction === 'off'}
                onChange={handleChange}
                className="form-radio text-red-500 bg-gray-700 border-gray-600 focus:ring-red-500 focus:ring-offset-gray-800"
              />
              <span className="font-medium text-gray-300">Turn OFF</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">add_circle</span>
            Add Schedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleForm;