import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { CheckCircle, Code, ShoppingCart, Server, Palette, Zap } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web Corporativo',
      description: 'Sitios web profesionales y responsivos que representan tu marca.',
      features: ['Diseño personalizado', 'Responsive design', 'SEO optimizado', 'Panel administrativo']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce & Tiendas Online',
      description: 'Plataformas de comercio electrónico completas y seguras.',
      features: ['Pasarelas de pago', 'Gestión de inventario', 'Carrito de compras', 'Reportes de ventas']
    },
    {
      icon: Palette,
      title: 'Diseño UI/UX',
      description: 'Experiencias de usuario intuitivas y atractivas.',
      features: ['Diseño centrado en usuario', 'Prototipos interactivos', 'Testing de usabilidad', 'Design system']
    },
    {
      icon: Server,
      title: 'Hosting & Mantenimiento',
      description: 'Soporte técnico y hosting confiable para tu sitio web.',
      features: ['Hosting optimizado', 'Backups automáticos', 'Soporte 24/7', 'Actualizaciones de seguridad']
    },
    {
      icon: Zap,
      title: 'Automatización & CRM',
      description: 'Sistemas que optimizan tus procesos de venta y marketing.',
      features: ['Automatización de emails', 'Gestión de leads', 'CRM personalizado', 'Integraciones API']
    }
  ];

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-[#0D0F2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium mb-6">
            Servicios
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] mb-6">
            Soluciones Web Completas
          </h1>
          <p className="text-lg text-[#EAEAEA]/70 max-w-3xl mx-auto">
            Ofrecemos servicios integrales de desarrollo web para impulsar tu presencia digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
              <CardHeader>
                <div className="p-3 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-lg w-fit mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-[#EAEAEA] text-xl">{service.title}</CardTitle>
                <CardDescription className="text-[#EAEAEA]/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-[#EAEAEA]/80">
                      <CheckCircle className="h-4 w-4 text-[#1E90FF] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-4">
            ¿Necesitas algo específico?
          </h2>
          <p className="text-lg text-[#EAEAEA]/70 mb-6 max-w-2xl mx-auto">
            Contáctanos para discutir tu proyecto y recibir una cotización personalizada
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Solicitar Cotización
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
