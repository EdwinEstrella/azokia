import React from 'react';
import { Smartphone, Download, QrCode, Bell, Shield, RefreshCw, Globe, BarChart } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const Mobile: React.FC = () => {
  const features = [
    {
      icon: <Bell className="h-8 w-8 text-blue-400" />,
      title: "Notificaciones en Tiempo Real",
      description: "Recibe alertas instantáneas de facturas, proyectos y recordatorios"
    },
    {
      icon: <BarChart className="h-8 w-8 text-green-400" />,
      title: "Dashboard Móvil",
      description: "Accede a tus métricas clave desde cualquier lugar"
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-yellow-400" />,
      title: "Sincronización Offline",
      description: "Trabaja sin conexión y tus datos se sincronizarán automáticamente"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-400" />,
      title: "Seguridad Avanzada",
      description: "Autenticación biométrica y encriptación de extremo a extremo"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      title: "Acceso Global",
      description: "Disponible en iOS y Android en todo el mundo"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#EAEAEA] mb-4">
            Acceso desde el Móvil
          </h1>
          <p className="text-[#EAEAEA]/60 max-w-2xl mx-auto">
            Lleva tu negocio contigo. Nuestra aplicación móvil te permite gestionar todo 
            desde tu smartphone con la misma potencia que la versión web.
          </p>
        </div>

        {/* App Showcase */}
        <BackgroundGradient className="rounded-2xl p-8 mb-12 bg-[#0D0F2D]/80 border border-[#1E90FF]/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* App Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="h-10 w-10 text-[#1E90FF]" />
                <h2 className="text-2xl font-bold text-[#EAEAEA]">Azokia App</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-[#EAEAEA]">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  <span>Gestión completa de proyectos</span>
                </div>
                <div className="flex items-center text-[#EAEAEA]">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  <span>Facturación y pagos móviles</span>
                </div>
                <div className="flex items-center text-[#EAEAEA]">
                  <div className="w-w-2 h-2 bg-green-400 rounded-full mr-3" />
                  <span>Notificaciones push instantáneas</span>
                </div>
                <div className="flex items-center text-[#EAEAEA]">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  <span>Sincronización en tiempo real</span>
                </div>
                <div className="flex items-center text-[#EAEAEA]">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  <span>Acceso offline disponible</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar App
                </Button>
                <Button variant="outline" className="border-[#1E90FF]/30 text-[#EAEAEA] flex-1">
                  <QrCode className="h-4 w-4 mr-2" />
                  Código QR
                </Button>
              </div>
            </div>

            {/* App Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-128 bg-gradient-to-b from-[#1E90FF]/20 to-[#9B59B6]/20 rounded-3xl border-2 border-[#1E90FF]/30 p-4">
                  <div className="bg-[#0D0F2D] rounded-2xl h-full p-4">
                    <div className="text-center mb-4">
                      <div className="w-12 h-1 bg-[#EAEAEA]/30 rounded mx-auto mb-3"></div>
                      <h3 className="text-[#EAEAEA] font-semibold">Azokia</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-[#1E90FF]/10 rounded-lg p-3">
                        <p className="text-[#EAEAEA] text-sm">Proyectos Activos</p>
                        <p className="text-[#EAEAEA] font-bold">12</p>
                      </div>
                      <div className="bg-[#9B59B6]/10 rounded-lg p-3">
                        <p className="text-[#EAEAEA] text-sm">Facturas Pendientes</p>
                        <p className="text-[#EAEAEA] font-bold">3</p>
                      </div>
                      <div className="bg-[#2ECC71]/10 rounded-lg p-3">
                        <p className="text-[#EAEAEA] text-sm">Ingresos del Mes</p>
                        <p className="text-[#EAEAEA] font-bold">$45,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundGradient>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#1E90FF]/20 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#EAEAEA]">{feature.title}</h3>
              </div>
              <p className="text-[#EAEAEA]/70 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* App Stores */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[#EAEAEA] mb-6">Disponible en</h3>
          <div className="flex justify-center gap-6">
            <Button className="bg-[#000] hover:bg-[#000]/90 px-8">
              <div className="text-left">
                <p className="text-xs text-[#EAEAEA]/60">Descargar en</p>
                <p className="text-[#EAEAEA] font-semibold">App Store</p>
              </div>
            </Button>
            <Button className="bg-[#000] hover:bg-[#000]/90 px-8">
              <div className="text-left">
                <p className="text-xs text-[#EAEAEA]/60">Disponible en</p>
                <p className="text-[#EAEAEA] font-semibold">Google Play</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
