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
        <div className="flex items-center space-x-1 bg-slate-900/80 backdrop-blur-lg rounded-lg p-1 border border-white/10">
          <button
            onClick={() => setLanguage('es')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
              language === 'es'
                ? 'bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] text-white shadow-lg'
                : 'text-[#EAEAEA]/60 hover:text-[#1E90FF]'
            }`}
          >
            ES
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
              language === 'en'
                ? 'bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] text-white shadow-lg'
                : 'text-[#EAEAEA]/60 hover:text-[#1E90FF]'
            }`}
          >
            EN
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