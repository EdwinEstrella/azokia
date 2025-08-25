import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#0D0F2D] flex flex-col">
        {!isDashboard && <Header />}
        <main className="flex-1">
          <Outlet />
        </main>
        {!isDashboard && <Footer />}
      </div>
    </AuthProvider>
  );
}

export default App;
