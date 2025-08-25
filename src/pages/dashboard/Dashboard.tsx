import React from 'react';
import { TrendingUp, Users, DollarSign, Calendar, Activity } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Ingresos Totales',
      value: '$185,000',
      change: '+15%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-400'
    },
    {
      title: 'Proyectos Activos',
      value: '8',
      change: '+3',
      trend: 'up',
      icon: Activity,
      color: 'text-blue-400'
    },
    {
      title: 'Miembros del Equipo',
      value: '12',
      change: '+2',
      trend: 'up',
      icon: Users,
      color: 'text-purple-400'
    },
    {
      title: 'Horas Facturadas',
      value: '1,240',
      change: '+18%',
      trend: 'up',
      icon: Calendar,
      color: 'text-orange-400'
    }
  ];

  const recentActivity = [
    { id: 1, action: 'Nuevo proyecto creado', project: 'Rediseño Website', time: 'Hace 2 horas' },
    { id: 2, action: 'Pago recibido', project: 'TechSolutions Inc.', time: 'Hace 4 horas' },
    { id: 3, action: 'Tarea completada', project: 'App Móvil E-commerce', time: 'Hace 6 horas' },
    { id: 4, action: 'Nuevo miembro agregado', project: 'Carlos Rodríguez', time: 'Hace 1 día' }
  ];

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Dashboard</h1>
          <p className="text-[#EAEAEA]/60">Resumen general de tu negocio</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <BackgroundGradient
                key={index}
                className="rounded-[22px] p-0.5 bg-[#1A1C3A]"
              >
                <Card className="p-6 bg-[#0D0F2D] border-none">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#EAEAEA]/60 text-sm mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-[#EAEAEA]">{stat.value}</p>
                      <p className={`text-sm ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-[#1A1C3A] ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </Card>
              </BackgroundGradient>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <BackgroundGradient className="rounded-[22px] p-0.5 bg-[#1A1C3A]">
            <Card className="p-6 bg-[#0D0F2D] border-none">
              <h3 className="text-xl font-semibold text-[#EAEAEA] mb-6">Actividad Reciente</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg bg-[#1A1C3A]/50">
                    <div className="w-2 h-2 bg-[#1E90FF] rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-[#EAEAEA] font-medium">{activity.action}</p>
                      <p className="text-[#EAEAEA]/60 text-sm">{activity.project}</p>
                    </div>
                    <span className="text-[#EAEAEA]/40 text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </BackgroundGradient>

          {/* Quick Actions */}
          <BackgroundGradient className="rounded-[22px] p-0.5 bg-[#1A1C3A]">
            <Card className="p-6 bg-[#0D0F2D] border-none">
              <h3 className="text-xl font-semibold text-[#EAEAEA] mb-6">Acciones Rápidas</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 rounded-lg bg-[#1A1C3A]/50 hover:bg-[#1E90FF]/20 transition-colors text-[#EAEAEA] text-center">
                  <div className="w-8 h-8 bg-[#1E90FF] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Nuevo Proyecto</span>
                </button>
                <button className="p-4 rounded-lg bg-[#1A1C3A]/50 hover:bg-[#1E90FF]/20 transition-colors text-[#EAEAEA] text-center">
                  <div className="w-8 h-8 bg-[#1E90FF] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Crear Factura</span>
                </button>
                <button className="p-4 rounded-lg bg-[#1A1C3A]/50 hover:bg-[#1E90FF]/20 transition-colors text-[#EAEAEA] text-center">
                  <div className="w-8 h-8 bg-[#1E90FF] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Agregar Miembro</span>
                </button>
                <button className="p-4 rounded-lg bg-[#1A1C3A]/50 hover:bg-[#1E90FF]/20 transition-colors text-[#EAEAEA] text-center">
                  <div className="w-8 h-8 bg-[#1E90FF] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Programar Reunión</span>
                </button>
              </div>
            </Card>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
