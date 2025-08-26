import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Rocket, 
  CheckCircle, 
} from 'lucide-react';
import ContactForm from '../../components/public/ContactForm';
import TestimonialsSection from '../../components/TestimonialsSection';
import { FeaturesSectionWithHoverEffects } from '../../components/ui/feature-section-with-hover-effects';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import ShaderBackground from '../../components/ui/shader-background';

const HomePage: React.FC = () => {
  const featuredServices: any[] = [];

  return (
    <div className="pt-16 md:pt-20 relative">
      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden min-h-screen flex items-center bg-transparent">
        <ShaderBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
          <div className="mb-4 md:mb-6">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium mb-6">
              AGENCIA DE DESARROLLO WEB & MARKETING DIGITAL
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] mb-4 md:mb-6 leading-tight">
            Desarrollo Web Profesional para tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#9B59B6]">
              Éxito Digital
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            En Azokia creamos soluciones web personalizadas que impulsan tu negocio. Desde sitios corporativos hasta e-commerce complejos.
          </p>
          <Link
            to="/contacto"
            className="group inline-flex items-center px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] text-white font-semibold rounded-xl shadow-2xl hover:shadow-[#1E90FF]/25 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          >
            <Rocket className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
            <span>Comenzar Proyecto</span>
            <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#0D0F2D] to-[#1a1f4a] relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium mb-6">
              Nuestro Enfoque
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAEAEA] mb-6">
              Transformamos tu visión en realidad digital
            </h2>
            <p className="text-lg text-[#EAEAEA]/70 max-w-3xl mx-auto">
              Combinamos tecnología de punta con diseño excepcional para crear experiencias web que convierten
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
              Desde desarrollo web hasta marketing digital, tenemos todo lo que necesitas para destacar online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service: any, index: number) => (
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
                    {service.features.map((feature: any, featureIndex: number) => (
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#0D0F2D] to-[#1a1f4a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium mb-6">
              Contacto
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#EAEAEA] mb-6">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-lg text-[#EAEAEA]/70 max-w-3xl mx-auto">
              Cuéntanos tu idea y te enviaremos una cotización gratuita
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

export default HomePage;
