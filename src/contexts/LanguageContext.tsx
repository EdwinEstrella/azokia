import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    home: 'Inicio',
    services: 'Servicios',
    about: 'Nosotros',
    contact: 'Contacto',
    
    // Hero Section
    heroTitle: 'Construyamos Tu Historia de Éxito Digital',
    heroSubtitle: 'Nos especializamos en crear campañas digitales basadas en datos que cautivan a tu audiencia y generan resultados reales.',
    getStarted: 'Comenzar Ahora',
    
    // Services
    servicesTitle: 'Nuestros Servicios',
    servicesSubtitle: 'Soluciones integrales de marketing digital, desarrollo web y automatización',
    
    // Main Service Categories
    digitalMarketing: 'Marketing Digital',
    digitalMarketingDesc: 'Campañas de publicidad digital orientadas a resultados en Facebook Ads, Google Ads y gestión completa de redes sociales.',
    
    webDevelopment: 'Desarrollo Web',
    webDevelopmentDesc: 'Diseño web profesional, tiendas online, landing pages y soluciones de e-commerce con pasarelas de pago.',
    
    automation: 'Automatización con n8n',
    automationDesc: 'Automatizaciones avanzadas para ventas, atención al cliente, reportes y flujos de trabajo personalizados.',
    
    seoContent: 'SEO y Contenido',
    seoContentDesc: 'Optimización SEO, creación de contenido, producción audiovisual y estrategias de posicionamiento orgánico.',
    
    consulting: 'Consultoría Digital',
    consultingDesc: 'Auditorías digitales, análisis de presencia online, configuración de hosting y soporte técnico especializado.',
    
    graphicDesign: 'Diseño Gráfico',
    graphicDesignDesc: 'Logos, branding, flyers, piezas para redes sociales y toda la identidad visual de tu marca.',
    
    // Digital Marketing Features
    facebookAds: 'Facebook Ads',
    googleAds: 'Google Ads',
    socialMediaManagement: 'Gestión de Redes Sociales',
    contentStrategy: 'Estrategia de Contenido',
    communityManagement: 'Community Management',
    paidCampaigns: 'Campañas de Pago',
    
    // Web Development Features
    corporateWebsites: 'Páginas Corporativas',
    landingPages: 'Landing Pages',
    ecommerce: 'E-commerce',
    blogs: 'Blogs',
    paymentGateways: 'Pasarelas de Pago',
    adminPanel: 'Panel de Administración',
    
    // Automation Features
    whatsappBot: 'Asistente Virtual WhatsApp',
    telegramBot: 'Asistente Virtual Telegram',
    crmAutomation: 'Automatización CRM',
    leadFollowUp: 'Seguimiento de Leads',
    salesNotifications: 'Notificaciones de Ventas',
    customDashboards: 'Dashboards Personalizados',
    appointmentReminders: 'Recordatorios de Citas',
    emailNurturing: 'Nurturing por Email',
    invoiceGeneration: 'Generación de Facturas',
    attendanceControl: 'Control de Asistencia',
    competitorMonitoring: 'Monitoreo de Competencia',
    
    // Customer Service Automation
    customerServiceAutomation: 'Automatización de Atención al Cliente',
    intelligentAutoResponse: 'Autorespuesta Inteligente',
    conversationAssignment: 'Asignación de Conversaciones',
    hybridChatbot: 'Chatbot Híbrido',
    satisfactionSurveys: 'Encuestas de Satisfacción',
    afterHoursResponse: 'Respuesta Fuera de Horario',
    
    // Sales Automation
    salesAutomation: 'Automatización de Ventas',
    leadRegistration: 'Registro de Leads',
    salesTeamNotification: 'Notificación a Equipo de Ventas',
    crmOpportunity: 'Oportunidades en CRM',
    followUpReminders: 'Recordatorios de Seguimiento',
    
    // Technical Support Automation
    technicalSupportAutomation: 'Automatización de Soporte Técnico',
    calendarIntegration: 'Integración con Calendarios',
    ticketGeneration: 'Generación de Tickets',
    automaticGuides: 'Guías Automáticas',
    agentReassignment: 'Reasignación de Agentes',
    
    // Reports and Control Automation
    reportsControlAutomation: 'Automatización de Reportes',
    dailyWeeklyReports: 'Reportes Diarios/Semanales',
    saturationAlerts: 'Alertas de Saturación',
    customerSummaries: 'Resúmenes de Clientes',
    
    // SEO & Content Features
    onPageSEO: 'SEO On-Page',
    offPageSEO: 'SEO Off-Page',
    organicPositioning: 'Posicionamiento Orgánico',
    videoProduction: 'Producción de Videos',
    photoSessions: 'Sesiones de Fotos',
    animations: 'Animaciones',
    
    // Consulting Features
    digitalAudit: 'Auditoría Digital',
    funnelAnalysis: 'Análisis de Embudos',
    metricsAnalysis: 'Análisis de Métricas',
    corporateEmail: 'Correo Corporativo',
    hostingConfiguration: 'Configuración de Hosting',
    domainManagement: 'Gestión de Dominios',
    technicalSupport: 'Soporte Técnico',
    webMaintenance: 'Mantenimiento Web',
    backups: 'Backups',
    security: 'Seguridad',
    performance: 'Rendimiento',
    
    // Graphic Design Features
    logoDesign: 'Diseño de Logos',
    branding: 'Branding',
    flyers: 'Flyers',
    socialMediaPieces: 'Piezas para Redes Sociales',
    visualIdentity: 'Identidad Visual',
    
    // About
    aboutTitle: 'Sobre Azokia',
    aboutSubtitle: 'Tu socio estratégico en transformación digital',
    aboutDescription: 'En Azokia, combinamos creatividad, tecnología y estrategia para impulsar el crecimiento de tu negocio. Nuestro equipo de expertos se dedica a crear soluciones personalizadas que generan resultados medibles.',
    
    ourMission: 'Nuestra Misión',
    missionText: 'Empoderar a las empresas con soluciones de marketing digital innovadoras que impulsen el crecimiento sostenible.',
    
    ourVision: 'Nuestra Visión',
    visionText: 'Ser la agencia líder en transformación digital, reconocida por nuestra excelencia e innovación.',
    
    ourValues: 'Nuestros Valores',
    innovation: 'Innovación',
    innovationText: 'Adoptamos las últimas tecnologías y tendencias.',
    excellence: 'Excelencia',
    excellenceText: 'Nos comprometemos con la calidad en cada proyecto.',
    transparency: 'Transparencia',
    transparencyText: 'Comunicación clara y honesta con nuestros clientes.',
    
    // Contact Form
    contactTitle: 'Contáctanos',
    contactSubtitle: 'Estamos aquí para ayudarte a hacer crecer tu negocio',
    
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
    
    sendMessage: 'Enviar Mensaje',
    
    // Footer
    footerDescription: 'Transformamos ideas en éxito digital. Conecta con nosotros para impulsar tu negocio.',
    quickLinks: 'Enlaces Rápidos',
    followUs: 'Síguenos',
    allRightsReserved: 'Todos los derechos reservados.',
    newsletter: 'Boletín',
    newsletterDesc: 'Suscríbete para recibir las últimas actualizaciones y consejos de marketing.',
    yourEmail: 'Tu correo',
    subscribe: 'Suscribirse',
    privacyPolicy: 'Política de Privacidad',
    termsConditions: 'Términos y Condiciones',
    
    // FAQ
    faqTitle: 'Preguntas Frecuentes',
    faq1Q: '¿Cuánto tiempo toma ver resultados?',
    faq1A: 'Los resultados varían según el servicio, pero generalmente comenzamos a ver mejoras en 2-4 semanas.',
    faq2Q: '¿Trabajan con empresas de todos los tamaños?',
    faq2A: 'Sí, trabajamos con startups, PYMES y grandes empresas, adaptando nuestras estrategias a cada necesidad.',
    faq3Q: '¿Ofrecen reportes regulares?',
    faq3A: 'Proporcionamos reportes detallados mensuales y acceso a dashboards en tiempo real.',
    faq4Q: '¿Cuáles son sus tarifas?',
    faq4A: 'Nuestras tarifas varían según el proyecto y los servicios requeridos. Ofrecemos paquetes personalizados para adaptarnos a diferentes presupuestos.',
    faq5Q: '¿Ofrecen soporte técnico?',
    faq5A: 'Sí, ofrecemos soporte técnico continuo para todos nuestros clientes, incluyendo mantenimiento y actualizaciones regulares.',
    
    // Stats
    satisfiedClients: 'Clientes Satisfechos',
    completedProjects: 'Proyectos Completados',
    successRate: 'Tasa de Éxito',
    support: 'Soporte',
    
    // CTA
    readyToGrow: '¿Listo para hacer crecer tu negocio?',
    contactToday: 'Contáctanos hoy y descubre cómo podemos transformar tu presencia digital.',
    startNow: 'Comenzar Ahora',
    
    // Services Page
    ourProcess: 'Nuestro Proceso',
    processSubtitle: 'Un enfoque estructurado para garantizar el éxito de tu proyecto',
    analysis: 'Análisis',
    analysisDesc: 'Evaluamos tu situación actual y definimos objetivos claros.',
    strategy: 'Estrategia',
    strategyDesc: 'Desarrollamos una estrategia personalizada para tu negocio.',
    implementation: 'Implementación',
    implementationDesc: 'Ejecutamos las campañas y automatizaciones planificadas.',
    optimization: 'Optimización',
    optimizationDesc: 'Monitoreamos y optimizamos continuamente los resultados.',
    readyToPower: '¿Listo para potenciar tu negocio?',
    freeConsultation: 'Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte.',
    requestConsultation: 'Solicitar Consulta Gratuita',
    
    // About Page
    transformIdeas: 'Transformamos ideas en éxito digital',
    aboutLongDesc: 'Desde nuestros inicios en 2020, hemos ayudado a más de 500 empresas a alcanzar sus objetivos digitales, combinando estrategia, creatividad y tecnología de vanguardia.',
    ourTeam: 'Nuestro Equipo',
    teamSubtitle: 'Profesionales apasionados comprometidos con tu éxito',
    satisfactionRate: 'Tasa de Satisfacción',
    yearsExperience: 'Años de Experiencia',
    
    // Contact Page
    contactFormDesc: 'Completa el formulario y nos pondremos en contacto contigo pronto',
    faqSubtitle: 'Respuestas a las preguntas más comunes sobre nuestros servicios',
    ourLocation: 'Nuestra Ubicación',
    locationDesc: 'Visítanos en nuestra oficina o programa una reunión virtual',
    mainOffice: 'Oficina Principal',
    unitedStates: 'Estados Unidos',
    
    // Contact Info
    emailUs: 'Envíanos un email y te responderemos en 24 horas',
    callUs: 'Llámanos de lunes a viernes de 9:00 a 18:00',
    visitUs: 'Visítanos en nuestra oficina principal',
    businessHours: 'Estamos disponibles durante horario comercial',
    schedule: 'Horario',
    mondayFriday: 'Lun - Vie: 9:00 - 18:00',
    
    // All Services
    allServices: 'Ver Todos los Servicios',
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: "Let's Build Your Digital Success Story",
    heroSubtitle: 'We specialize in crafting data-driven digital campaigns that captivate your audience and deliver real results.',
    getStarted: 'Get Started',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive digital marketing, web development and automation solutions',
    
    // Main Service Categories
    digitalMarketing: 'Digital Marketing',
    digitalMarketingDesc: 'Results-oriented digital advertising campaigns on Facebook Ads, Google Ads and complete social media management.',
    
    webDevelopment: 'Web Development',
    webDevelopmentDesc: 'Professional web design, online stores, landing pages and e-commerce solutions with payment gateways.',
    
    automation: 'n8n Automation',
    automationDesc: 'Advanced automations for sales, customer service, reports and custom workflows.',
    
    seoContent: 'SEO & Content',
    seoContentDesc: 'SEO optimization, content creation, audiovisual production and organic positioning strategies.',
    
    consulting: 'Digital Consulting',
    consultingDesc: 'Digital audits, online presence analysis, hosting configuration and specialized technical support.',
    
    graphicDesign: 'Graphic Design',
    graphicDesignDesc: 'Logos, branding, flyers, social media pieces and complete visual identity for your brand.',
    
    // Digital Marketing Features
    facebookAds: 'Facebook Ads',
    googleAds: 'Google Ads',
    socialMediaManagement: 'Social Media Management',
    contentStrategy: 'Content Strategy',
    communityManagement: 'Community Management',
    paidCampaigns: 'Paid Campaigns',
    
    // Web Development Features
    corporateWebsites: 'Corporate Websites',
    landingPages: 'Landing Pages',
    ecommerce: 'E-commerce',
    blogs: 'Blogs',
    paymentGateways: 'Payment Gateways',
    adminPanel: 'Admin Panel',
    
    // Automation Features
    whatsappBot: 'WhatsApp Virtual Assistant',
    telegramBot: 'Telegram Virtual Assistant',
    crmAutomation: 'CRM Automation',
    leadFollowUp: 'Lead Follow-up',
    salesNotifications: 'Sales Notifications',
    customDashboards: 'Custom Dashboards',
    appointmentReminders: 'Appointment Reminders',
    emailNurturing: 'Email Nurturing',
    invoiceGeneration: 'Invoice Generation',
    attendanceControl: 'Attendance Control',
    competitorMonitoring: 'Competitor Monitoring',
    
    // Customer Service Automation
    customerServiceAutomation: 'Customer Service Automation',
    intelligentAutoResponse: 'Intelligent Auto-response',
    conversationAssignment: 'Conversation Assignment',
    hybridChatbot: 'Hybrid Chatbot',
    satisfactionSurveys: 'Satisfaction Surveys',
    afterHoursResponse: 'After Hours Response',
    
    // Sales Automation
    salesAutomation: 'Sales Automation',
    leadRegistration: 'Lead Registration',
    salesTeamNotification: 'Sales Team Notification',
    crmOpportunity: 'CRM Opportunities',
    followUpReminders: 'Follow-up Reminders',
    
    // Technical Support Automation
    technicalSupportAutomation: 'Technical Support Automation',
    calendarIntegration: 'Calendar Integration',
    ticketGeneration: 'Ticket Generation',
    automaticGuides: 'Automatic Guides',
    agentReassignment: 'Agent Reassignment',
    
    // Reports and Control Automation
    reportsControlAutomation: 'Reports & Control Automation',
    dailyWeeklyReports: 'Daily/Weekly Reports',
    saturationAlerts: 'Saturation Alerts',
    customerSummaries: 'Customer Summaries',
    
    // SEO & Content Features
    onPageSEO: 'On-Page SEO',
    offPageSEO: 'Off-Page SEO',
    organicPositioning: 'Organic Positioning',
    videoProduction: 'Video Production',
    photoSessions: 'Photo Sessions',
    animations: 'Animations',
    
    // Consulting Features
    digitalAudit: 'Digital Audit',
    funnelAnalysis: 'Funnel Analysis',
    metricsAnalysis: 'Metrics Analysis',
    corporateEmail: 'Corporate Email',
    hostingConfiguration: 'Hosting Configuration',
    domainManagement: 'Domain Management',
    technicalSupport: 'Technical Support',
    webMaintenance: 'Web Maintenance',
    backups: 'Backups',
    security: 'Security',
    performance: 'Performance',
    
    // Graphic Design Features
    logoDesign: 'Logo Design',
    branding: 'Branding',
    flyers: 'Flyers',
    socialMediaPieces: 'Social Media Pieces',
    visualIdentity: 'Visual Identity',
    
    // About
    aboutTitle: 'About Azokia',
    aboutSubtitle: 'Your strategic partner in digital transformation',
    aboutDescription: 'At Azokia, we combine creativity, technology, and strategy to drive your business growth. Our team of experts is dedicated to creating customized solutions that generate measurable results.',
    
    ourMission: 'Our Mission',
    missionText: 'Empower businesses with innovative digital marketing solutions that drive sustainable growth.',
    
    ourVision: 'Our Vision',
    visionText: 'To be the leading agency in digital transformation, recognized for our excellence and innovation.',
    
    ourValues: 'Our Values',
    innovation: 'Innovation',
    innovationText: 'We embrace the latest technologies and trends.',
    excellence: 'Excellence',
    excellenceText: 'We commit to quality in every project.',
    transparency: 'Transparency',
    transparencyText: 'Clear and honest communication with our clients.',
    
    // Contact Form
    contactTitle: 'Contact Us',
    contactSubtitle: "We're here to help grow your business",
    
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
    
    sendMessage: 'Send Message',
    
    // Footer
    footerDescription: 'We transform ideas into digital success. Connect with us to boost your business.',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    newsletter: 'Newsletter',
    newsletterDesc: 'Subscribe to get the latest updates and marketing tips.',
    yourEmail: 'Your email',
    subscribe: 'Subscribe',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'How long does it take to see results?',
    faq1A: 'Results vary by service, but we typically start seeing improvements within 2-4 weeks.',
    faq2Q: 'Do you work with businesses of all sizes?',
    faq2A: 'Yes, we work with startups, SMEs, and large enterprises, adapting our strategies to each need.',
    faq3Q: 'Do you provide regular reports?',
    faq3A: 'We provide detailed monthly reports and access to real-time dashboards.',
    faq4Q: 'What are your rates?',
    faq4A: 'Our rates vary depending on the project and services required. We offer customized packages to fit different budgets.',
    faq5Q: 'Do you offer technical support?',
    faq5A: 'Yes, we offer ongoing technical support for all our clients, including maintenance and regular updates.',
    
    // Stats
    satisfiedClients: 'Satisfied Clients',
    completedProjects: 'Completed Projects',
    successRate: 'Success Rate',
    support: 'Support',
    
    // CTA
    readyToGrow: 'Ready to grow your business?',
    contactToday: 'Contact us today and discover how we can transform your digital presence.',
    startNow: 'Start Now',
    
    // Services Page
    ourProcess: 'Our Process',
    processSubtitle: 'A structured approach to ensure your project success',
    analysis: 'Analysis',
    analysisDesc: 'We evaluate your current situation and define clear objectives.',
    strategy: 'Strategy',
    strategyDesc: 'We develop a personalized strategy for your business.',
    implementation: 'Implementation',
    implementationDesc: 'We execute the planned campaigns and automations.',
    optimization: 'Optimization',
    optimizationDesc: 'We continuously monitor and optimize results.',
    readyToPower: 'Ready to power your business?',
    freeConsultation: 'Contact us for a free consultation and discover how we can help you.',
    requestConsultation: 'Request Free Consultation',
    
    // About Page
    transformIdeas: 'We transform ideas into digital success',
    aboutLongDesc: 'Since our inception in 2020, we have helped over 500 companies achieve their digital goals, combining strategy, creativity and cutting-edge technology.',
    ourTeam: 'Our Team',
    teamSubtitle: 'Passionate professionals committed to your success',
    satisfactionRate: 'Satisfaction Rate',
    yearsExperience: 'Years of Experience',
    
    // Contact Page
    contactFormDesc: 'Fill out the form and we will get in touch with you soon',
    faqSubtitle: 'Answers to the most common questions about our services',
    ourLocation: 'Our Location',
    locationDesc: 'Visit us at our office or schedule a virtual meeting',
    mainOffice: 'Main Office',
    unitedStates: 'United States',
    
    // Contact Info
    emailUs: 'Send us an email and we will respond within 24 hours',
    callUs: 'Call us Monday to Friday from 9:00 to 18:00',
    visitUs: 'Visit us at our main office',
    businessHours: 'We are available during business hours',
    schedule: 'Schedule',
    mondayFriday: 'Mon - Fri: 9:00 - 18:00',
    
    // All Services
    allServices: 'View All Services',
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
