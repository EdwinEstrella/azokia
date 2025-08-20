import React from 'react';
import { Home, Briefcase, Mail, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { NavBar } from './ui/tubelight-navbar';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { name: t('home'), url: '/', icon: Home },
    { 
      name: t('services'), 
      url: '#', 
      icon: Briefcase,
      subItems: [
        { 
          name: 'Desarrollo Web', 
          url: '/web-development',
          description: 'Sitios web profesionales y e-commerce'
        },
        { 
          name: 'Desarrollo de Software', 
          url: '/software-development',
          description: 'Aplicaciones personalizadas y sistemas'
        },
        { 
          name: 'Automatización', 
          url: '/automation',
          description: 'Automatizaciones con n8n e IA'
        },
        { 
          name: 'Marketing Digital', 
          url: '/digital-marketing',
          description: 'Campañas y estrategias digitales'
        }
      ]
    },
    { name: t('contact'), url: '/contact', icon: Mail },
  ];

  return (
    <>
      {/* TubeLight Navigation */}
      <div className="hidden md:block">
        <NavBar items={navItems} />
      </div>
      
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo Mobile */}
          <div className="flex items-baseline space-x-1">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-300 bg-clip-text text-transparent">
              AZOKIA
            </span>
            <span className="text-xs text-blue-300 font-bold">
              LLC
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Language Switcher Mobile */}
            <div className="flex items-center gap-1 bg-slate-900/80 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
              <button
                onClick={() => setLanguage('es')}
                className={`relative cursor-pointer text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                  language === 'es'
                    ? 'bg-white/10 text-[#1E90FF]'
                    : 'text-[#EAEAEA]/80 hover:text-[#1E90FF]'
                }`}
              >
                ES
                {language === 'es' && (
                  <div className="absolute inset-0 w-full bg-[#1E90FF]/10 rounded-full -z-10">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1E90FF] rounded-t-full">
                      <div className="absolute w-6 h-3 bg-[#1E90FF]/20 rounded-full blur-sm -top-0.5 -left-1" />
                    </div>
                  </div>
                )}
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`relative cursor-pointer text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                  language === 'en'
                    ? 'bg-white/10 text-[#1E90FF]'
                    : 'text-[#EAEAEA]/80 hover:text-[#1E90FF]'
                }`}
              >
                EN
                {language === 'en' && (
                  <div className="absolute inset-0 w-full bg-[#1E90FF]/10 rounded-full -z-10">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1E90FF] rounded-t-full">
                      <div className="absolute w-6 h-3 bg-[#1E90FF]/20 rounded-full blur-sm -top-0.5 -left-1" />
                    </div>
                  </div>
                )}
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[#1E90FF]/25 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {/* Home */}
              <a
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Home className="h-5 w-5 text-[#1E90FF]" />
                <span className="text-[#EAEAEA] font-medium">{t('home')}</span>
              </a>
              
              {/* Services */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3 px-4 py-2">
                  <Briefcase className="h-5 w-5 text-[#1E90FF]" />
                  <span className="text-[#EAEAEA] font-medium">{t('services')}</span>
                </div>
                <div className="ml-8 space-y-2">
                  <a
                    href="/web-development"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-[#EAEAEA]/80 hover:text-[#1E90FF] transition-colors"
                  >
                    Desarrollo Web
                  </a>
                  <a
                    href="/software-development"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-[#EAEAEA]/80 hover:text-[#1E90FF] transition-colors"
                  >
                    Desarrollo de Software
                  </a>
                  <a
                    href="/automation"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-[#EAEAEA]/80 hover:text-[#1E90FF] transition-colors"
                  >
                    Automatización
                  </a>
                  <a
                    href="/digital-marketing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-[#EAEAEA]/80 hover:text-[#1E90FF] transition-colors"
                  >
                    Marketing Digital
                  </a>
                </div>
              </div>
              
              {/* Contact */}
              <a
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Mail className="h-5 w-5 text-[#1E90FF]" />
                <span className="text-[#EAEAEA] font-medium">{t('contact')}</span>
              </a>
            </div>
          </div>
        )}
      </div>
      
      {/* Desktop Language Switcher - Fixed position */}
      <div className="hidden md:block fixed top-6 right-6 z-50">
        <div className="flex items-center gap-1 bg-slate-900/80 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          <button
            onClick={() => setLanguage('es')}
            className={`relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
              language === 'es'
                ? 'bg-white/10 text-[#1E90FF]'
                : 'text-[#EAEAEA]/80 hover:text-[#1E90FF]'
            }`}
          >
            ES
            {language === 'es' && (
              <div className="absolute inset-0 w-full bg-[#1E90FF]/10 rounded-full -z-10">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-[#1E90FF] rounded-t-full">
                  <div className="absolute w-8 h-4 bg-[#1E90FF]/20 rounded-full blur-md -top-1 -left-1" />
                  <div className="absolute w-6 h-4 bg-[#1E90FF]/20 rounded-full blur-md -top-0.5" />
                  <div className="absolute w-3 h-3 bg-[#1E90FF]/20 rounded-full blur-sm top-0 left-1.5" />
                </div>
              </div>
            )}
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
              language === 'en'
                ? 'bg-white/10 text-[#1E90FF]'
                : 'text-[#EAEAEA]/80 hover:text-[#1E90FF]'
            }`}
          >
            EN
            {language === 'en' && (
              <div className="absolute inset-0 w-full bg-[#1E90FF]/10 rounded-full -z-10">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-[#1E90FF] rounded-t-full">
                  <div className="absolute w-8 h-4 bg-[#1E90FF]/20 rounded-full blur-md -top-1 -left-1" />
                  <div className="absolute w-6 h-4 bg-[#1E90FF]/20 rounded-full blur-md -top-0.5" />
                  <div className="absolute w-3 h-3 bg-[#1E90FF]/20 rounded-full blur-sm top-0 left-1.5" />
                </div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Logo - Fixed position */}
      <div className="hidden md:block fixed top-6 left-6 z-50">
        <div className="flex items-baseline space-x-1">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-300 bg-clip-text text-transparent">
            AZOKIA
          </span>
          <span className="text-sm text-blue-300 font-bold">
            LLC
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;