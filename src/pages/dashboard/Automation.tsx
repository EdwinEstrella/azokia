import React, { useState } from 'react';
import { Zap, Plus, RefreshCw as Sync, PlayCircle, CheckCircle, XCircle, MoreHorizontal } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const kpiData = [
  { title: 'Automatizaciones Activas', value: '12', change: '+2', icon: Zap, color: 'text-sky-400' },
  { title: 'Ejecuciones Hoy', value: '1,482', change: '+15%', icon: PlayCircle, color: 'text-pink-400' },
  { title: 'Tasa de Éxito', value: '99.2%', change: '+0.1%', icon: CheckCircle, color: 'text-green-400' },
  { title: 'Tareas Ahorradas (Est.)', value: '~250', change: '', icon: CheckCircle, color: 'text-green-400' },
];

const automationRuns = [
    { id: 'AUTO001', name: 'Recordatorio de Factura Vencida', trigger: 'Cada día a las 9 AM', lastRun: 'Hace 15 minutos', status: 'Exitoso' },
    { id: 'AUTO002', name: 'Bienvenida a Nuevo Cliente', trigger: 'Nuevo Cliente Creado', lastRun: 'Hace 1 hora', status: 'Exitoso' },
    { id: 'AUTO003', name: 'Reporte Financiero Semanal', trigger: 'Cada Lunes a las 8 AM', lastRun: 'Hace 2 días', status: 'Fallido' },
    { id: 'AUTO004', name: 'Sincronización de Contactos', trigger: 'Cada 6 horas', lastRun: 'Hace 4 horas', status: 'Exitoso' },
    { id: 'AUTO005', name: 'Notificación de Contrato por Finalizar', trigger: '30 días antes del fin', lastRun: 'Hace 8 horas', status: 'Exitoso' },
];

const getStatusPill = (status: string) => {
    switch (status) {
        case 'Exitoso': return <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-400" /> <span className="text-green-400">Exitoso</span></div>;
        case 'Fallido': return <div className="flex items-center gap-2"><XCircle className="h-4 w-4 text-red-400" /> <span className="text-red-400">Fallido</span></div>;
        default: return <span className="text-gray-400">{status}</span>;
    }
};

const Automation: React.FC = () => {
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6 text-[#EAEAEA]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Zap className="h-8 w-8 text-[#1E90FF]" />
            <h1 className="text-3xl font-bold">Automatización</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleSync} variant="outline" className="border-[#1E90FF]/30 text-[#EAEAEA] hover:bg-[#1E90FF]/10 hover:text-white">
              <Sync className={`h-4 w-4 mr-2 ${isSyncing ? 'animate-spin' : ''}`} />
              {isSyncing ? 'Sincronizando...' : 'Sincronizar Registros'}
            </Button>
            <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
              <Plus className="h-4 w-4 mr-2" />
              Crear Automatización
            </Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <BackgroundGradient key={index} className="rounded-2xl bg-[#0D0F2D]/80">
                <Card className="p-6 bg-transparent border-none h-full">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#EAEAEA]/70">{kpi.title}</p>
                    <Icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{kpi.value}</h2>
                  <p className={`text-sm ${kpi.change.startsWith('+') ? 'text-green-400' : 'text-yellow-400'}`}>
                    {kpi.change}
                  </p>
                </Card>
              </BackgroundGradient>
            );
          })}
        </div>

        {/* Automation Runs Table */}
        <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Registros de Ejecución</h3>
                <Button variant="ghost" className="text-[#1E90FF] hover:bg-[#1E90FF]/10 hover:text-[#1E90FF]">
                    Ver todos
                </Button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-[#1E90FF]/20">
                            <th className="p-4 font-medium text-[#EAEAEA]/70">Nombre</th>
                            <th className="p-4 font-medium text-[#EAEAEA]/70">Disparador</th>
                            <th className="p-4 font-medium text-[#EAEAEA]/70">Última Ejecución</th>
                            <th className="p-4 font-medium text-[#EAEAEA]/70">Estado</th>
                            <th className="p-4 font-medium text-[#EAEAEA]/70 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {automationRuns.map(run => (
                            <tr key={run.id} className="border-b border-[#1E90FF]/10 hover:bg-[#1E90FF]/5">
                                <td className="p-4 font-medium">{run.name}</td>
                                <td className="p-4 text-[#EAEAEA]/70">{run.trigger}</td>
                                <td className="p-4 text-[#EAEAEA]/70">{run.lastRun}</td>
                                <td className="p-4">{getStatusPill(run.status)}</td>
                                <td className="p-4 text-right">
                                    <Button variant="ghost" size="icon" className="text-[#EAEAEA]/70 hover:text-white hover:bg-[#1E90FF]/10">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default Automation;
