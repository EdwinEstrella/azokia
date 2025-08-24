import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Users, FileText, Calendar, CreditCard, 
  BarChart3, Settings, Zap, Smartphone, Workflow 
} from 'lucide-react';

const menuItems = [
  { path: '/dashboard', icon: Home, label: 'Inicio' },
  { path: '/dashboard/clients', icon: Users, label: 'Clientes' },
  { path: '/dashboard/contracts', icon: FileText, label: 'Contratos' },
  { path: '/dashboard/projects', icon: Calendar, label: 'Proyectos' },
  { path: '/dashboard/invoices', icon: CreditCard, label: 'Facturas' },
  { path: '/dashboard/finances', icon: BarChart3, label: 'Finanzas' },
  { path: '/dashboard/automation', icon: Zap, label: 'Automatización' },
  { path: '/dashboard/mobile', icon: Smartphone, label: 'Móvil' },
  { path: '/dashboard/settings', icon: Settings, label: 'Configuración' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-[#0D0F2D] border-r border-[#1E90FF]/20 min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold text-[#EAEAEA] mb-8">Azokia</h1>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
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
  );
};

export default Sidebar;
