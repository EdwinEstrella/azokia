import React from 'react';
import { BarChart3, Users, FileText } from 'lucide-react';
import { Card } from '../../components/ui/card';

const DashboardHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Bienvenido a Azokia</h1>
          <p className="text-[#EAEAEA]/60">Aquí tienes un resumen de tu negocio.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Ingresos (Mes)</p>
                <p className="text-2xl font-bold text-green-400">$185,000.00</p>
              </div>
              <BarChart3 className="h-8 w-8 text-green-400" />
            </div>
          </Card>
          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Clientes Activos</p>
                <p className="text-2xl font-bold text-[#EAEAEA]">12</p>
              </div>
              <Users className="h-8 w-8 text-[#1E90FF]" />
            </div>
          </Card>
          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Proyectos en Curso</p>
                <p className="text-2xl font-bold text-[#EAEAEA]">5</p>
              </div>
              <FileText className="h-8 w-8 text-yellow-400" />
            </div>
          </Card>
        </div>

        {/* Welcome Message */}
        <Card className="p-8 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
          <h2 className="text-2xl font-semibold text-[#EAEAEA] mb-4">Empecemos</h2>
          <p className="text-[#EAEAEA]/70">
            Usa el menú de la izquierda para navegar entre las diferentes secciones. Puedes gestionar tus clientes, contratos, proyectos y finanzas desde un solo lugar.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
