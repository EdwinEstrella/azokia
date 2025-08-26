import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-[#0D0F2D]">
      {/* Outlet will render the matched child route (e.g., WebDevelopment, Automation, etc.) */}
      <Outlet />
    </div>
  );
};

export default ServicesPage;