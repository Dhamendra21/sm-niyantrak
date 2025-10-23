import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import MotorControl from '../pages/dashboard/motorcontrol/MotorControl';
import Analytics from '../pages/dashboard/Analytics/Analytics';
import Settings from '../pages/dashboard/settings/Settings';

import Layout from '../pages/dashboard/Layout/layout';
import SchedulingPage from '../pages/dashboard/schedulingPage/SchedulingPage';
import Dashboard from '../pages/dashboard/panel/Dashboard';


const DashboardRoutes = () => {
  return (
    <Routes>
      {/* Layout with shared sidebar and header */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard/panel" replace />} />
        <Route path="/panel" element={<Dashboard />} />
        <Route path="/motor-control" element={<MotorControl />} />
        <Route path="/scheduling" element={<SchedulingPage />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logs" element={<div className="p-6 text-white">Log History Page - Coming Soon</div>} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;