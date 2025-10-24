import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logoutUserAsync } from '../../redux/slices/authSlice';

const Sidebar = () => {
  // const location = useLocation();
  // const dispatch = useDispatch();
  // const { user } = useSelector(state => state.auth);
  const user = "Dhamendra"
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: 'dashboard', name: 'Dashboard', path: '/dashboard' },
    { icon: 'bolt', name: 'Motor Control', path: '/dashboard/motor-control' },
    { icon: 'schedule', name: 'Scheduling', path: '/dashboard/scheduling' },
    { icon: 'analytics', name: 'Analytics', path: '/dashboard/analytics' },
    { icon: 'settings', name: 'Settings', path: '/dashboard/settings' },
    { icon: 'history', name: 'Log History', path: '/dashboard/logs' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  // const handleLogout = async () => {
  //   try {
  //     await dispatch(logoutUserAsync()).unwrap();
  //     setIsMobileMenuOpen(false);
  //   } catch (error) {
  //     console.error('Logout failed:', error);
  //   }
  // };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenu(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
            <Link to="/" onClick={closeMobileMenu}>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  SN
                </div>
                <div>
                  <h1 className="font-bold text-white text-sm">SM-Niyantrak</h1>
                  <p className="text-xs text-gray-400">Dashboard</p>
                </div>
              </div>
            </Link>
          </div>

          {/* User Info Mobile */}
          {user && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {user.fullName?.charAt(0) || 'U'}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={closeMobileMenu}
        >
          <div 
            className="fixed left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <Link to="/" onClick={closeMobileMenu}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    SN
                  </div>
                  <div>
                    <h1 className="font-bold text-white">SM-Niyantrak</h1>
                    <p className="text-xs text-gray-400">Smart Motor Controller</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* User Info in Mobile Menu */}
            {user && (
              <div className="px-4 py-3 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {user.fullName?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{user.fullName || 'User'}</p>
                    <p className="text-gray-400 text-xs">{user.email || ''}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Navigation */}
            <nav className="flex-1 px-2 py-4 space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                    isActive(item.path)
                      ? 'bg-green-900/30 text-green-400 border border-green-800'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Logout Button */}
            <div className="px-2 py-4 border-t border-gray-700">
              <button
                // onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200"
              >
                <span className="material-symbols-outlined">
                  logout
                </span>
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="w-64 fixed inset-y-0 left-0 z-30 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex-col hidden lg:flex">
        {/* Logo Section */}
        <Link to="/" className="flex cursor-pointer items-center gap-3 px-6 py-5 border-b border-gray-700/50">
          <div className="h-10 w-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
            SN
          </div>
          <div>
            <h1 className="font-bold text-white text-lg">SM-Niyantrak</h1>
            <p className="text-xs text-gray-400">Smart Motor Controller</p>
          </div>
        </Link>
        
        {/* User Info Desktop */}
        {user && (
          <div className="px-4 py-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                {user.fullName?.charAt(0) || 'U'}
              </div>
              <div>
                <p className="text-white font-medium text-sm">{user.fullName || 'User'}</p>
                <p className="text-gray-400 text-xs">{user.email || ''}</p>
              </div>
            </div>
          </div>
        )}
        
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
          <button
            // onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 group"
          >
            <span className="material-symbols-outlined transition-transform duration-200 group-hover:scale-110">
              logout
            </span>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Add padding for mobile header */}
      <div className="lg:hidden h-16"></div>
    </>
  );
};

export default Sidebar;