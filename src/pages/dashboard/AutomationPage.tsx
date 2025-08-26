import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Switch } from '../../components/ui/switch';

const AutomationPage: React.FC = () => {
  const automations = [
    {
      name: 'Notificaciones de Proyectos',
      description: 'Alertas automáticas por email para hitos importantes',
      enabled: true
    },
    {
      name: 'Recordatorios de Pago',
      description: 'Recordatorios automáticos para facturas pendientes',
      enabled: true
    },
    {
      name: 'Backups Automáticos',
      description: 'Backups diarios de todos los proyectos',
      enabled: false
    },
    {
      name: 'Reportes Mensuales',
      description: 'Generación automática de reportes de rendimiento',
      enabled: true
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Automatización</h1>
        <p className="text-[#EAEAEA]/70">Automatiza procesos repetitivos de la agencia</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {automations.map((automation, index) => (
          <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#EAEAEA] mb-2">
                    {automation.name}
                  </h3>
                  <p className="text-[#EAEAEA]/70">
                    {automation.description}
                  </p>
                </div>
                <Switch checked={automation.enabled} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AutomationPage;
