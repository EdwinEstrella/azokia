import React from 'react';
import { Settings, User, Bell, Shield, CreditCard, Globe } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Switch } from '../../components/ui/switch';

const Settings: React.FC = () => {
  const settingsSections = [
    {
      title: 'Perfil',
      icon: User,
      settings: [
        { label: 'Información personal', description: 'Actualiza tu información de contacto' },
        { label: 'Preferencias de idioma', description: 'Idioma y región' },
        { label: 'Foto de perfil', description: 'Cambiar imagen de perfil' }
      ]
    },
    {
      title: 'Notificaciones',
      icon: Bell,
      settings: [
        { label: 'Notificaciones por email', description: 'Recibir notificaciones por correo', enabled: true },
        { label: 'Notificaciones push', description: 'Notificaciones en tiempo real', enabled: false },
        { label: 'Recordatorios', description: 'Recordatorios de tareas pendientes', enabled: true }
      ]
    },
    {
      title: 'Seguridad',
      icon: Shield,
      settings: [
        { label: 'Autenticación de dos factores', description: 'Protección adicional para tu cuenta', enabled: false },
        { label: 'Historial de sesiones', description: 'Ver sesiones activas' },
        { label: 'Contraseña', description: 'Cambiar contraseña' }
      ]
    },
    {
      title: 'Facturación',
      icon: CreditCard,
      settings: [
        { label: 'Métodos de pago', description: 'Gestionar tarjetas y cuentas' },
        { label: 'Plan actual', description: 'Plan Premium - $49/mes' },
        { label: 'Historial de pagos', description: 'Ver transacciones anteriores' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2 flex items-center gap-3">
            <Settings className="h-8 w-8 text-[#1E90FF]" />
            Configuración
          </h1>
          <p className="text-[#EAEAEA]/60">Personaliza tu experiencia en la plataforma</p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <BackgroundGradient key={sectionIndex} className="rounded-2xl p-0.5 bg-[#1A1C3A]">
                <Card className="p-6 bg-[#0D0F2D] border-none">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="h-6 w-6 text-[#1E90FF]" />
                    <h2 className="text-xl font-semibold text-[#EAEAEA]">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.settings.map((setting, settingIndex) => (
                      <div key={settingIndex} className="flex items-center justify-between p-4 rounded-lg bg-[#1A1C3A]/50">
                        <div className="flex-1">
                          <h3 className="text-[#EAEAEA] font-medium">{setting.label}</h3>
                          <p className="text-[#EAEAEA]/60 text-sm">{setting.description}</p>
                        </div>
                        {'enabled' in setting ? (
                          <Switch checked={setting.enabled} />
                        ) : (
                          <button className="text-[#1E90FF] hover:text-[#1E90FF]/80 text-sm font-medium">
                            Gestionar
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </BackgroundGradient>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Settings;
