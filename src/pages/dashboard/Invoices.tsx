import React, { useState, useEffect } from 'react';
import { Plus, FileText, Download, Send, DollarSign, Calendar, Clock } from 'lucide-react';
import { useSupabase } from '../../hooks/useSupabase';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const Invoices: React.FC = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 'INV-2024-001',
      client: 'TechSolutions Inc.',
      amount: 25000,
      status: 'paid',
      issueDate: '2024-01-15',
      dueDate: '2024-01-30',
      paidDate: '2024-01-25',
      items: [
        { description: 'Desarrollo web', quantity: 1, price: 25000 }
      ]
    },
    {
      id: 'INV-2024-002',
      client: 'FashionStore MX',
      amount: 15000,
      status: 'pending',
      issueDate: '2024-02-01',
      dueDate: '2024-02-15',
      paidDate: null,
      items: [
        { description: 'Diseño UI/UX', quantity: 1, price: 15000 }
      ]
    },
    {
      id: 'INV-2024-003',
      client: 'Consultoría ABC',
      amount: 35000,
      status: 'overdue',
      issueDate: '2024-01-20',
      dueDate: '2024-02-05',
      paidDate: null,
      items: [
        { description: 'Consultoría estratégica', quantity: 1, price: 35000 }
      ]
    }
  ]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'text-green-400 bg-green-500/20';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20';
      case 'overdue': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'paid': return 'Pagada';
      case 'pending': return 'Pendiente';
      case 'overdue': return 'Vencida';
      default: return 'Desconocido';
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Facturas</h1>
            <p className="text-[#EAEAEA]/60">Emite facturas y gestiona pagos</p>
          </div>
          <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Factura
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Total Facturas</p>
                <p className="text-2xl font-bold text-[#EAEAEA]">{invoices.length}</p>
              </div>
              <FileText className="h-8 w-8 text-[#1E90FF]" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Por Cobrar</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {formatCurrency(invoices.filter(i => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0))}
                </p>
              </div>
              <Clock className="h-8 w-8 text-yellow-400" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Pagadas</p>
                <p className="text-2xl font-bold text-green-400">
                  {formatCurrency(invoices.filter(i => i.status === 'paid').reduce((sum, i) => sum + i.amount, 0))}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </Card>

          <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#EAEAEA]/60 text-sm">Vencidas</p>
                <p className="text-2xl font-bold text-red-400">
                  {formatCurrency(invoices.filter(i => i.status === 'overdue').reduce((sum, i) => sum + i.amount, 0))}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-red-400" />
            </div>
          </Card>
        </div>

        {/* Invoices Table */}
        <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1E90FF]/20">
                  <th className="text-left py-3 text-[#EAEAEA]/60 font-medium">Factura</th>
                  <th className="text-left py-3 text-[#EAEAEA]/60 font-medium">Cliente</th>
                  <th className="text-left py-3 text-[#EAEAEA]/60 font-medium">Monto</th>
                  <th className="text-left py-3 text-[#EAEAEA]/60 font-medium">Emisión</th>
                  <th className="text-left py-3 text-[#EAEAEA]/60 font-medium">Vencimiento</th>
                  <th className="text-left py-3 text-[#EAEAEA]/60 font-medium">Estado</th>
                  <th className="text-right py-3 text-[#EAEAEA]/60 font-medium">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-[#1E90FF]/10 last:border-b-0">
                    <td className="py-4">
                      <div className="text-[#EAEAEA] fontmedio">{invoice.id}</div>
                    </td>
                    <td className="py-4">
                      <div className="text-[#EAEAEA]">{invoice.client}</div>
                    </td>
                    <td className="py-4">
                      <div className="text-[#EAEAEA] font-semibold">
                        {formatCurrency(invoice.amount)}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="text-[#EAEAEA]/70">
                        {new Date(invoice.issueDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="text-[#EAEAEA]/70">
                        {new Date(invoice.dueDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                        {getStatusText(invoice.status)}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" className="text-[#EAEAEA] hover:bg-[#1E90FF]/20">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-[#EAEAEA] hover:bg-[#1E90FF]/20">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {invoices.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-[#EAEAEA]/40 mx-auto mb-4" />
            <div className="text-[#EAEAEA]/40 mb-4">No hay facturas registradas</div>
            <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
              <Plus className="h-4 w-4 mr-2" />
              Crear primera factura
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoices;
