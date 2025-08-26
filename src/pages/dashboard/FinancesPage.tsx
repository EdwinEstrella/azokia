import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const FinancesPage: React.FC = () => {
  const financialData = {
    ingresosTotales: '€89,450',
    ingresosMensuales: '€8,750',
    gastosMensuales: '€2,300',
    profit: '€6,450',
    clientesActivos: 24,
    tasaRetencion: '92%'
  };

  const monthlyRevenue = [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Finanzas</h1>
        <p className="text-[#EAEAEA]/70">Rendimiento financiero de nuestra agencia</p>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
          <CardHeader>
            <CardTitle className="text-[#EAEAEA] text-sm">Ingresos Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#EAEAEA]">{financialData.ingresosTotales}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
          <CardHeader>
            <CardTitle className="text-[#EAEAEA] text-sm">Ingresos Mensuales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#EAEAEA]">{financialData.ingresosMensuales}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
          <CardHeader>
            <CardTitle className="text-[#EAEAEA] text-sm">Profit Mensual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-400">{financialData.profit}</p>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold text-[#EAEAEA]">{financialData.clientesActivos}</p>
            <p className="text-[#EAEAEA]/70">Clientes Activos</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold text-[#EAEAEA]">{financialData.tasaRetencion}</p>
            <p className="text-[#EAEAEA]/70">Tasa de Retención</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
          <CardContent className="p-6 text-center">
            <p className="text-3xl font-bold text-[#EAEAEA]">{financialData.gastosMensuales}</p>
            <p className="text-[#EAEAEA]/70">Gastos Mensuales</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
        <CardHeader>
          <CardTitle className="text-[#EAEAEA]">Ingresos Mensuales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyRevenue.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-[#EAEAEA]">{item.mes}</span>
                <div className="flex items-center gap-4">
                  <div className="w-32 bg-[#1E90FF]/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] h-2 rounded-full"
                      style={{ width: `${(item.ingresos / 10000) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-[#EAEAEA] w-16 text-right">€{item.ingresos}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancesPage;
