import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, Users, FileText, Calendar, CreditCard, 
  BarChart3, Settings, Zap, LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const menuItems = [
  { path: '/dashboard', icon: Home, label: 'Inicio' },
  { path: '/dashboard/clients', icon: Users, label: 'Clientes' },
  { path: '/dashboard/contracts', icon: FileText, label: 'Contratos' },
  { path: '/dashboard/projects', icon: Calendar, label: 'Proyectos' },
  { path: '/dashboard/invoices', icon: CreditCard, label: 'Facturas' },
  { path: '/dashboard/finances', icon: BarChart3, label: 'Finanzas' },
  { path: '/dashboard/automation', icon: Zap, label: 'Automatización' },
  { path: '/dashboard/settings', icon: Settings, label: 'Configuración' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-64 bg-[#0D0F2D] border-r border-[#1E90FF]/20 min-h-screen flex flex-col justify-between">
      <div>
        <div className="p-6">
          <h1 className="text-xl font-bold text-[#EAEAEA] mb-8">Azokia</h1>
          
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || (item.path === '/dashboard' && location.pathname.startsWith('/dashboard') && location.pathname.split('/').length === 2);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1E90FF]/20 text-[#1E90FF] border border-[#1E90FF]/30'
                      : 'text-[#EAEAEA]/70 hover:text-[#EAEAEA] hover:bg-[#1E90FF]/10'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      
      <div className="p-6">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 text-[#EAEAEA]/70 hover:text-[#EAEAEA] hover:bg-[#1E90FF]/10"
        >
          <LogOut className="h-5 w-5 mr-3" />
          <span className="font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
