import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Rocket, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Bot, 
  Globe, 
  Users, 
  CheckCircle, 
  Calendar, 
  Brain,
  ShoppingCart,
  Briefcase,
  Smartphone,
  MousePointer,
  Settings,
  Stethoscope,
  Cpu,
  Store
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { HeroSection } from '../components/ui/hero-section-dark';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const { } = useLanguage();

  // Estados para los carruseles
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  // Beneficios principales según especificación - SIN EMOJIS
  const benefits = [
    {
      icon: Bot,
      title: 'Automatizamos procesos clave',
      description: 'Implementamos automatizaciones inteligentes que optimizan tu flujo de trabajo y aumentan la eficiencia operativa.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Diseños web optimizados para ventas',
      description: 'Creamos páginas web y landing pages que convierten visitantes en clientes reales.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Estrategias digitales que escalan',
      description: 'Desarrollamos campañas de marketing digital que crecen junto con tu negocio.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Acompañamiento real con expertos',
      description: 'Nuestro equipo te guía en cada paso de tu transformación digital.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  // Servicios destacados según especificación - SIN EMOJIS
  const featuredServices = [
    {
      icon: Brain,
      title: 'Inteligencia Artificial aplicada al marketing',
      description: 'Chatbots inteligentes, automatizaciones con IA y análisis predictivo para maximizar tus resultados.',
      features: ['Chatbots con IA', 'Análisis predictivo', 'Automatización inteligente'],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: ShoppingCart,
      title: 'Tiendas online y embudos automatizados',
      description: 'E-commerce completos con sistemas de automatización que venden las 24 horas del día.',
      features: ['E-commerce completo', 'Embudos de venta', 'Automatización de ventas'],
      gradient: 'from-green-600 to-blue-600'
    },
    {
      icon: Briefcase,
      title: 'Branding y diseño de marca',
      description: 'Identidad visual completa que conecta emocionalmente con tu audiencia.',
      features: ['Logo y branding', 'Identidad visual', 'Manual de marca'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: Smartphone,
      title: 'Redes sociales',
      description: 'Gestión profesional de redes sociales con contenido que genera engagement real.',
      features: ['Gestión de RRSS', 'Contenido viral', 'Community management'],
      gradient: 'from-pink-600 to-red-600'
    },
    {
      icon: MousePointer,
      title: 'Landing pages que convierten',
      description: 'Páginas de aterrizaje optimizadas para maximizar conversiones y generar leads.',
      features: ['Diseño optimizado', 'A/B Testing', 'Alta conversión'],
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      icon: Settings,
      title: 'Automatización y CRM',
      description: 'Sistemas CRM automatizados que nutren leads y cierran ventas automáticamente.',
      features: ['CRM automatizado', 'Lead nurturing', 'Seguimiento automático'],
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  // Casos de éxito según especificación - SIN EMOJIS
  const successCases = [
    {
      title: 'Clínica Vibe',
      category: 'E-commerce',
      description: 'Creamos el ecommerce para Clínica Vibe y aumentaron un 230% sus conversiones en 3 meses.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: '+230% conversiones',
      metric: '3 meses',
      icon: Stethoscope,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'TechStart Solutions',
      category: 'Automatización',
      description: 'Sistema completo de automatización que redujo 40 horas semanales de trabajo manual.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: '-40 horas/semana',
      metric: 'Automatización',
      icon: Cpu,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Local Business Pro',
      category: 'Marketing Digital',
      description: 'Estrategia integral que generó 500+ leads cualificados en 2 meses.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: '+500 leads',
      metric: '2 meses',
      icon: Store,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  // Testimonios
  const testimonials = [
    {
      name: 'María González',
      company: 'TechStart Solutions',
      role: 'CEO',
      content: 'Trabajar con Azokia fue una de las mejores decisiones para mi negocio. Su enfoque en automatización transformó completamente nuestros procesos.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Carlos Rodríguez',
      company: 'E-commerce Plus',
      role: 'Director de Marketing',
      content: 'Trabajar con Azokia fue una de las mejores decisiones para mi negocio. Los resultados superaron todas nuestras expectativas.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ana Martínez',
      company: 'Local Business Pro',
      role: 'Fundadora',
      content: 'Trabajar con Azokia fue una de las mejores decisiones para mi negocio. Su profesionalismo es excepcional.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  // Efectos para auto-scroll de carruseles
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const projectInterval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % successCases.length);
    }, 4000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(projectInterval);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % successCases.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + successCases.length) % successCases.length);
  };

  return (
    <div className="pt-20 bg-[#0D0F2D] relative">
      {/* New Hero Section */}
      <HeroSection
        title="AGENCIA DE MARKETING DIGITAL & IA"
        subtitle={{
          regular: "Construyamos Tu Historia de ",
          gradient: "Éxito Digital"
        }}
        description="En Azokia combinamos automatización, IA y estrategia para crear páginas web, embudos de venta y campañas que sí convierten."
        ctaText="Comenzar Ahora"
        ctaHref="/contact"
        bottomImage={{
          light: "/original-25a987b5055b056376f5d1a10fad76c2.webp",
          dark: "/original-25a987b5055b056376f5d1a10fad76c2.webp"
        }}
        gridOptions={{
          angle: 65,
          opacity: 0.3,
          cellSize: 60,
          lightLineColor: "#1E90FF",
          darkLineColor: "#9B59B6"
        }}
        className="min-h-screen"
      />

      {/* Beneficios Rápidos - Tarjetas profesionales con íconos */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden z-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1E90FF]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9B59B6]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              ¿Por qué elegir Azokia?
            </h2>
            <p className="text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto">
              Beneficios que transformarán tu negocio digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#9B59B6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  {/* Icono profesional con gradiente */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 transform group-hover:scale-110`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-[#EAEAEA]/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Destacados - Grid profesional con íconos */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] to-[#1a1f4a] relative overflow-hidden z-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#1E90FF]/10 to-[#9B59B6]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-[#9B59B6]/10 to-[#2ECC71]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Servicios Destacados
            </h2>
            <p className="text-xl text-[#EAEAEA]/70 max-w-3xl mx-auto">
              Soluciones tecnológicas que impulsan tu crecimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#9B59B6]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  {/* Icono profesional con gradiente personalizado */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 transform group-hover:scale-110`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#EAEAEA] mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#EAEAEA]/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
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

      {/* Casos de Éxito - Tarjetas profesionales con íconos */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden z-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1E90FF]/5 to-[#9B59B6]/5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Resultados reales que hablan por sí solos
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {successCases.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-[#1E90FF]/30 hover:border-[#1E90FF]/60 transition-all duration-300 shadow-lg hover:shadow-[#1E90FF]/25">
                      {/* Efecto neón profesional */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#9B59B6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        <div className="aspect-video overflow-hidden relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F2D]/80 to-transparent"></div>
                          {/* Icono profesional en lugar de emoji */}
                          <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                            <project.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="p-8">
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] text-white text-sm font-medium rounded-full">
                              {project.category}
                            </span>
                            <span className="text-[#2ECC71] font-bold text-lg">
                              {project.results}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-[#EAEAEA] mb-4">
                            {project.title}
                          </h3>
                          <p className="text-[#EAEAEA]/70 leading-relaxed mb-4">
                            {project.description}
                          </p>
                          <div className="text-[#1E90FF] font-medium">
                            Tiempo: {project.metric}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[#1E90FF]/25 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[#1E90FF]/25 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {successCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios - Slider profesional */}
      <section className="py-20 bg-gradient-to-br from-[#0D0F2D] to-[#1a1f4a] relative overflow-hidden z-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#1E90FF]/20 to-[#9B59B6]/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-[#9B59B6]/20 to-[#2ECC71]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Testimonios
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Lo que dicen nuestros clientes satisfechos
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    {/* Estilo profesional */}
                    <div className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#1E90FF]/30 hover:border-[#1E90FF]/60 transition-all duration-300 text-center shadow-lg hover:shadow-[#1E90FF]/25 transform hover:scale-105">
                      {/* Efecto profesional */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#9B59B6]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#1E90FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#1E90FF] to-[#9B59B6] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                          <Quote className="h-8 w-8 text-white" />
                        </div>
                        <p className="text-lg text-[#EAEAEA]/90 mb-8 leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-[#2ECC71] fill-current" />
                          ))}
                        </div>
                        <div className="flex items-center justify-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg border-2 border-[#1E90FF]/30"
                          />
                          <div className="text-left">
                            <h4 className="text-[#EAEAEA] font-semibold">{testimonial.name}</h4>
                            <p className="text-[#1E90FF] text-sm">{testimonial.role}</p>
                            <p className="text-[#EAEAEA]/60 text-sm">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[#1E90FF]/25 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-[#1E90FF]/25 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Intermedio - Banner profesional */}
      <section className="py-20 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] relative overflow-hidden z-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          {/* Ilustración profesional en lugar de robot */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-30">
            <div className="w-48 h-48 relative">
              <div className="absolute inset-0 bg-white/20 rounded-3xl transform rotate-12 animate-pulse-3d border border-white/30"></div>
              <div className="absolute inset-4 bg-white/30 rounded-2xl transform -rotate-6 animate-float border border-white/40"></div>
              <div className="absolute inset-8 bg-white/40 rounded-xl animate-pulse-3d border border-white/50" style={{ animationDelay: '1s' }}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Rocket className="h-16 w-16 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para llevar tu marca al futuro?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a las empresas que ya están transformando su negocio con IA y automatización
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center px-10 py-5 bg-white text-[#1E90FF] font-semibold rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="mr-3 h-6 w-6" />
            <span>Agendar llamada ahora</span>
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Formulario de Contacto Express - Diseño profesional */}
      <section className="py-20 bg-[#0D0F2D] relative overflow-hidden z-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#1E90FF]/10 to-[#9B59B6]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-[#9B59B6]/10 to-[#2ECC71]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
              Formulario de Contacto Express
            </h2>
            <p className="text-xl text-[#EAEAEA]/70">
              Cuéntanos tu idea y la construimos juntos
            </p>
          </div>

          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#1E90FF]/30 shadow-2xl shadow-[#1E90FF]/10">
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

export default Home;