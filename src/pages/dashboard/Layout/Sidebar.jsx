import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: 'dashboard', name: 'Dashboard', path: '/dashboard/panel' }, // Just /dashboard
    { icon: 'bolt', name: 'Motor Control', path: '/dashboard/motor-control' },
    { icon: 'schedule', name: 'Scheduling', path: '/dashboard/scheduling' },
    { icon: 'analytics', name: 'Analytics', path: '/dashboard/analytics' },
    { icon: 'settings', name: 'Settings', path: '/dashboard/settings' },
    { icon: 'history', name: 'Log History', path: '/dashboard/logs' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="w-64 fixed inset-y-0 left-0 z-30 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex-col hidden lg:flex">
      {/* Logo Section */}
      <Link to={"/"} className="flex cursor-pointer items-center gap-3 px-6 py-5 border-b border-gray-700/50">
        <div className="h-10 w-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
          SN
        </div>
        <div>
          <h1 className="font-poppins font-bold text-lg text-white">SM-Niyantrak</h1>
          <p className="text-xs text-gray-400">Smart Motor Controller</p>
        </div>
      </Link>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${
              isActive(item.path)
                ? 'bg-green-900/30 text-green-400 border border-green-800 relative'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {isActive(item.path) && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-r-full"></div>
            )}
            <span className="material-symbols-outlined transition-transform duration-200 group-hover:scale-110">
              {item.icon}
            </span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
      
      {/* Logout Button */}
      <div className="px-4 py-6 mt-auto border-t border-gray-700/50">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 group">
          <span className="material-symbols-outlined transition-transform duration-200 group-hover:scale-110">
            logout
          </span>
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;