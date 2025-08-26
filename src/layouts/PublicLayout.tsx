import React from 'react';
import { Outlet } from 'react-router-dom';
import PublicHeader from '../components/public/PublicHeader';
import { Footer } from '../components/Footer';

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
