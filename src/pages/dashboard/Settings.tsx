import React, { useState } from 'react';
import { User, Building, Bell, CreditCard, Database, RefreshCw as Sync, UploadCloud, DownloadCloud } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <Card className="p-8 bg-transparent border-none">
            <h2 className="text-2xl font-semibold mb-6 text-[#EAEAEA]">Perfil de Usuario</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User Avatar" className="h-24 w-24 rounded-full object-cover" />
                <div>
                  <Button variant="outline" className="border-[#1E90FF]/30 text-[#EAEAEA]">Cambiar Foto</Button>
                  <p className="text-sm text-[#EAEAEA]/60 mt-2">JPG, GIF o PNG. Tamaño máximo de 5MB.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-[#EAEAEA]/80">Nombre Completo</Label>
                  <Input id="name" defaultValue="Alejandro Vargas" className="bg-[#0D0F2D] border-[#1E90FF]/20" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#EAEAEA]/80">Correo Electrónico</Label>
                  <Input id="email" type="email" defaultValue="alex.vargas@example.com" className="bg-[#0D0F2D] border-[#1E90FF]/20" />
                </div>
              </div>
              <div className="pt-4 text-right">
                <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">Guardar Cambios</Button>
              </div>
            </div>
          </Card>
        );
      case 'company':
        return (
          <Card className="p-8 bg-transparent border-none">
            <h2 className="text-2xl font-semibold mb-6 text-[#EAEAEA]">Información de la Empresa</h2>
            <div className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="companyName" className="text-[#EAEAEA]/80">Nombre de la Empresa</Label>
                  <Input id="companyName" defaultValue="Innovatech Solutions" className="bg-[#0D0F2D] border-[#1E90FF]/20" />
                </div>
                <div>
                  <Label htmlFor="companyPhone" className="text-[#EAEAEA]/80">Teléfono</Label>
                  <Input id="companyPhone" defaultValue="+52 55 1234 5678" className="bg-[#0D0F2D] border-[#1E90FF]/20" />
                </div>
              </div>
               <div>
                  <Label htmlFor="companyAddress" className="text-[#EAEAEA]/80">Dirección</Label>
                  <Input id="companyAddress" defaultValue="Av. Insurgentes Sur 123, CDMX" className="bg-[#0D0F2D] border-[#1E90FF]/20" />
                </div>
              <div className="pt-4 text-right">
                <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">Guardar Cambios</Button>
              </div>
            </div>
          </Card>
        );
      case 'data':
        return (
          <Card className="p-8 bg-transparent border-none">
            <h2 className="text-2xl font-semibold mb-6 text-[#EAEAEA]">Gestión de Datos</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-[#1E90FF]/20 rounded-lg">
                <div>
                  <h3 className="font-medium text-[#EAEAEA]">Sincronización en la Nube</h3>
                  <p className="text-sm text-[#EAEAEA]/60">Última sincronización: Hoy a las 11:45 AM</p>
                </div>
                <Button onClick={handleSync} variant="outline" className="border-[#1E90FF]/30 text-[#EAEAEA]">
                  <Sync className={`h-4 w-4 mr-2 ${isSyncing ? 'animate-spin' : ''}`} />
                  {isSyncing ? 'Sincronizando...' : 'Sincronizar Ahora'}
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border border-[#1E90FF]/20 rounded-lg">
                <div>
                  <h3 className="font-medium text-[#EAEAEA]">Exportar Datos</h3>
                  <p className="text-sm text-[#EAEAEA]/60">Descarga todos tus datos en formato CSV.</p>
                </div>
                <Button variant="outline" className="border-[#1E90FF]/30 text-[#EAEAEA]">
                  <DownloadCloud className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>
          </Card>
        );
      default:
        return null;
    }
  };

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'company', label: 'Empresa', icon: Building },
    { id: 'notifications', label: 'Notificaciones', icon: Bell },
    { id: 'billing', label: 'Facturación', icon: CreditCard },
    { id: 'data', label: 'Datos', icon: Database },
  ];

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6 text-[#EAEAEA]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Configuración</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <nav className="flex flex-row lg:flex-col gap-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#1E90FF]/20 text-[#1E90FF]'
                        : 'hover:bg-[#1E90FF]/10'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>
          <main className="flex-1">
            <BackgroundGradient className="rounded-2xl bg-[#0D0F2D]/80">
              {renderContent()}
            </BackgroundGradient>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Settings;
