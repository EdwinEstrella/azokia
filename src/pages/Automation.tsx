import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';

const Automation: React.FC = () => {
  const {  } = useLanguage();

  const automationServices: any[] = [];

  const automationTypes: any[] = [];

  const benefits: any[] = [];

  const processSteps: any[] = [];

  return (
    <div className="pt-20 bg-[#0D0F2D]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] via-green-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: `${2}s` }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#EAEAEA] mb-6">
            Automatización con n8n
          </h1>
          <p className="text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto mb-8">
            Libera el potencial de tu negocio con automatizaciones inteligentes que trabajan 24/7 para ti
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-gradient-to-r from-[#2ECC71] to-[#1E90FF] rounded-full text-white text-sm font-medium">
              Sin Código
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-[#2ECC71] to-[#1E90FF] rounded-full text-white text-sm font-medium">
              Integración Total
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-[#2ECC71] to-[#1E90FF] rounded-full text-white text-sm font-medium">
              ROI Inmediato
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2ECC71]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E90FF]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Servicios de Automatización
            </h2>
            <p className="text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto">
              Automatizamos los procesos clave de tu negocio para maximizar eficiencia y resultados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationServices.map((service: any, index: number) => (
              <div
                key={service.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/10 to-[#1E90FF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 transform group-hover:scale-110`}>
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

      {/* Automation Types */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] to-[#1a1f4a] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Tipos de Automatización
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Automatizaciones especializadas para cada área de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTypes.map((type: any, index: number) => (
              <div
                key={type.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/10 to-[#1E90FF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-[#EAEAEA] mb-6">
                    {type.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {type.features.map((feature: any, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start text-sm text-[#EAEAEA]/80">
                        <CheckCircle className="h-4 w-4 text-[#2ECC71] mr-3 flex-shrink-0 mt-0.5" />
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

      {/* Benefits */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Beneficios de la Automatización
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Resultados medibles que transforman tu operación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit: any, index: number) => (
              <div
                key={benefit.title}
                className="group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#2ECC71] to-[#1E90FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 transform group-hover:scale-110">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#2ECC71] mb-2">
                  {benefit.metric}
                </div>
                <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#EAEAEA]/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
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
              Proceso de Automatización
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Metodología probada para implementar automatizaciones exitosas
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
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2ECC71] to-[#1E90FF] rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-green-500/25 transition-all duration-300 transform group-hover:scale-110">
                    <process.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
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
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Descubre qué procesos podemos automatizar para ti
            </p>
          </div>

          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#2ECC71]/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/5 to-[#1E90FF]/5 rounded-3xl"></div>
            <div className="relative">
              <ContactForm compact={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automation;
