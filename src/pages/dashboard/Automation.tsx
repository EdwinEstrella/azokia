import React, { useState } from 'react';
import { Zap, Clock, Mail, Calendar, Bell, Repeat, Play, Pause, Settings } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Switch } from '../../components/ui/switch';

const Automation: React.FC = () => {
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: "Recordatorio de Pagos",
      description: "Envía recordatorios automáticos de facturas pendientes",
      type: "EMAIL",
      status: "active",
      trigger: "invoice_due",
      schedule: "1 día antes del vencimiento",
      lastRun: "2024-02-15T10:30:00Z"
    },
    {
      id: 2,
      name: "Bienvenida a Clientes",
      description: "Envía email de bienvenida a nuevos clientes",
      type: "EMAIL",
      status: "active",
      trigger: "client_created",
      schedule: "Inmediatamente",
      lastRun: "2024-02-14T15:45:00Z"
    },
    {
      id: 3,
      name: "Reporte Semanal",
      description: "Genera y envía reporte semanal de actividades",
      type: "REPORT",
      status: "paused",
      trigger: "scheduled",
      schedule: "Todos los lunes a las 9:00 AM",
      lastRun: "2024-02-12T09:00:00Z"
    },
    {
      id: 4,
      name: "Notificación de Proyectos",
      description: "Notifica cuando un proyecto está cerca de su fecha límite",
      type: "NOTIFICATION",
      status: "active",
      trigger: "project_deadline",
      schedule: "3 días antes del deadline",
      lastRun: "2024-02-13T14:20:00Z"
    }
  ]);

  const toggleAutomation = (id: number) => {
    setAutomations(prev => prev.map(auto =>
      auto.id === id 
        ? { ...auto, status: auto.status === 'active' ? 'paused' : 'active' }
        : auto
    ));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'EMAIL': return <Mail className="h-5 w-5 text-blue-400" />;
      case 'REPORT': return <Calendar className="h-5 w-5 text-green-400" />;
      case 'NOTIFICATION': return <Bell className="h-5 w-5 text-yellow-400" />;
      default: return <Zap className="h-5 w-5 text-gray-400" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Automatización</h1>
            <p className="text-[#EAEAEA]/60">Automatiza workflows repetitivos</p>
          </div>
          <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
            <Settings className="h-4 w-4 mr-2" />
            Configurar
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Total</p>
                <p className="text-2xl font-bold text-[#EAEAEA]">{automations.length}</p>
              </div>
              <Zap className="h-8 w-8 text-[#1E90FF]" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Activos</p>
                <p className="text-2xl font-bold text-green-400">
                  {automations.filter(a => a.status === 'active').length}
                </p>
              </div>
              <Play className="h-8 w-8 text-green-400" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Pausados</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {automations.filter(a => a.status === 'paused').length}
                </p>
              </div>
              <Pause className="h-8 w-8 text-yellow-400" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Ejecuciones Hoy</p>
                <p className="text-2xl font-bold text-[#EAEAEA]">12</p>
              </div>
              <Repeat className="h-8 w-8 text-blue-400" />
            </div>
          </Card>
        </div>

        {/* Automations Grid */}
        <div className="grid grid-cols-1 gap-6">
          {automations.map((automation) => (
            <BackgroundGradient
              key={automation.id}
              className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-2 bg-[#1E90FF]/20 rounded-lg">
                    {getTypeIcon(automation.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#EAEAEA] mb-1">
                      {automation.name}
                    </h3>
                    <p className="text-[#EAEAEA]/70 text-sm mb-3">
                      {automation.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center text-[#EAEAEA]/60">
                        <Clock className="h-4 w-4 mr-1" />
                        Disparador: {automation.trigger}
                      </div>
                      <div className="flex items-center text-[#EAEAEA]/60">
                        <Repeat className="h-4 w-4 mr-1" />
                        Programación: {automation.schedule}
                      </div>
                      {automation.lastRun && (
                        <div className="flex items-center text-[#EAEAEA]/60">
                          <Calendar className="h-4 w-4 mr-1" />
                          Última ejecución: {formatDate(automation.lastRun)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <Switch
                    checked={automation.status === 'active'}
                    onCheckedChange={() => toggleAutomation(automation.id)}
                  />
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    automation.status === 'active' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {automation.status === 'active' ? 'ACTIVO' : 'PAUSADO'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#1E90FF]/20">
                <div className="text-sm text-[#EAEAEA]/60">
                  Tipo: {automation.type}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-[#1E90FF]/30 text-[#EAEAEA]">
                    <Settings className="h-4 w-4 mr-1" />
                    Configurar
                  </Button>
                  <Button variant="outline" size="sm" className="border-[#1E90FF]/30 text-[#EAEAEA]">
                    Ver historial
                  </Button>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {/* Empty State */}
        {automations.length === 0 && (
          <div className="text-center py-12">
            <Zap className="h-16 w-16 text-[#EAEAEA]/40 mx-auto mb-4" />
            <div className="text-[#EAEAEA]/40 mb-4">No hay automatizaciones configuradas</div>
            <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
              <Zap className="h-4 w-4 mr-2" />
              Crear primera automatización
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Automation;
