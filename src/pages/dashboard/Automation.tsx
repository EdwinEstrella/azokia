import React, { useState } from 'react';
import { Zap, Play, Pause, Settings, Clock, Calendar, Mail, Bell, CheckCircle, XCircle, DollarSign } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Switch } from '../../components/ui/switch';

const Automation: React.FC = () => {
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: 'Recordatorio de Pagos',
      description: 'Envía recordatorios automáticos de facturas pendientes',
      enabled: true,
      type: 'payment',
      schedule: 'Diario a las 9:00 AM',
      lastRun: '2024-01-15 09:00:00',
      status: 'success'
    },
    {
      id: 2,
      name: 'Bienvenida a Nuevos Clientes',
      description: 'Envía email de bienvenida a nuevos clientes',
      enabled: true,
      type: 'welcome',
      schedule: 'Inmediato al registro',
      lastRun: '2024-01-14 14:30:00',
      status: 'success'
    },
    {
      id: 3,
      name: 'Reporte Semanal',
      description: 'Envía reporte semanal de actividades',
      enabled: false,
      type: 'report',
      schedule: 'Lunes a las 8:00 AM',
      lastRun: '2024-01-08 08:00:00',
      status: 'idle'
    },
    {
      id: 4,
      name: 'Recordatorio de Reuniones',
      description: 'Envía recordatorios de reuniones programadas',
      enabled: true,
      type: 'meeting',
      schedule: '1 hora antes de la reunión',
      lastRun: '2024-01-15 10:00:00',
      status: 'success'
    }
  ]);

  const toggleAutomation = (id: number) => {
    setAutomations(automations.map(auto => 
      auto.id === id ? { ...auto, enabled: !auto.enabled } : auto
    ));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'payment': return <DollarSign className="h-5 w-5" />;
      case 'welcome': return <Mail className="h-5 w-5" />;
      case 'report': return <Calendar className="h-5 w-5" />;
      case 'meeting': return <Clock className="h-5 w-5" />;
      default: return <Zap className="h-5 w-5" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-400" />;
      default: return <Clock className="h-4 w-4 text-yellow-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Automatizaciones</h1>
            <p className="text-[#EAEAEA]/60">Gestiona tus flujos de trabajo automatizados</p>
          </div>
          <button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white px-4 py-2 rounded-lg flex items-center">
            <Zap className="h-4 w-4 mr-2" />
            Nueva Automatización
          </button>
        </div>

        {/* Automation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {automations.map((automation) => (
            <BackgroundGradient
              key={automation.id}
              className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1E90FF]/20 rounded-lg">
                    {getTypeIcon(automation.type)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#EAEAEA]">{automation.name}</h3>
                    <p className="text-[#EAEAEA]/60 text-sm">{automation.description}</p>
                  </div>
                </div>
                <Switch
                  checked={automation.enabled}
                  onCheckedChange={() => toggleAutomation(automation.id)}
                />
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{automation.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  {getStatusIcon(automation.status)}
                  <span>Última ejecución: {automation.lastRun}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="p-2 text-[#EAEAEA] hover:bg-[#1E90FF]/20 rounded-lg">
                    <Play className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-[#EAEAEA] hover:bg-[#1E90FF]/20 rounded-lg">
                    <Settings className="h-4 w-4" />
                  </button>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  automation.enabled 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {automation.enabled ? 'Activo' : 'Inactivo'}
                </span>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {/* Empty State */}
        {automations.length === 0 && (
          <div className="text-center py-12">
            <Zap className="h-16 w-16 text-[#EAEAEA]/40 mx-auto mb-4" />
            <div className="text-[#EAEAEA]/40 mb-4">No hay automatizaciones configuradas</div>
            <button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white px-4 py-2 rounded-lg">
              Crear primera automatización
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Automation;
