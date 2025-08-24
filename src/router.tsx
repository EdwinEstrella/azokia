import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';
import Clients from './pages/dashboard/Clients';
import Contracts from './pages/dashboard/Contracts';
import Projects from './pages/dashboard/Projects';
import Invoices from './pages/dashboard/Invoices';
import Finances from './pages/dashboard/Finances';
import Automation from './pages/dashboard/Automation';
import Mobile from './pages/dashboard/Mobile';
import Settings from './pages/dashboard/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'clients',
            element: <Clients />,
          },
          {
            path: 'contracts',
            element: <Contracts />,
          },
          {
            path: 'projects',
            element: <Projects />,
          },
          {
            path: 'invoices',
            element: <Invoices />,
          },
          {
            path: 'finances',
            element: <Finances />,
          },
          {
            path: 'automation',
            element: <Automation />,
          },
          {
            path: 'mobile',
            element: <Mobile />,
          },
          {
            path: 'settings',
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
