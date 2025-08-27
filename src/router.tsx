import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import HomePage from './pages/public/HomePage';
import ServicesPage from './pages/public/ServicesPage';
import AboutPage from './pages/public/AboutPage';
import ContactPage from './pages/public/ContactPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import ClientsPage from './pages/dashboard/ClientsPage';
import ContractsPage from './pages/dashboard/ContractsPage';
import ProjectsPage from './pages/dashboard/ProjectsPage';
import BillingPage from './pages/dashboard/BillingPage';
import FinancesPage from './pages/dashboard/FinancesPage';
import AutomationPage from './pages/dashboard/AutomationPage';
import SettingsPage from './pages/dashboard/SettingsPage';
import Automation from './pages/Automation';
import DigitalMarketing from './pages/DigitalMarketing';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import WebDevelopment from './pages/WebDevelopment';
import LoginPage from './pages/auth/LoginPage';
import ProtectedRoute from './components/auth/ProtectedRoute'; // New import
import { AuthProvider } from './contexts/AuthContext'; // New import
import ContractPreviewPage from './pages/dashboard/ContractPreviewPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'servicios', element: <ServicesPage />,
        children: [
          { path: 'automatizacion', element: <Automation /> },
          { path: 'marketing-digital', element: <DigitalMarketing /> },
          { path: 'desarrollo-software', element: <SoftwareDevelopment /> },
          { path: 'desarrollo-web', element: <WebDevelopment /> },
        ]
      },
      { path: 'nosotros', element: <AboutPage /> },
      { path: 'contacto', element: <ContactPage /> }
    ]
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: 'clientes', element: <ClientsPage /> },
          { path: 'contratos', element: <ContractsPage /> },
          { path: 'contratos/preview/:id', element: <ContractPreviewPage /> },
          { path: 'proyectos', element: <ProjectsPage /> },
          { path: 'facturacion', element: <BillingPage /> },
          { path: 'finanzas', element: <FinancesPage /> },
          { path: 'automatizacion', element: <AutomationPage /> },
          { path: 'configuracion', element: <SettingsPage /> }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]);

export const AppRouter = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
