import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#0D0F2D]">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
