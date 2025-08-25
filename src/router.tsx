import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Projects from './pages/dashboard/Projects';
import Finances from './pages/dashboard/Finances';
import Settings from './pages/dashboard/Settings';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'projects', element: <Projects /> },
          { path: 'finances', element: <Finances /> },
          { path: 'settings', element: <Settings /> },
        ],
      },
    ],
  },
]);

export const Router = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
