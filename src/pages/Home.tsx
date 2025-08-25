import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Rocket, 
  CheckCircle, 
  Calendar, 
  Brain,
  ShoppingCart,
  Briefcase,
  Smartphone,
  MousePointer,
  Settings,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';
import TestimonialsSection from '../components/TestimonialsSection';
import { FeaturesSectionWithHoverEffects } from '../components/ui/feature-section-with-hover-effects';
import { BackgroundGradient } from '../components/ui/background-gradient';
import ShaderBackground from '../components/ui/shader-background';

const Home: React.FC = () => {
  const { } = useLanguage();

  // Servicios destacados según especificación - SIN EMOJIS
  const featuredServices = [
    {
      icon: Brain,
      title: 'Inteligencia Artificial aplicada al marketing',
      description: 'Chatbots inteligentes, automatizaciones con IA y análisis predictivo para maximizar tus resultados.',
      features: ['Chatbots con IA', 'Análisis predictivo', 'Automatización inteligente', 'Segmentación de audiencias', 'Personalización de contenido'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce y Tiendas Online',
      description: 'Plataformas de comercio electrónico completas con pasarelas de pago, gestión de inventario y automatización de ventas.',
      features: ['Tienda online completa', 'Pasarelas de pago', 'Gestión de inventario', 'Automatización de pedidos', 'Panel administrativo', 'Reportes de ventas'],
    },
    {
      icon: Briefcase,
      title: 'Branding y diseño de marca',
      description: 'Identidad visual completa que conecta emocionalmente con tu audiencia.',
      features: ['Logo y branding', 'Identidad visual', 'Manual de marca'],
    },
    {
      icon: Smartphone,
      title: 'Redes sociales',
      description: 'Gestión profesional de redes sociales con contenido que genera engagement real.',
      features: ['Gestión de RRSS', 'Contenido viral', 'Community management'],
    },
    {
      icon: MousePointer,
      title: 'Landing pages que convierten',
      description: 'Páginas de aterrizaje optimizadas para maximizar conversiones y generar leads.',
      features: ['Diseño optimizado', 'A/B Testing', 'Alta conversión'],
    },
    {
      icon: Settings,
      title: 'Automatización y CRM',
      description: 'Sistemas CRM automatizados que nutren leads y cierran ventas automáticamente.',
      features: ['CRM automatizado', 'Lead nurturing', 'Seguimiento automático'],
    }
  ];

  return (
    <div className="pt-16 md:pt-20 relative">
      {/* Hero Section con ShaderBackground - FONDO AZUL ELIMINADO */}
      <section className="py-12 md:py-20 relative overflow-hidden min-h-screen flex items-center bg-transparent">
        <ShaderBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
          <div className="mb-4 md:mb-6">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium mb-6">
              AGENCIA DE MARKETING DIGITAL &amp; IA
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] mb-4 md:mb-6 leading-tight">
            Construyamos Tu Historia de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#9B59B6]">
              Éxito Digital
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            En Azokia combinamos automatización, IA y estrategia para crear páginas web, embudos de venta y campañas que sí convierten.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] text-white font-semibold rounded-xl shadow-2xl hover:shadow-[#1E90FF]/25 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          >
            <Rocket className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
            <span>Comenzar Ahora</span>
            <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-12 md:py-20 bg-transparent relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium mb-6">
              Nuestro Enfoque
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAEAEA] mb-6">
              Transformamos tu visión en resultados digitales
            </h2>
            <p className="text-lg text-[#EAEAEA]/70 max-w-3xl mx-auto">
              Combinamos tecnología de punta con estrategias probadas para impulsar tu negocio al siguiente nivel
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* Sección de Servicios Destacados */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#0D0F2D] to-[#1a1f4a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#1E90FF]/20 to-[#9B59B6]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-[#9B59B6]/20 to-[#2ECC71]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium mb-6">
              Servicios
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAEAEA] mb-6">
              Soluciones integrales para tu negocio
            </h2>
            <p className="text-lg text-[#EAEAEA]/70 max-w-3xl mx-auto">
              Desde automatización hasta diseño web, tenemos todo lo que necesitas para destacar en el mundo digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <BackgroundGradient key={index} className="rounded-[22px] p-4 bg-slate-900 h-full">
                <div className="flex flex-col items-start p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[18px] h-full">
                  <div className="p-3 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-lg mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#EAEAEA] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#EAEAEA]/70 mb-4 flex-1">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-[#EAEAEA]/80">
                        <CheckCircle className="h-4 w-4 text-[#1E90FF] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <TestimonialsSection />

      {/* Sección de Contacto */}
      <section className="py-12 md:py-20 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium mb-6">
              Contacto
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAEAEA] mb-6">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-lg text-[#EAEAEA]/70 max-w-3xl mx-auto">
              Cuéntanos tu idea y juntos construiremos la solución perfecta para tu negocio
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
