import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

const ClientsPage: React.FC = () => {
  const clients: any[] = [];

  const getStatusBadge = (status: string) => {
    const variants = {
      activo: 'bg-green-500/20 text-green-400',
      desarrollo: 'bg-blue-500/20 text-blue-400',
      completado: 'bg-gray-500/20 text-gray-400'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Clientes</h1>
        <p className="text-[#EAEAEA]/70">Empresas que contratan nuestros servicios</p>
      </div>

      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
        <CardHeader>
          <CardTitle className="text-[#EAEAEA]">Lista de Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1E90FF]/20">
                  <th className="text-left text-[#EAEAEA]/70 py-3">Cliente</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Contacto</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Proyecto</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Estado</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Ingreso</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client: any, index: number) => (
                  <tr key={index} className="border-b border-[#1E90FF]/10">
                    <td className="py-3">
                      <div>
                        <p className="text-[#EAEAEA] font-medium">{client.nombre}</p>
                        <p className="text-[#EAEAEA]/70 text-sm">{client.email}</p>
                      </div>
                    </td>
                    <td className="py-3 text-[#EAEAEA]">{client.telefono}</td>
                    <td className="py-3 text-[#EAEAEA]">{client.proyecto}</td>
                    <td className="py-3">
                      <Badge className={getStatusBadge(client.estado)}>
                        {client.estado}
                      </Badge>
                    </td>
                    <td className="py-3 text-[#EAEAEA] font-medium">{client.ingreso}</td>
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

export default ClientsPage;
