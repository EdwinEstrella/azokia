import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('home'), href: '/' },
    { 
      name: t('services'), 
      href: '/services',
      submenu: [
        { name: 'Desarrollo Web', href: '/web-development' },
        { name: 'Desarrollo de Software', href: '/software-development' },
        { name: 'Automatización', href: '/automation' },
        { name: 'Marketing Digital', href: '/digital-marketing' }
      ]
    },
    { name: t('contact'), href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    setIsMenuOpen(false);
    // Scroll inmediato al top cuando se hace clic en navegación
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Azokia */}
          <Link to="/" onClick={handleNavClick} className="flex items-center space-x-2">
            <div className="relative">
              <img 
                src="/catalogo copy.png" 
                alt="Azokia Logo" 
                className="w-10 h-10 object-contain transform hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur opacity-20 hover:opacity-30 transition-opacity duration-200"></div>
            </div>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-300 bg-clip-text text-transparent">
                AZOKIA
              </span>
              <span className="text-sm text-blue-300 font-bold">
                LLC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center text-sm font-medium transition-all duration-200 hover:text-blue-400 relative ${
                        location.pathname.includes('/web-development') || 
                        location.pathname.includes('/software-development') || 
                        location.pathname.includes('/automation') || 
                        location.pathname.includes('/digital-marketing') || 
                        location.pathname === '/services'
                          ? 'text-blue-400'
                          : 'text-gray-300'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 py-2 z-50">
                        <Link
                          to="/services"
                          onClick={handleNavClick}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-colors"
                        >
                          Ver Todos los Servicios
                        </Link>
                        <div className="border-t border-white/10 my-2"></div>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={handleNavClick}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-white/5 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={handleNavClick}
                    className={`text-sm font-medium transition-all duration-200 hover:text-blue-400 relative ${
                      isActive(item.href)
                        ? 'text-blue-400'
                        : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-slate-800/80 rounded-lg p-1 backdrop-blur-sm">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  language === 'es'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-blue-400'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-blue-400'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-slate-800/50 transition-all duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <Link
                        to={item.href}
                        onClick={handleNavClick}
                        className={`text-base font-medium transition-colors duration-200 hover:text-blue-400 ${
                          isActive(item.href) ? 'text-blue-400' : 'text-gray-300'
                        }`}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={handleNavClick}
                            className="block text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={handleNavClick}
                      className={`text-base font-medium transition-colors duration-200 hover:text-blue-400 ${
                        isActive(item.href) ? 'text-blue-400' : 'text-gray-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;