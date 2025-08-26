import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  FileText, 
  FolderKanban, 
  DollarSign, 
  PieChart,
  Zap, 
  Settings
} from 'lucide-react';

const DashboardSidebar: React.FC = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Clientes', href: '/dashboard/clientes', icon: Users },
    { name: 'Contratos', href: '/dashboard/contratos', icon: FileText },
    { name: 'Proyectos', href: '/dashboard/proyectos', icon: FolderKanban },
    { name: 'Facturación', href: '/dashboard/facturacion', icon: DollarSign },
    { name: 'Finanzas', href: '/dashboard/finanzas', icon: PieChart },
    { name: 'Automatización', href: '/dashboard/automatizacion', icon: Zap },
    { name: 'Configuración', href: '/dashboard/configuracion', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-[#0D0F2D] border-r border-[#1E90FF]/20 h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-[#1E90FF] to-[#9E7FFF] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <h1 className="text-xl font-bold text-[#EAEAEA]">Azokia</h1>
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-[#1E90FF]/20 text-[#1E90FF]'
                    : 'text-[#EAEAEA]/70 hover:text-[#EAEAEA] hover:bg-[#1A1C3A]'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;
