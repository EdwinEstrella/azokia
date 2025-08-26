import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { LogIn } from 'lucide-react';

const PublicHeader: React.FC = () => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#0D0F2D] border-b border-[#1E90FF]/20 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#1E90FF] to-[#9E7FFF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-[#EAEAEA]">Azokia</span>
          </Link>

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[#1E90FF]'
                    : 'text-[#EAEAEA]/70 hover:text-[#EAEAEA]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Botón Login */}
          <Button
            asChild
            variant="outline"
            className="border-[#1E90FF] text-[#1E90FF] hover:bg-[#1E90FF] hover:text-white"
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
