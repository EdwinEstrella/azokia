import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    // Optionally render a loading spinner or null while authentication state is being determined
    return <div>Cargando...</div>; // Or return null;
  }

  if (!user) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;