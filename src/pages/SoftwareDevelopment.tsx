import React from 'react';
import { Code2, Database, Cloud, Cpu, Shield, Zap, CheckCircle, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';

const SoftwareDevelopment: React.FC = () => {
  const {  } = useLanguage();

  const softwareServices = [
    {
      icon: Code2,
      title: 'Aplicaciones Web Personalizadas',
      description: 'Desarrollamos aplicaciones web a medida que se adaptan perfectamente a tus procesos de negocio.',
      features: [
        'Arquitectura escalable',
        'Interfaz intuitiva',
        'Integración con APIs',
        'Base de datos optimizada',
        'Seguridad avanzada',
        'Mantenimiento incluido'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Sistemas de Gestión (CRM/ERP)',
      description: 'Plataformas completas para gestionar clientes, inventarios, ventas y operaciones empresariales.',
      features: [
        'Gestión de clientes',
        'Control de inventario',
        'Reportes avanzados',
        'Dashboard ejecutivo',
        'Automatización de procesos',
        'Integración contable'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'APIs y Microservicios',
      description: 'Desarrollamos APIs robustas y microservicios que conectan y potencian tus sistemas.',
      features: [
        'APIs RESTful',
        'Documentación completa',
        'Autenticación segura',
        'Escalabilidad automática',
        'Monitoreo en tiempo real',
        'Versionado de APIs'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'Integraciones y Automatizaciones',
      description: 'Conectamos tus sistemas existentes y automatizamos procesos para mayor eficiencia.',
      features: [
        'Integración de sistemas',
        'Migración de datos',
        'Sincronización automática',
        'Workflows personalizados',
        'Notificaciones inteligentes',
        'Backup automático'
      ],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'React', icon: '⚛️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description: 'Implementamos las mejores prácticas de seguridad para proteger tu información.'
    },
    {
      icon: Zap,
      title: 'Alto Rendimiento',
      description: 'Optimizamos cada línea de código para garantizar la máxima velocidad y eficiencia.'
    },
    {
      icon: Cloud,
      title: 'Escalabilidad',
      description: 'Arquitecturas que crecen contigo, desde startup hasta empresa consolidada.'
    },
    {
      icon: Cpu,
      title: 'Tecnología Moderna',
      description: 'Utilizamos las últimas tecnologías y frameworks para crear soluciones futuras.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Análisis de Requerimientos',
      description: 'Entendemos a fondo tus necesidades y definimos especificaciones técnicas.',
      icon: Database
    },
    {
      step: '02',
      title: 'Arquitectura y Diseño',
      description: 'Diseñamos la arquitectura del sistema y los flujos de usuario.',
      icon: Code2
    },
    {
      step: '03',
      title: 'Desarrollo Ágil',
      description: 'Programamos usando metodologías ágiles con entregas incrementales.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Testing y Despliegue',
      description: 'Probamos exhaustivamente y desplegamos en producción de forma segura.',
      icon: Rocket
    }
  ];

  return (
    <div className="pt-20 bg-[#0D0F2D]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-blue-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: `${2}s` }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#EAEAEA] mb-6">
            Desarrollo de Software
          </h1>
          <p className="text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto mb-8">
            Creamos software personalizado que transforma la manera en que tu empresa opera y crece
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-gradient-to-r from-[#9B59B6] to-[#1E90FF] rounded-full text-white text-sm font-medium">
              Código Limpio
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-[#9B59B6] to-[#1E90FF] rounded-full text-white text-sm font-medium">
              Arquitectura Escalable
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-[#9B59B6] to-[#1E90FF] rounded-full text-white text-sm font-medium">
              Metodología Ágil
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9B59B6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E90FF]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Soluciones de Software Personalizadas
            </h2>
            <p className="text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto">
              Desarrollamos software que se adapta exactamente a tus necesidades empresariales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareServices.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#9B59B6]/10 to-[#1E90FF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 transform group-hover:scale-110`}>
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

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] to-[#1a1f4a] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              ¿Por qué elegir nuestro desarrollo de software?
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Ventajas que marcan la diferencia en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#9B59B6] to-[#1E90FF] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 transform group-hover:scale-110">
                  <benefit.icon className="h-8 w-8 text-white" />
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

      {/* Technologies */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Stack Tecnológico
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Utilizamos las tecnologías más robustas y modernas del mercado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
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
              Metodología de Desarrollo
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Un proceso probado que garantiza resultados excepcionales
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
                  <div className="w-20 h-20 bg-gradient-to-br from-[#9B59B6] to-[#1E90FF] rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300 transform group-hover:scale-110">
                    <process.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
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
              ¿Tienes una idea de software?
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Conversemos sobre cómo podemos convertirla en realidad
            </p>
          </div>

          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#9B59B6]/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9B59B6]/5 to-[#1E90FF]/5 rounded-3xl"></div>
            <div className="relative">
              <ContactForm compact={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
