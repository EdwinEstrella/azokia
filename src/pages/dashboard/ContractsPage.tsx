import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

const ContractsPage: React.FC = () => {
  const contracts = [
    {
      cliente: 'TechCorp SA',
      tipo: 'Desarrollo Web',
      valor: '€12,500',
      estado: 'firmado',
      inicio: '2024-01-15',
      fin: '2024-03-15'
    },
    {
      cliente: 'Boutique Luna',
      tipo: 'E-commerce',
      valor: '€8,200',
      estado: 'completado',
      inicio: '2023-11-01',
      fin: '2024-01-15'
    },
    {
      cliente: 'Restaurant El Puerto',
      tipo: 'Landing Page',
      valor: '€3,800',
      estado: 'pendiente',
      inicio: '2024-02-01',
      fin: '2024-02-28'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      pendiente: 'bg-yellow-500/20 text-yellow-400',
      firmado: 'bg-blue-500/20 text-blue-400',
      completado: 'bg-green-500/20 text-green-400'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Contratos</h1>
        <p className="text-[#EAEAEA]/70">Acuerdos comerciales con nuestros clientes</p>
      </div>

      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
        <CardHeader>
          <CardTitle className="text-[#EAEAEA]">Contratos Activos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1E90FF]/20">
                  <th className="text-left text-[#EAEAEA]/70 py-3">Cliente</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Tipo</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Valor</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Estado</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Período</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((contract, index) => (
                  <tr key={index} className="border-b border-[#1E90FF]/10">
                    <td className="py-3 text-[#EAEAEA] font-medium">{contract.cliente}</td>
                    <td className="py-3 text-[#EAEAEA]">{contract.tipo}</td>
                    <td className="py-3 text-[#EAEAEA] font-medium">{contract.valor}</td>
                    <td className="py-3">
                      <Badge className={getStatusBadge(contract.estado)}>
                        {contract.estado}
                      </Badge>
                    </td>
                    <td className="py-3 text-[#EAEAEA]/70">
                      {contract.inicio} - {contract.fin}
                    </td>
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

export default ContractsPage;
