import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Globe, 
  FileText, 
  FolderKanban, 
  DollarSign, 
  Zap, 
  Settings, 
  User,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { signOut, user } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Webs', href: '/dashboard/webs', icon: Globe },
    { name: 'Contratos', href: '/dashboard/contracts', icon: FileText },
    { name: 'Proyectos', href: '/dashboard/projects', icon: FolderKanban },
    { name: 'Finanzas', href: '/dashboard/finances', icon: DollarSign },
    { name: 'Automatización', href: '/dashboard/automation', icon: Zap },
    { name: 'Configuración', href: '/dashboard/settings', icon: Settings },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

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

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#1E90FF]/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#1E90FF]/20 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-[#1E90FF]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#EAEAEA] font-medium text-sm truncate">
              {user?.email}
            </p>
            <p className="text-[#EAEAEA]/60 text-xs">Administrador</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          className="w-full text-[#EAEAEA]/70 hover:text-[#EAEAEA] hover:bg-red-500/20"
          onClick={signOut}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
