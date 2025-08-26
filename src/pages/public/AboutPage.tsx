import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Users, Target, Eye, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Carlos Rodríguez',
      role: 'CEO & Desarrollador Full-Stack',
      experience: '10+ años en desarrollo web',
      specialty: 'React, Node.js, AWS'
    },
    {
      name: 'Ana Martínez',
      role: 'Diseñadora UX/UI',
      experience: '8+ años en diseño digital',
      specialty: 'Figma, Adobe Suite, Prototipado'
    },
    {
      name: 'Miguel Sánchez',
      role: 'Desarrollador Backend',
      experience: '7+ años en desarrollo',
      specialty: 'Python, Django, PostgreSQL'
    },
    {
      name: 'Laura Gómez',
      role: 'Especialista en Marketing',
      experience: '6+ años en marketing digital',
      specialty: 'SEO, SEM, Analytics'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Buscamos la perfección en cada proyecto que emprendemos.'
    },
    {
      icon: Eye,
      title: 'Innovación',
      description: 'Siempre estamos al día con las últimas tecnologías y tendencias.'
    },
    {
      icon: Heart,
      title: 'Compromiso',
      description: 'Tu éxito es nuestro éxito. Nos comprometemos al 100%.'
    }
  ];

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-[#0D0F2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium mb-6">
            Nosotros
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] mb-6">
            Conoce Azokia
          </h1>
          <p className="text-lg text-[#EAEAEA]/70 max-w-3xl mx-auto">
            Somos un equipo apasionado por crear soluciones web que transforman negocios
          </p>
        </div>

        {/* Historia */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#EAEAEA] mb-6 text-center">Nuestra Historia</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#EAEAEA]/80 text-lg mb-4">
                Azokia nació en 2018 con la visión de democratizar el acceso a soluciones web de calidad para empresas de todos los tamaños.
              </p>
              <p className="text-[#EAEAEA]/80 text-lg mb-4">
                Comenzamos como un pequeño equipo de desarrolladores freelance y hoy somos una agencia consolidada con más de 50 proyectos exitosos.
              </p>
              <p className="text-[#EAEAEA]/80 text-lg">
                Nuestra misión es simple: crear experiencias digitales excepcionales que impulsen el crecimiento de nuestros clientes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1E90FF]/20 to-[#9B59B6]/20 p-8 rounded-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#EAEAEA] mb-2">50+</div>
                <div className="text-[#EAEAEA]/70">Proyectos Completados</div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#EAEAEA] mb-8 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20 text-center">
                <CardHeader>
                  <div className="p-3 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-lg w-fit mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-[#EAEAEA]">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#EAEAEA]/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Equipo */}
        <section>
          <h2 className="text-3xl font-bold text-[#EAEAEA] mb-8 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20 text-center">
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#EAEAEA]">{member.name}</h3>
                  <p className="text-[#1E90FF] text-sm">{member.role}</p>
                  <p className="text-[#EAEAEA]/70 text-xs">{member.experience}</p>
                  <p className="text-[#EAEAEA]/60 text-xs">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
