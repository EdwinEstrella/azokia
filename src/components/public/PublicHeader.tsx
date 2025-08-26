import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { LogIn, ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

const PublicHeader: React.FC = () => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Inicio', href: '/' },
    { 
      name: 'Servicios', 
      href: '/servicios', 
      subLinks: [
        { name: 'Automatización', href: '/servicios/automatizacion' },
        { name: 'Marketing Digital', href: '/servicios/marketing-digital' },
        { name: 'Desarrollo de Software', href: '/servicios/desarrollo-software' },
        { name: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
      ]
    },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

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
              item.subLinks ? (
                <Popover key={item.name}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="link"
                      className={`text-sm font-medium transition-colors ${
                        location.pathname.startsWith(item.href)
                          ? 'text-[#1E90FF]'
                          : 'text-[#EAEAEA]/70 hover:text-[#EAEAEA]'
                      }`}
                    >
                      {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48 p-0 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-md shadow-lg">
                    <div className="flex flex-col p-2">
                      {item.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.href}
                          className="px-3 py-2 text-sm text-[#EAEAEA]/70 hover:bg-[#1E90FF]/10 hover:text-[#EAEAEA] rounded-sm"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              ) : (
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
              )
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
