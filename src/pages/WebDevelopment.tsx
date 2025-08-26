import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';

const WebDevelopment: React.FC = () => {
  const {  } = useLanguage();

  const webServices: any[] = [];

  const technologies: any[] = [];

  const processSteps: any[] = [];

  return (
    <div className="pt-20 bg-[#0D0F2D]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: `${2}s` }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#EAEAEA] mb-6">
            Desarrollo Web
          </h1>
          <p className="text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto mb-8">
            Creamos sitios web y aplicaciones que no solo se ven increíbles, sino que también convierten visitantes en clientes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium">
              Responsive Design
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium">
              SEO Optimizado
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium">
              Carga Rápida
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1E90FF]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9B59B6]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Nuestros Servicios de Desarrollo Web
            </h2>
            <p className="text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto">
              Soluciones web completas adaptadas a tus necesidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webServices.map((service: any, index: number) => (
              <div
                key={service.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#9B59B6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 transform group-hover:scale-110`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#EAEAEA] mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#EAEAEA]/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature: any, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center text-sm text-[#EAEAEA]/80">
                        <CheckCircle className="h-4 w-4 text-[#2ECC71] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Tecnologías que Utilizamos
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Las mejores herramientas para crear soluciones web de vanguardia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech: any, index: number) => (
              <div
                key={tech.name}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center animate-slide-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="text-sm font-medium text-[#EAEAEA]">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] to-[#1a1f4a] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Nuestro Proceso de Desarrollo
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Un enfoque estructurado para garantizar el éxito de tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((process: any, index: number) => (
              <div
                key={process.step}
                className="group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1E90FF] to-[#9B59B6] rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300 transform group-hover:scale-110">
                    <process.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#EAEAEA] mb-4">
                  {process.title}
                </h3>
                <p className="text-[#EAEAEA]/70 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              ¿Listo para tu nuevo sitio web?
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Cuéntanos tu proyecto y te ayudamos a hacerlo realidad
            </p>
          </div>

          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#1E90FF]/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/5 to-[#9B59B6]/5 rounded-3xl"></div>
            <div className="relative">
              <ContactForm compact={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
