import React from 'react';
import { Bot, Zap, MessageSquare, BarChart3, Calendar, Bell, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';

const Automation: React.FC = () => {
  const { t } = useLanguage();

  const automationServices = [
    {
      icon: MessageSquare,
      title: 'Chatbots y Asistentes Virtuales',
      description: 'Automatiza la atención al cliente 24/7 con chatbots inteligentes para WhatsApp, Telegram y web.',
      features: [
        'Respuestas automáticas inteligentes',
        'Integración con WhatsApp Business',
        'Chatbots para Telegram',
        'Asignación automática de conversaciones',
        'Escalamiento a agentes humanos',
        'Análisis de satisfacción'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Automatización de Ventas',
      description: 'Optimiza tu embudo de ventas con automatizaciones que nutren leads y cierran más deals.',
      features: [
        'Captura automática de leads',
        'Seguimiento personalizado',
        'Scoring de leads',
        'Notificaciones al equipo de ventas',
        'Creación automática de oportunidades',
        'Reportes de conversión'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Gestión de Citas y Recordatorios',
      description: 'Automatiza la programación de citas y envía recordatorios para reducir el ausentismo.',
      features: [
        'Calendario inteligente',
        'Recordatorios automáticos',
        'Confirmación de citas',
        'Reprogramación automática',
        'Integración con Google Calendar',
        'Notificaciones multicanal'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Bell,
      title: 'Reportes y Alertas Automáticas',
      description: 'Mantente informado con reportes automáticos y alertas en tiempo real sobre tu negocio.',
      features: [
        'Reportes diarios/semanales',
        'Alertas de rendimiento',
        'Dashboards en tiempo real',
        'Notificaciones personalizadas',
        'Análisis predictivo',
        'Exportación automática'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const automationTypes = [
    {
      title: 'Automatización de Atención al Cliente',
      features: [
        'Autorespuesta inteligente 24/7',
        'Asignación automática por especialidad',
        'Chatbot híbrido (bot + humano)',
        'Encuestas de satisfacción automáticas',
        'Respuesta fuera de horario',
        'Base de conocimientos integrada'
      ]
    },
    {
      title: 'Automatización de Marketing',
      features: [
        'Email marketing automatizado',
        'Segmentación dinámica de audiencias',
        'Campañas por comportamiento',
        'Lead scoring automático',
        'Retargeting inteligente',
        'A/B testing automatizado'
      ]
    },
    {
      title: 'Automatización Operativa',
      features: [
        'Gestión automática de inventario',
        'Procesamiento de pedidos',
        'Facturación automática',
        'Control de asistencia',
        'Backup automático de datos',
        'Monitoreo de sistemas'
      ]
    },
    {
      title: 'Automatización de Reportes',
      features: [
        'Reportes ejecutivos automáticos',
        'KPIs en tiempo real',
        'Alertas de métricas críticas',
        'Análisis de tendencias',
        'Comparativas automáticas',
        'Distribución programada'
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Ahorro de Tiempo',
      description: 'Reduce hasta 40 horas semanales de trabajo manual con automatizaciones inteligentes.',
      metric: '40h/semana'
    },
    {
      icon: Bot,
      title: 'Disponibilidad 24/7',
      description: 'Tus sistemas trabajan las 24 horas, los 7 días de la semana sin descanso.',
      metric: '24/7'
    },
    {
      icon: BarChart3,
      title: 'Mayor Conversión',
      description: 'Aumenta tus conversiones hasta un 300% con seguimiento automatizado.',
      metric: '+300%'
    },
    {
      icon: CheckCircle,
      title: 'Cero Errores',
      description: 'Elimina errores humanos con procesos automatizados y validaciones.',
      metric: '0 errores'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Análisis de Procesos',
      description: 'Identificamos qué procesos pueden automatizarse para mayor impacto.',
      icon: BarChart3
    },
    {
      step: '02',
      title: 'Diseño de Flujos',
      description: 'Creamos diagramas de flujo detallados para cada automatización.',
      icon: Bot
    },
    {
      step: '03',
      title: 'Implementación n8n',
      description: 'Desarrollamos las automatizaciones usando n8n y herramientas avanzadas.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Testing y Optimización',
      description: 'Probamos y optimizamos cada automatización para máximo rendimiento.',
      icon: Rocket
    }
  ];

  return (
    <div className="pt-20 bg-[#0D0F2D]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] via-green-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
            {automationServices.map((service, index) => (
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
                    {service.features.map((feature, featureIndex) => (
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
            {automationTypes.map((type, index) => (
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
                    {type.features.map((feature, featureIndex) => (
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
            {benefits.map((benefit, index) => (
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
            {processSteps.map((process, index) => (
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