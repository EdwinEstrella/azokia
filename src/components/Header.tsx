import React from 'react';
import { Home, Briefcase, Mail, Globe, Code2, Bot, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { NavBar } from './ui/tubelight-navbar';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

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
      <NavBar items={navItems} />
      
      {/* Language Switcher - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
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

      {/* Logo - Fixed position */}
      <div className="fixed top-6 left-6 z-50">
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