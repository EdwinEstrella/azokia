import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';

const BillingPage: React.FC = () => {
  const invoices = [
    {
      numero: 'INV-001',
      cliente: 'TechCorp SA',
      monto: '€12,500',
      estado: 'pagada',
      fecha: '2024-01-20',
      vencimiento: '2024-02-20'
    },
    {
      numero: 'INV-002',
      cliente: 'Boutique Luna',
      monto: '€8,200',
      estado: 'pagada',
      fecha: '2023-12-15',
      vencimiento: '2024-01-15'
    },
    {
      numero: 'INV-003',
      cliente: 'Restaurant El Puerto',
      monto: '€1,900',
      estado: 'pendiente',
      fecha: '2024-02-01',
      vencimiento: '2024-03-01'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      pendiente: 'bg-yellow-500/20 text-yellow-400',
      pagada: 'bg-green-500/20 text-green-400',
      vencida: 'bg-red-500/20 text-red-400'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Facturación</h1>
        <p className="text-[#EAEAEA]/70">Facturas que enviamos a nuestros clientes</p>
      </div>

      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
        <CardHeader>
          <CardTitle className="text-[#EAEAEA]">Historial de Facturas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1E90FF]/20">
                  <th className="text-left text-[#EAEAEA]/70 py-3">Factura</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Cliente</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Monto</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Estado</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => (
                  <tr key={index} className="border-b border-[#1E90FF]/10">
                    <td className="py-3 text-[#EAEAEA] font-medium">{invoice.numero}</td>
                    <td className="py-3 text-[#EAEAEA]">{invoice.cliente}</td>
                    <td className="py-3 text-[#EAEAEA] font-medium">{invoice.monto}</td>
                    <td className="py-3">
                      <Badge className={getStatusBadge(invoice.estado)}>
                        {invoice.estado}
                      </Badge>
                    </td>
                    <td className="py-3 text-[#EAEAEA]/70">
                      {invoice.fecha}
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

export default BillingPage;
