import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from "../../components/Nav"
const Header = () => {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/motor-control') return 'Motor Control';
    if (path === '/scheduling') return 'Scheduling';
    if (path === '/analytics') return 'Analytics';
    if (path === '/settings') return 'Settings';
    if (path === '/logs') return 'Log History';
    return 'Dashboard';
  };

  const getPageDescription = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Monitor your farm in real-time';
    if (path === '/motor-control') return 'Control and monitor your motor';
    if (path === '/scheduling') return 'Set daily or custom timers for motor control';
    if (path === '/analytics') return 'View detailed analytics and reports';
    if (path === '/settings') return 'Configure device and system settings';
    if (path === '/logs') return 'View system logs and history';
    return 'Monitor your farm in real-time';
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            SN
          </div>
          <h1 className="font-poppins font-bold text-md text-gray-200">SM-Niyantrak</h1>
        </div>
        <button className="text-gray-400">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-20">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-white">{getPageTitle()}</h1>
            <p className="text-gray-400 text-sm">{getPageDescription()}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                F
              </div>
              <div>
                <p className="text-sm font-medium text-white">Farm Owner</p>
                <p className="text-xs text-green-400">Online</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;