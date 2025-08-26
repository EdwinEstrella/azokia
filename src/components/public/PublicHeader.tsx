import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { LogIn, Home, Users, Briefcase, FileText } from 'lucide-react';
import { NavBar } from '../ui/tubelight-navbar';

const PublicHeader: React.FC = () => {
  
  const navItems = [
    { name: 'Inicio', url: '/', icon: Home },
    { name: 'Servicios', url: '/servicios', icon: Briefcase },
    { name: 'Nosotros', url: '/nosotros', icon: Users },
    { name: 'Contacto', url: '/contacto', icon: FileText }
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#1E90FF] to-[#9E7FFF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-[#EAEAEA]">Azokia</span>
          </Link>

          {/* Navegación */}
          <NavBar items={navItems} />

          {/* Botón Login */}
          <Button
            className="text-sm font-semibold px-6 py-2 rounded-full transition-colors text-[#EAEAEA]/70 hover:text-[#1E90FF]"
          >
            <Link to="/login" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Acceder</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
