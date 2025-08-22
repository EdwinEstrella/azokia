import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { LogOut, Settings, User, BarChart3 } from 'lucide-react';
import { BackgroundGradient } from '../components/ui/background-gradient';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#0D0F2D] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[#EAEAEA] mb-4">
            Panel de Control
          </h1>
          <p className="text-[#EAEAEA]/70">
            Bienvenido de vuelta, {user?.name}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <BackgroundGradient className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="h-8 w-8 text-[#1E90FF]" />
              <div className="text-2xl font-bold text-[#EAEAEA]">12</div>
            </div>
            <h3 className="text-[#EAEAEA] font-semibold mb-2">Proyectos Activos</h3>
            <p className="text-[#EAEAEA]/60 text-sm">En desarrollo</p>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30">
            <div className="flex items-center justify-between mb-4">
              <User className="h-8 w-8 text-[#9B59B6]" />
              <div className="text-2xl font-bold text-[#EAEAEA]">3</div>
            </div>
            <h3 className="text-[#EAEAEA] font-semibold mb-2">Equipos</h3>
            <p className="text-[#EAEAEA]/60 text-sm">Colaborando</p>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30">
            <div className="flex items-center justify-between mb-4">
              <Settings className="h-8 w-8 text-[#2ECC71]" />
              <div className="text-2xl font-bold text-[#EAEAEA]">8</div>
            </div>
            <h3 className="text-[#EAEAEA] font-semibold mb-2">Herramientas</h3>
            <p className="text-[#EAEAEA]/60 text-sm">Disponibles</p>
          </BackgroundGradient>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <Button
            onClick={logout}
            variant="outline"
            className="border-[#1E90FF]/30 text-[#EAEAEA] hover:bg-[#1E90FF]/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
