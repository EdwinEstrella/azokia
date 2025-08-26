import React from 'react';
import { CheckCircle, Search, Megaphone, BarChart, Users, Lightbulb, Code, Rocket, TrendingUp, DollarSign, Eye, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';

const DigitalMarketing: React.FC = () => {
  const {  } = useLanguage();

  const marketingServices = [
    {
      title: "Optimización para Motores de Búsqueda (SEO)",
      description: "Mejoramos la visibilidad de tu sitio web en Google y otros buscadores, atrayendo tráfico orgánico de alta calidad y aumentando tu autoridad online.",
      gradient: "from-blue-500 to-purple-600",
      icon: Search,
      features: [
        "Auditoría SEO completa",
        "Investigación de palabras clave",
        "Optimización on-page y off-page",
        "Construcción de enlaces (link building)",
      ],
    },
    {
      title: "Publicidad en Motores de Búsqueda (SEM/PPC)",
      description: "Creamos y gestionamos campañas de anuncios pagados en Google Ads y otras plataformas, maximizando tu retorno de inversión y generando leads cualificados de forma rápida.",
      gradient: "from-green-500 to-teal-600",
      icon: Megaphone,
      features: [
        "Estrategia de palabras clave y audiencias",
        "Creación y optimización de anuncios",
        "Gestión de pujas y presupuestos",
        "Remarketing y audiencias personalizadas",
      ],
    },
    {
      title: "Marketing de Contenidos",
      description: "Desarrollamos contenido relevante y valioso que atrae, educa y convierte a tu audiencia. Desde blogs y artículos hasta videos y ebooks, posicionamos tu marca como líder de pensamiento.",
      gradient: "from-red-500 to-orange-600",
      icon: FileText,
      features: [
        "Estrategia de contenidos",
        "Creación de blogs y artículos",
        "Producción de video y multimedia",
        "Distribución y promoción de contenidos",
      ],
    },
    {
      title: "Marketing en Redes Sociales (SMM)",
      description: "Construimos y gestionamos tu presencia en redes sociales, creando comunidades comprometidas, aumentando el reconocimiento de marca y dirigiendo tráfico a tu sitio web.",
      gradient: "from-yellow-500 to-amber-600",
      icon: Users,
      features: [
        "Estrategia de redes sociales",
        "Creación y programación de contenido",
        "Gestión de campañas de anuncios sociales",
        "Interacción con la comunidad",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Email Marketing",
      features: [
        "Diseño de campañas de email",
        "Segmentación de listas de correo",
        "Automatización de flujos de email",
        "Análisis de rendimiento de campañas",
      ],
    },
    {
      title: "Analítica Web y Reportes",
      features: [
        "Configuración de Google Analytics y Tag Manager",
        "Monitoreo de métricas clave",
        "Reportes personalizados y dashboards",
        "Identificación de oportunidades de mejora",
      ],
    },
    {
      title: "Diseño Web y Landing Pages",
      features: [
        "Diseño de sitios web optimizados para conversión",
        "Creación de landing pages de alto rendimiento",
        "Optimización de la experiencia de usuario (UX)",
        "Pruebas A/B para maximizar resultados",
      ],
    },
    {
      title: "Consultoría de Marketing Digital",
      features: [
        "Auditorías de marketing digital",
        "Desarrollo de estrategias personalizadas",
        "Capacitación y talleres para equipos",
        "Asesoramiento continuo y soporte",
      ],
    },
  ];

  const results = [
    {
      title: "Aumento de Tráfico Orgánico",
      metric: "+150%",
      description: "Incrementamos la visibilidad de tu marca en los motores de búsqueda, atrayendo más visitantes a tu sitio web.",
      gradient: "from-blue-500 to-purple-600",
      icon: TrendingUp,
    },
    {
      title: "Generación de Leads Cualificados",
      metric: "+80%",
      description: "Diseñamos estrategias para captar contactos interesados en tus productos o servicios, listos para la conversión.",
      gradient: "from-green-500 to-teal-600",
      icon: DollarSign,
    },
    {
      title: "Mejora del ROI en Publicidad",
      metric: "+200%",
      description: "Optimizamos tus campañas de pago para que cada euro invertido genere el máximo retorno posible.",
      gradient: "from-red-500 to-orange-600",
      icon: BarChart,
    },
    {
      title: "Mayor Reconocimiento de Marca",
      metric: "+120%",
      description: "Construimos una presencia digital sólida y coherente que aumenta la confianza y la lealtad de tus clientes.",
      gradient: "from-yellow-500 to-amber-600",
      icon: Eye,
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Análisis y Estrategia",
      description: "Investigamos tu mercado, competencia y audiencia para diseñar una estrategia de marketing digital a medida.",
      icon: Lightbulb,
    },
    {
      step: 2,
      title: "Implementación y Ejecución",
      description: "Ponemos en marcha las campañas y acciones definidas, creando contenido y optimizando plataformas.",
      icon: Code,
    },
    {
      step: 3,
      title: "Monitoreo y Optimización",
      description: "Supervisamos el rendimiento en tiempo real, realizamos ajustes y optimizaciones para mejorar los resultados.",
      icon: BarChart,
    },
    {
      step: 4,
      title: "Reporte y Análisis",
      description: "Te entregamos informes detallados con métricas clave y recomendaciones para futuras acciones.",
      icon: Rocket,
    },
  ];

  return (
    <div className="pt-20 bg-[#0D0F2D]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] via-pink-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: `${2}s` }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#EAEAEA] mb-6">
            Marketing Digital
          </h1>
          <p className="text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto mb-8">
            Estrategias de marketing digital que generan resultados reales y crecimiento sostenible para tu negocio
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-gradient-to-r from-[#E91E63] to-[#9B59B6] rounded-full text-white text-sm font-medium">
              ROI Garantizado
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-[#E91E63] to-[#9B59B6] rounded-full text-white text-sm font-medium">
              Datos en Tiempo Real
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-[#E91E63] to-[#9B59B6] rounded-full text-white text-sm font-medium">
              Estrategia Personalizada
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E91E63]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9B59B6]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Servicios de Marketing Digital
            </h2>
            <p className="text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto">
              Soluciones completas para hacer crecer tu presencia digital y aumentar tus ventas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingServices.map((service: any, index: number) => (
              <div
                key={service.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/10 to-[#9B59B6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300 transform group-hover:scale-110`}>
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

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] to-[#1a1f4a] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Servicios Complementarios
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Estrategias adicionales para maximizar tu presencia digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service: any, index: number) => (
              <div
                key={service.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/10 to-[#9B59B6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-[#EAEAEA] mb-6">
                    {service.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature: any, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start text-sm text-[#EAEAEA]/80">
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

      {/* Results */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] to-[#1a1f4a] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Resultados que Hablan por Sí Solos
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Métricas reales de nuestros clientes más exitosos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result: any, index: number) => (
              <div
                key={result.title}
                className="group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${result.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300 transform group-hover:scale-110`}>
                  <result.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#E91E63] mb-2">
                  {result.metric}
                </div>
                <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">
                  {result.title}
                </h3>
                <p className="text-[#EAEAEA]/70 text-sm leading-relaxed">
                  {result.description}
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
              Metodología de Trabajo
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Un proceso estructurado que garantiza resultados excepcionales
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
                  <div className="w-20 h-20 bg-gradient-to-br from-[#E91E63] to-[#9B59B6] rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-pink-500/25 transition-all duration-300 transform group-hover:scale-110">
                    <process.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
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
              ¿Listo para hacer crecer tu negocio?
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Conversemos sobre tu estrategia de marketing digital
            </p>
          </div>

          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#E91E63]/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/5 to-[#9B59B6]/5 rounded-3xl"></div>
            <div className="relative">
              <ContactForm compact={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
