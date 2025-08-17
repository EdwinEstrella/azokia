import React from 'react';
import { Target, TrendingUp, Users, BarChart3, Search, Share2, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';

const DigitalMarketing: React.FC = () => {
  const { t } = useLanguage();

  const marketingServices = [
    {
      icon: Target,
      title: 'Facebook & Instagram Ads',
      description: 'Campañas publicitarias altamente segmentadas que maximizan tu ROI en las redes sociales más importantes.',
      features: [
        'Segmentación avanzada de audiencias',
        'Creativos optimizados para conversión',
        'A/B testing de anuncios',
        'Retargeting inteligente',
        'Optimización de presupuesto',
        'Reportes detallados de ROI'
      ],
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Search,
      title: 'Google Ads & SEM',
      description: 'Posiciona tu negocio en los primeros resultados de Google y captura clientes con alta intención de compra.',
      features: [
        'Campañas de búsqueda optimizadas',
        'Google Shopping para e-commerce',
        'Display y remarketing',
        'Extensiones de anuncios',
        'Optimización de Quality Score',
        'Análisis de palabras clave'
      ],
      gradient: 'from-green-500 to-blue-500'
    },
    {
      icon: Share2,
      title: 'Gestión de Redes Sociales',
      description: 'Construye una comunidad sólida y aumenta el engagement con contenido estratégico y auténtico.',
      features: [
        'Estrategia de contenido personalizada',
        'Calendario editorial',
        'Community management',
        'Diseño de piezas gráficas',
        'Análisis de métricas',
        'Gestión de crisis'
      ],
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics y Optimización',
      description: 'Medimos, analizamos y optimizamos cada aspecto de tus campañas para maximizar resultados.',
      features: [
        'Google Analytics 4 setup',
        'Dashboards personalizados',
        'Tracking de conversiones',
        'Análisis de embudo',
        'Reportes automatizados',
        'Recomendaciones de mejora'
      ],
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  const additionalServices = [
    {
      title: 'SEO y Posicionamiento Orgánico',
      features: [
        'Auditoría SEO completa',
        'Optimización on-page',
        'Link building estratégico',
        'SEO local para negocios',
        'Contenido optimizado',
        'Monitoreo de rankings'
      ]
    },
    {
      title: 'Email Marketing',
      features: [
        'Automatizaciones de email',
        'Segmentación de listas',
        'Diseño de newsletters',
        'A/B testing de asuntos',
        'Análisis de deliverability',
        'Integración con CRM'
      ]
    },
    {
      title: 'Marketing de Contenidos',
      features: [
        'Estrategia de contenido',
        'Blog corporativo',
        'Videos promocionales',
        'Infografías y ebooks',
        'Webinars y eventos',
        'Distribución multicanal'
      ]
    },
    {
      title: 'Influencer Marketing',
      features: [
        'Identificación de influencers',
        'Negociación de colaboraciones',
        'Gestión de campañas',
        'Medición de impacto',
        'Contratos y legales',
        'ROI tracking'
      ]
    }
  ];

  const results = [
    {
      icon: TrendingUp,
      title: 'Aumento de Ventas',
      description: 'Incrementamos las ventas de nuestros clientes en promedio un 250% en los primeros 6 meses.',
      metric: '+250%',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Crecimiento de Audiencia',
      description: 'Expandimos el alcance orgánico y pagado para llegar a más clientes potenciales.',
      metric: '+400%',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Mejor ROI',
      description: 'Optimizamos cada euro invertido para obtener el máximo retorno de inversión.',
      metric: '5:1 ROI',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Reducción de CAC',
      description: 'Disminuimos el costo de adquisición de clientes mediante optimización continua.',
      metric: '-60%',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Auditoría Digital',
      description: 'Analizamos tu presencia digital actual y identificamos oportunidades de mejora.',
      icon: Search
    },
    {
      step: '02',
      title: 'Estrategia Personalizada',
      description: 'Desarrollamos una estrategia de marketing digital adaptada a tus objetivos.',
      icon: Target
    },
    {
      step: '03',
      title: 'Implementación',
      description: 'Ejecutamos las campañas y tácticas definidas en la estrategia.',
      icon: Rocket
    },
    {
      step: '04',
      title: 'Optimización Continua',
      description: 'Monitoreamos, analizamos y optimizamos constantemente para mejorar resultados.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="pt-20 bg-[#0D0F2D]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] via-pink-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
            {marketingServices.map((service, index) => (
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
            {additionalServices.map((service, index) => (
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
                    {service.features.map((feature, featureIndex) => (
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

      {/* Results */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden">
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
            {results.map((result, index) => (
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
            {processSteps.map((process, index) => (
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