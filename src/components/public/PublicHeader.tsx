import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { LogIn, Home, Users, Briefcase, FileText } from 'lucide-react';
import { NavBar } from '../ui/tubelight-navbar';

const PublicHeader: React.FC = () => {
  
  const navItems = [
    { name: 'Inicio', url: '/', icon: Home },
    {
      name: 'Servicios',
      icon: Briefcase,
      component: (
        <Popover>
          <PopoverTrigger asChild>
            {/* The NavBar component will apply the correct styling to the div wrapping this span */}
            <span className="cursor-pointer">
              Servicios
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2 bg-[#0D0F2D] border border-[#1E90FF]/30 rounded-md shadow-lg">
            <div className="flex flex-col space-y-1">
              <Link to="/servicios/desarrollo-web" className="block px-2 py-1 text-sm text-white hover:bg-blue-700 rounded-md">
                Desarrollo Web
              </Link>
              <Link to="/servicios/desarrollo-software" className="block px-2 py-1 text-sm text-white hover:bg-blue-700 rounded-md">
                Desarrollo de Software
              </Link>
              <Link to="/servicios/marketing-digital" className="block px-2 py-1 text-sm text-white hover:bg-blue-700 rounded-md">
                Marketing Digital
              </Link>
              <Link to="/servicios/automatizacion" className="block px-2 py-1 text-sm text-white hover:bg-blue-700 rounded-md">
                Automatización
              </Link>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    
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
            className="relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors text-[#EAEAEA]/70 hover:text-[#1E90FF]" // Applied NavBar styling
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
