import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';

const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-6">
     <div>
        <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Configuración</h1>
        <p className="text-[#EAEAEA]/70">Configuración del sistema y preferencias</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
          <CardHeader>
            <CardTitle className="text-[#EAEAEA]">Información de la Empresa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company-name" className="text-[#EAEAEA]">Nombre de la Empresa</Label>
                <Input 
                  id="company-name" 
                  defaultValue="Azokia" 
                  className="bg-slate-800 border-[#1E90FF]/20 text-[#EAEAEA]"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#EAEAEA]">Email</Label>
                <Input 
                  id="email" 
                  defaultValue="info@azokia.com" 
                  className="bg-slate-800 border-[#1E90FF]/20 text-[#EAEAEA]"
                />
              </div>
            </div>
            <Button className="bg-gradient-to-r from-[#1E90FF] to-[#9B59B6]">
              Guardar Cambios
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
          <CardHeader>
            <CardTitle className="text-[#EAEAEA]">Preferencias del Sistema</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-[#EAEAEA]">Modo Oscuro</Label>
                <p className="text-[#EAEAEA]/70 text-sm">Activar interfaz en modo oscuro</p>
              </div>
              <div className="h-6 w-11 bg-[#1E90FF] rounded-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-[#EAEAEA]">Notificaciones por Email</Label>
                <p className="text-[#EAEAEA]/70 text-sm">Recibir notificaciones importantes</p>
              </div>
              <div className="h-6 w-11 bg-[#1E90FF] rounded-full"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
