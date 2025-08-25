import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import LoginButton from './LoginButton';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/services' },
    { name: 'Portafolio', href: '/portfolio' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#0D0F2D]/90 backdrop-blur-md border-b border-[#1E90FF]/20 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-[#EAEAEA]">Azokia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-[#EAEAEA]/70 hover:text-[#EAEAEA] transition-colors ${
                  location.pathname === item.href ? 'text-[#1E90FF]' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button variant="outline" className="border-[#1E90FF]/30 text-[#EAEAEA] hover:bg-[#1E90FF]/10">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <LoginButton />
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#EAEAEA]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#1E90FF]/20 mt-2 py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-lg text-[#EAEAEA]/70 hover:text-[#EAEAEA] hover:bg-[#1E90FF]/10 transition-colors ${
                    location.pathname === item.href ? 'text-[#1E90FF] bg-[#1E90FF]/10' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-[#1E90FF]/20">
                {isAuthenticated ? (
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded-lg text-[#EAEAEA] hover:bg-[#1E90FF]/10 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <div className="px-3">
                    <LoginButton />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
