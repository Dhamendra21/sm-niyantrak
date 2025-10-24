import React from 'react';
import { Outlet } from 'react-router-dom';
;
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex bg-gray-900">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Header */}
        <Header />
        
        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;