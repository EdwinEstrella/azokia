import React from 'react';
import { Outlet } from 'react-router-dom';
import PublicHeader from '../components/public/PublicHeader';
import { Footer } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'; // New import

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <ScrollToTop /> {/* New component */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
