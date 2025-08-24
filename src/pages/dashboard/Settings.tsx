import React, { useState } from 'react';
import { Settings, User, Bell, Shield, Palette, Database, Download, Upload, Trash2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userSettings, setUserSettings] = useState({
    name: 'Juan Pérez',
    email: 'juan@empresa.com',
    company: 'Mi Empresa S.A.',
    language: 'es-MX',
    timezone: 'America/Mexico_City',
    currency: 'MXN',
    notifications: {
      email: true,
      push: true,
      sms: false,
      invoices: true,
      projects: true,
      payments: true
    },
    appearance: {
      theme: 'dark',
      compact: false,
      animations: true
    }
  });

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'notifications', label: 'Notificaciones', icon: Bell },
    { id: 'security', label: 'Seguridad', icon: Shield },
    { id: 'appearance', label: 'Apariencia', icon: Palette },
    { id: 'data', label: 'Datos', icon: Database }
  ];

  const handleSettingChange = (category: string, key: string, value: any) => {
    setUserSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const exportData = () => {
    const dataStr = JSON.stringify(userSettings, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'azokia-settings.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Settings className="h-8 w-8 text-[#1E90FF]" />
          <h1 className="text-3xl font-bold text-[#EAEAEA]">Configuración</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <Card className="p-4 bg-[#0D0F2D]/80 border border-[#1E90FF]/20 lg:col-span-1">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-[#1E90FF]/20 text-[#1E90FF] border border-[#1E90FF]/30'
                        : 'text-[#EAEAEA]/70 hover:text-[#EAEAEA] hover:bg-[#1E90FF]/10'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </Card>

          {/* Content */}
          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20 lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#EAEAEA] mb-6">Perfil de Usuario</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-[#EAEAEA]">Nombre completo</Label>
                    <Input
                      id="name"
                      value={userSettings.name}
                      onChange={(e) => setUserSettings(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA] mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#EAEAEA]">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userSettings.email}
                      onChange={(e) => setUserSettings(prev => ({ ...prev, email: e.target.value }))}
                      className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA] mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-[#EAEAEA]">Empresa</Label>
                    <Input
                      id="company"
                      value={userSettings.company}
                      onChange={(e) => setUserSettings(prev => ({ ...prev, company: e.target.value }))}
                      className="bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA] mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="currency" className="text-[#EAEAEA]">Moneda</Label>
                    <select
                      id="currency"
                      value={userSettings.currency}
                      onChange={(e) => setUserSettings(prev => ({ ...prev, currency: e.target.value }))}
                      className="w-full px-3 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA] mt-2"
                    >
                      <option value="MXN">MXN - Peso Mexicano</option>
                      <option value="USD">USD - Dólar Americano</option>
                      <option value="EUR">EUR - Euro</option>
                    </select>
                  </div>
                </div>

                <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
                  Guardar Cambios
                </Button>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#EAEAEA] mb-6">Preferencias de Notificaciones</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-[#EAEAEA]">Notificaciones por Email</Label>
                      <p className="text-[#EAEAEA]/60 text-sm">Recibir notificaciones importantes por correo electrónico</p>
                    </div>
                    <Switch
                      checked={userSettings.notifications.email}
                      onCheckedChange={(checked) => handleSettingChange('notifications', 'email', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-[#EAEAEA]">Notificaciones Push</Label>
                      <p className="text-[#EAEAEA]/60 text-sm">Alertas en tiempo real en tu dispositivo</p>
                    </div>
                    <Switch
                      checked={userSettings.notifications.push}
                      onCheckedChange={(checked) => handleSettingChange('notifications', 'push', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-[#EAEAEA]">Notificaciones de Facturas</Label>
                      <p className="text-[#EAEAEA]/60 text-sm">Alertas sobre facturas pendientes y pagos</p>
                    </div>
                    <Switch
                      checked={userSettings.notifications.invoices}
                      onCheckedChange={(checked) => handleSettingChange('notifications', 'invoices', checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-[#EAEAEA]">Notificaciones de Proyectos</Label>
                      <p className="text-[#EAEAEA]/60 text-sm">Actualizaciones de estado y deadlines</p>
                    </div>
                    <Switch
                      checked={userSettings.notifications.projects}
                      onCheckedChange={(checked) => handleSettingChange('notifications', 'projects', checked)}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'data' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-[#EAEAEA] mb-6">Gestión de Datos</h2>
                
                <BackgroundGradient className="p-6 rounded-2xl bg-[#0D0F2D]/80 border border-[#1E90FF]/30">
                  <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">Exportar Datos</h3>
                  <p className="text-[#EAEAEA]/70 mb-4">
                    Descarga una copia de seguridad de toda tu información en formato JSON.
                  </p>
                  <Button onClick={exportData} className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar Todo
                  </Button>
                </BackgroundGradient>

                <BackgroundGradient className="p-6 rounded-2xl bg-[#0D0F2D]/80 border border-[#1E90FF]/30">
                  <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">Importar Datos</h3>
                  <p className="text-[#EAEAEA]/70 mb-4">
                    Restaura tu información desde un archivo de respaldo.
                  </p>
                  <Button variant="outline" className="border-[#1E90FF]/30 text-[#EAEAEA]">
                    <Upload className="h-4 w-4 mr-2" />
                    Seleccionar Archivo
                  </Button>
                </BackgroundGradient>

                <BackgroundGradient className="p-6 rounded-2xl bg-[#0D0F2D]/80 border border-[#1E90FF]/30">
                  <h3 className="text-lg font-semibold text-red-400 mb-4">Zona Peligrosa</h3>
                  <p className="text-[#EAEAEA]/70 mb-4">
                    Elimina permanentemente todos tus datos. Esta acción no se puede deshacer.
                  </p>
                  <Button variant="destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Eliminar Todos los Datos
                  </Button>
                </BackgroundGradient>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
