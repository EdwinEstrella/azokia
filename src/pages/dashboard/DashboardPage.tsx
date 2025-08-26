import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { TrendingUp, Users, FolderKanban, DollarSign } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const metrics = [
    {
      title: 'Ingresos Totales',
      value: '€45,890',
      change: '+12.5%',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      title: 'Clientes Activos',
      value: '24',
      change: '+3',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      title: 'Proyectos Activos',
      value: '18',
      change: '+2',
      icon: FolderKanban,
      color: 'text-purple-400'
    },
    {
      title: 'Facturación Mensual',
      value: '€8,750',
      change: '+8.2%',
      icon: DollarSign,
      color: 'text-yellow-400'
    }
  ];

  const recentProjects = [
    { cliente: 'TechCorp SA', proyecto: 'Sitio corporativo', estado: 'Desarrollo', plazo: '15 días' },
    { cliente: 'Boutique Luna', proyecto: 'E-commerce', estado: 'Revisión', plazo: '5 días' },
    { cliente: 'Restaurant El Puerto', proyecto: 'Landing page', estado: 'Diseño', plazo: '10 días' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Dashboard</h1>
        <p className="text-[#EAEAEA]/70">Resumen del rendimiento de la agencia</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#EAEAEA]/70">{metric.title}</p>
                    <p className="text-2xl font-bold text-[#EAEAEA]">{metric.value}</p>
                    <p className={`text-sm ${metric.color}`}>{metric.change}</p>
                  </div>
                  <div className="p-3 bg-[#1E90FF]/20 rounded-lg">
                    <Icon className="h-6 w-6 text-[#1E90FF]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Projects */}
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
        <CardHeader>
          <CardTitle className="text-[#EAEAEA]">Proyectos Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1E90FF]/20">
                  <th className="text-left text-[#EAEAEA]/70 py-3">Cliente</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Proyecto</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Estado</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Plazo</th>
                </tr>
              </thead>
              <tbody>
                {recentProjects.map((project, index) => (
                  <tr key={index} className="border-b border-[#1E90FF]/10">
                    <td className="py-3 text-[#EAEAEA]">{project.cliente}</td>
                    <td className="py-3 text-[#EAEAEA]">{project.proyecto}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                        {project.estado}
                      </span>
                    </td>
                    <td className="py-3 text-[#EAEAEA]/70">{project.plazo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
