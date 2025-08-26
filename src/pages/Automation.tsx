import React from 'react';
import { CheckCircle, Zap, Workflow, TrendingUp, Clock, Shield, Lightbulb, Layout, Code, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';

const Automation: React.FC = () => {
  const {  } = useLanguage();

  const automationServices = [
    {
      title: "Automatización de Procesos de Negocio (BPA)",
      description: "Diseñamos e implementamos flujos de trabajo automatizados para optimizar tus operaciones internas, desde la gestión de clientes hasta la contabilidad.",
      gradient: "from-blue-500 to-purple-600",
      icon: Workflow,
      features: [
        "Optimización de flujos de trabajo",
        "Reducción de errores manuales",
        "Aumento de la productividad del equipo",
        "Integración de sistemas legados",
      ],
    },
    {
      title: "Integración de Aplicaciones y Sistemas",
      description: "Conectamos tus herramientas y plataformas favoritas (CRM, ERP, Marketing, etc.) para que trabajen juntas sin fisuras, eliminando silos de información.",
      gradient: "from-green-500 to-teal-600",
      icon: Zap,
      features: [
        "Sincronización de datos en tiempo real",
        "Automatización de transferencias de datos",
        "Conectividad con cientos de apps",
        "API y Webhooks personalizados",
      ],
    },
    {
      title: "Automatización de Marketing y Ventas",
      description: "Implementamos secuencias automatizadas para nutrir leads, gestionar campañas de email, programar publicaciones en redes sociales y optimizar tu embudo de ventas.",
      gradient: "from-red-500 to-orange-600",
      icon: TrendingUp,
      features: [
        "Email marketing automatizado",
        "Gestión de leads y CRM",
        "Publicación y monitoreo en redes sociales",
        "Reportes y análisis de campañas",
      ],
    },
    {
      title: "Automatización de Tareas Repetitivas (RPA)",
      description: "Identificamos y automatizamos tareas manuales y repetitivas que consumen tiempo, liberando a tu equipo para que se enfoque en actividades de mayor valor.",
      gradient: "from-yellow-500 to-amber-600",
      icon: Clock,
      features: [
        "Automatización de entrada de datos",
        "Generación de informes automáticos",
        "Procesamiento de documentos",
        "Gestión de archivos y carpetas",
      ],
    },
  ];

  const automationTypes = [
    {
      title: "Automatización de Marketing",
      features: [
        "Envío de emails personalizados",
        "Segmentación de audiencia",
        "Programación de publicaciones en redes sociales",
        "Gestión de leads",
      ],
    },
    {
      title: "Automatización de Ventas",
      features: [
        "Seguimiento de oportunidades",
        "Generación de propuestas automáticas",
        "Gestión de CRM",
        "Notificaciones de ventas",
      ],
    },
    {
      title: "Automatización de Operaciones",
      features: [
        "Gestión de inventario",
        "Procesamiento de pedidos",
        "Facturación y contabilidad",
        "Gestión de proyectos",
      ],
    },
    {
      title: "Automatización de Soporte al Cliente",
      features: [
        "Respuestas automáticas a preguntas frecuentes",
        "Creación de tickets de soporte",
        "Encuestas de satisfacción",
        "Gestión de quejas",
      ],
    },
  ];

  const benefits = [
    {
      title: "Aumento de Productividad",
      metric: "+40%",
      description: "Libera a tu equipo de tareas repetitivas, permitiéndoles enfocarse en actividades estratégicas y creativas.",
      icon: TrendingUp,
    },
    {
      title: "Reducción de Costos",
      metric: "-30%",
      description: "Minimiza los gastos operativos al optimizar procesos y reducir la necesidad de intervención manual.",
      icon: Shield,
    },
    {
      title: "Mejora de la Eficiencia",
      metric: "+50%",
      description: "Acelera la ejecución de tareas y procesos, garantizando una mayor rapidez y precisión en todas las operaciones.",
      icon: Zap,
    },
    {
      title: "Toma de Decisiones Inteligente",
      metric: "Datos en Tiempo Real",
      description: "Accede a información precisa y actualizada para tomar decisiones estratégicas basadas en datos concretos.",
      icon: Lightbulb,
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Análisis y Descubrimiento",
      description: "Identificamos los procesos clave de tu negocio que pueden ser automatizados y definimos los objetivos.",
      icon: Lightbulb,
    },
    {
      step: 2,
      title: "Diseño de Flujos de Trabajo",
      description: "Creamos los diagramas de flujo y la lógica de las automatizaciones, asegurando una integración perfecta.",
      icon: Layout,
    },
    {
      step: 3,
      title: "Implementación y Pruebas",
      description: "Desarrollamos y configuramos las automatizaciones, realizando pruebas exhaustivas para garantizar su correcto funcionamiento.",
      icon: Code,
    },
    {
      step: 4,
      title: "Monitoreo y Optimización",
      description: "Supervisamos el rendimiento de las automatizaciones y realizamos ajustes para asegurar su eficiencia continua.",
      icon: Rocket,
    },
  ];

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
