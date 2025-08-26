import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    name: 'Nombre',
    email: 'Correo Electrónico',
    phone: 'Teléfono',
    businessType: 'Tipo de Negocio',
    budget: 'Presupuesto',
    message: 'Mensaje',
    businessTypes: {
      ecommerce: 'E-commerce',
      saas: 'SaaS',
      local: 'Negocio Local',
      startup: 'Startup',
      enterprise: 'Empresa',
      other: 'Otro'
    },
    budgetRanges: {
      small: '$1,000 - $5,000',
      medium: '$5,000 - $15,000',
      large: '$15,000 - $50,000',
      enterprise: '$50,000+'
    },
    sendMessage: 'Enviar Mensaje'
  },
  en: {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    businessType: 'Business Type',
    budget: 'Budget',
    message: 'Message',
    businessTypes: {
      ecommerce: 'E-commerce',
      saas: 'SaaS',
      local: 'Local Business',
      startup: 'Startup',
      enterprise: 'Enterprise',
      other: 'Other'
    },
    budgetRanges: {
      small: '$1,000 - $5,000',
      medium: '$5,000 - $15,000',
      large: '$15,000 - $50,000',
      enterprise: '$50,000+'
    },
    sendMessage: 'Send Message'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
