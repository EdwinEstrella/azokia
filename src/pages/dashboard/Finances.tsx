import React, { useState } from 'react';
import { BarChart3, DollarSign, CreditCard, TrendingUp, TrendingDown, RefreshCw as Sync, Plus, Download } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const kpiData = [
  { title: 'Ingresos Totales', value: '$125,430.00', change: '+12.5%', icon: DollarSign, color: 'text-green-400' },
  { title: 'Gastos Totales', value: '$48,970.00', change: '+8.2%', icon: CreditCard, color: 'text-red-400' },
  { title: 'Beneficio Neto', value: '$76,460.00', change: '+15.1%', icon: TrendingUp, color: 'text-green-400' },
  { title: 'Cuentas por Cobrar', value: '$12,890.00', change: '-3.0%', icon: TrendingDown, color: 'text-yellow-400' },
];

const recentTransactions = [
    { id: 'TRX001', project: 'Diseño Web Corporativo', date: '2024-07-20', amount: '+$2,500.00', status: 'Completado' },
    { id: 'TRX002', project: 'Licencia de Software', date: '2024-07-19', amount: '-$350.00', status: 'Completado' },
    { id: 'TRX003', project: 'Campaña de Marketing Digital', date: '2024-07-18', amount: '+$1,200.00', status: 'Pendiente' },
    { id: 'TRX004', project: 'Servidores en la Nube', date: '2024-07-18', amount: '-$800.00', status: 'Completado' },
    { id: 'TRX005', project: 'Consultoría SEO', date: '2024-07-17', amount: '+$950.00', status: 'Completado' },
];

const getStatusClass = (status: string) => {
    switch (status) {
        case 'Completado': return 'bg-green-500/20 text-green-400';
        case 'Pendiente': return 'bg-yellow-500/20 text-yellow-400';
        default: return 'bg-gray-500/20 text-gray-400';
    }
};

const Finances: React.FC = () => {
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6 text-[#EAEAEA]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-[#1E90FF]" />
            <h1 className="text-3xl font-bold">Finanzas</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-[#1E90FF]/30 text-[#EAEAEA] hover:bg-[#1E90FF]/10 hover:text-white">
                <Download className="h-4 w-4 mr-2" />
                Exportar Reporte
            </Button>
            <Button onClick={handleSync} className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
              <Sync className={`h-4 w-4 mr-2 ${isSyncing ? 'animate-spin' : ''}`} />
              {isSyncing ? 'Sincronizando...' : 'Sincronizar Datos'}
            </Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <BackgroundGradient key={index} className="rounded-2xl bg-[#0D0F2D]/80">
                <Card className="p-6 bg-transparent border-none h-full">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#EAEAEA]/70">{kpi.title}</p>
                    <Icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{kpi.value}</h2>
                  <p className={`text-sm ${kpi.change.startsWith('+') ? 'text-green-400' : 'text-yellow-400'}`}>
                    {kpi.change} vs mes anterior
                  </p>
                </Card>
              </BackgroundGradient>
            );
          })}
        </div>

        {/* Recent Transactions */}
        <Card className="p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Transacciones Recientes</h3>
                <Button variant="ghost" className="text-[#1E90FF] hover:bg-[#1E90FF]/10 hover:text-[#1E90FF]">
                    <Plus className="h-4 w-4 mr-2" />
                    Añadir Transacción
                </Button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-[#1E90FF]/20">
                            <th className="p-4 font-medium text-[#EAEAEA]/70">ID Transacción</th>
                            <th className="p-4 font-medium text-[#EAEAEA]/70">Proyecto</th>
                            <th className="p-4 font-medium text-[#EAEAEA]/70">Fecha</th>
                            <th className="p-4 font-medium text-[#EAEAEA]/70">Estado</th>
                            <th className="p-4 font-medium text-[#EAEAEA]/70 text-right">Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentTransactions.map(tx => (
                            <tr key={tx.id} className="border-b border-[#1E90FF]/10 hover:bg-[#1E90FF]/5">
                                <td className="p-4 font-mono text-sm text-[#1E90FF]">{tx.id}</td>
                                <td className="p-4">{tx.project}</td>
                                <td className="p-4 text-[#EAEAEA]/70">{tx.date}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(tx.status)}`}>
                                        {tx.status}
                                    </span>
                                </td>
                                <td className={`p-4 text-right font-medium ${tx.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                    {tx.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default Finances;
