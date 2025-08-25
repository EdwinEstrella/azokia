import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, CreditCard, Calendar, Download, Filter } from 'lucide-react';
import { useSupabase } from '../../hooks/useSupabase';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const Finances: React.FC = () => {
  const [financialData, setFinancialData] = useState<any>({});
  const [transactions, setTransactions] = useState<any[]>([]);
  const { getFinancialData, getRecentTransactions, loading } = useSupabase('user-id');

  useEffect(() => {
    loadFinancialData();
  }, []);

  const loadFinancialData = async () => {
    const [data, trans] = await Promise.all([
      getFinancialData(),
      getRecentTransactions()
    ]);
    setFinancialData(data || {});
    setTransactions(trans || []);
  };

  const financialStats = [
    {
      title: 'Ingresos Totales',
      value: `$${financialData.totalRevenue?.toLocaleString() || '0'}`,
      change: '+15%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      title: 'Gastos',
      value: `$${financialData.totalExpenses?.toLocaleString() || '0'}`,
      change: '+8%',
      trend: 'down',
      icon: TrendingDown,
      color: 'text-red-400'
    },
    {
      title: 'Beneficio Neto',
      value: `$${financialData.netProfit?.toLocaleString() || '0'}`,
      change: '+22%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-blue-400'
    },
    {
      title: 'Facturas Pendientes',
      value: `$${financialData.pendingInvoices?.toLocaleString() || '0'}`,
      change: '-3%',
      trend: 'down',
      icon: CreditCard,
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Finanzas</h1>
          <p className="text-[#EAEAEA]/60">Resumen financiero de tu negocio</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {financialStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <BackgroundGradient
                key={index}
                className="rounded-2xl p-0.5 bg-[#1A1C3A]"
              >
                <Card className="p-6 bg-[#0D0F2D] border-none">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#EAEAEA]/60 text-sm mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-[#EAEAEA]">{stat.value}</p>
                      <p className={`text-sm ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.change}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-[#1A1C3A] ${stat.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </Card>
              </BackgroundGradient>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <BackgroundGradient className="rounded-2xl p-0.5 bg-[#1A1C3A]">
            <Card className="p-6 bg-[#0D0F2D] border-none">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-[#EAEAEA]">Transacciones Recientes</h3>
                <button className="text-[#1E90FF] text-sm hover:underline">
                  <Filter className="h-4 w-4 inline mr-1" />
                  Filtrar
                </button>
              </div>
              <div className="space-y-4">
                {transactions.slice(0, 5).map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg bg-[#1A1C3A]/50">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'INCOME' ? 'bg-green-500/20' : 'bg-red-500/20'
                      }`}>
                        {transaction.type === 'INCOME' ? (
                          <TrendingUp className="h-4 w-4 text-green-400" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-[#EAEAEA] font-medium">{transaction.description}</p>
                        <p className="text-[#EAEAEA]/60 text-sm">
                          {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className={`text-right ${
                      transaction.type === 'INCOME' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      <p className="font-semibold">
                        {transaction.type === 'INCOME' ? '+' : '-'}${transaction.amount?.toLocaleString()}
                      </p>
                      <p className="text-[#EAEAEA]/60 text-sm">{transaction.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </BackgroundGradient>

          {/* Financial Summary */}
          <BackgroundGradient className="rounded-2xl p-0.5 bg-[#1A1C3A]">
            <Card className="p-6 bg-[#0D0F2D] border-none">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-[#EAEAEA]">Resumen Financiero</h3>
                <button className="text-[#1E90FF] text-sm hover:underline">
                  <Download className="h-4 w-4 inline mr-1" />
                  Exportar
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#1A1C3A]/50">
                  <span className="text-[#EAEAEA]">Ingresos este mes</span>
                  <span className="text-green-400 font-semibold">
                    +${financialData.monthlyRevenue?.toLocaleString() || '0'}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#1A1C3A]/50">
                  <span className="text-[#EAEAEA]">Gastos este mes</span>
                  <span className="text-red-400 font-semibold">
                    -${financialData.monthlyExpenses?.toLocaleString() || '0'}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#1A1C3A]/50">
                  <span className="text-[#EAEAEA]">Balance mensual</span>
                  <span className={`font-semibold ${
                    (financialData.monthlyRevenue - financialData.monthlyExpenses) >= 0 
                      ? 'text-green-400' : 'text-red-400'
                  }`}>
                    ${((financialData.monthlyRevenue || 0) - (financialData.monthlyExpenses || 0))?.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-[#1A1C3A]/50">
                  <span className="text-[#EAEAEA]">Próximos pagos</span>
                  <span className="text-yellow-400 font-semibold">
                    ${financialData.upcomingPayments?.toLocaleString() || '0'}
                  </span>
                </div>
              </div>
            </Card>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default Finances;
