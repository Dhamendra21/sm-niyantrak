import React from 'react';

const StatsGrid = () => {
  const stats = [
    {
      title: 'Motor Status',
      value: 'RUNNING',
      status: 'active',
      icon: '⚡',
      change: '+2h 30m',
      color: 'green'
    },
    {
      title: 'Water Flow',
      value: '45 L/min',
      status: 'normal',
      icon: '💧',
      change: 'Stable',
      color: 'blue'
    },
    {
      title: 'Power Consumption',
      value: '2.4 kW',
      status: 'optimal',
      icon: '🔋',
      change: '-5%',
      color: 'purple'
    },
    {
      title: 'Field Moisture',
      value: '65%',
      status: 'good',
      icon: '🌱',
      change: 'Ideal',
      color: 'emerald'
    }
  ];

  const getStatusColor = (color) => {
    const colors = {
      green: 'bg-green-900/30 text-green-400 border border-green-800',
      blue: 'bg-blue-900/30 text-blue-400 border border-blue-800',
      purple: 'bg-purple-900/30 text-purple-400 border border-purple-800',
      emerald: 'bg-emerald-900/30 text-emerald-400 border border-emerald-800'
    };
    return colors[color] || 'bg-gray-700 text-gray-300';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">{stat.title}</p>
              <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${getStatusColor(stat.color)}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-3xl">
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;