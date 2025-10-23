import React from 'react';
import StatsGrid from './StatsGrids';
import DashboardControl from './DashboardControl';
import RealTimeCharts from './RealtimeCharts';
import IrrigationSchedule from './IrrigationSchedule';
import AlertsPanel from './AlertsPanel';



const Dashboard = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 min-h-full">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Farm Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's your farm overview.</p>
      </div>

      {/* Stats Grid */}
      <StatsGrid />
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
        {/* Left Column - Motor Control */}
        <div className="xl:col-span-1">
          <DashboardControl />
        </div>
        
        {/* Middle Column - Charts */}
        <div className="xl:col-span-2">
          <RealTimeCharts />
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <IrrigationSchedule />
        <AlertsPanel />
      </div>
    </div>
  );
};

export default Dashboard;