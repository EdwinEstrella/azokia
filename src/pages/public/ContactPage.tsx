import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../../components/public/ContactForm';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@azokia.com',
      description: 'Escríbenos para consultas generales'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+34 912 345 678',
      description: 'Lunes a Viernes de 9:00 a 18:00'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Madrid, España',
      description: 'Trabajamos con clientes de todo el mundo'
    },
    {
      icon: Clock,
      title: 'Horario',
      content: '9:00 - 18:00',
      description: 'Horario laboral español'
    }
  ];

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-[#0D0F2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium mb-6">
            Contacto
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#EAEAEA] mb-6">
            Hablemos de tu Proyecto
          </h1>
          <p className="text-lg text-[#EAEAEA]/70 max-w-3xl mx-auto">
            Cuéntanos tu idea y te enviaremos una cotización gratuita sin compromiso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#EAEAEA] mb-6">Solicitar Cotización</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#EAEAEA] mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-lg">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#EAEAEA]">{info.title}</h3>
                        <p className="text-[#1E90FF]">{info.content}</p>
                        <p className="text-[#EAEAEA]/70 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20 mt-6">
              <CardHeader>
                <CardTitle className="text-[#EAEAEA]">Proceso de Trabajo</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 text-[#EAEAEA]/70">
                  <li>1. Consulta inicial sin compromiso</li>
                  <li>2. Análisis y cotización detallada</li>
                  <li>3. Desarrollo del proyecto</li>
                  <li>4. Entrega y soporte continuo</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
