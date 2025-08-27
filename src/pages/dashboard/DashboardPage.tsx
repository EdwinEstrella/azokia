import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart3, Users, FileText, DollarSign } from 'lucide-react';
import { useDatabase } from '../../hooks/useDatabase';
import { useAuth } from '../../hooks/useAuth';
import { Database } from '../../types/supabase';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

type Project = Database['public']['Tables']['projects']['Row'];

type InvoiceForDashboard = {
  status: string | null;
  total: number | null;
  issue_date: string;
};

type ProjectWithClient = Project & { clients: { name: string } | null };

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { getClients, getProjects, getInvoices, loading, error } = useDatabase(user?.id || '');
  const [totalClients, setTotalClients] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [recentProjects, setRecentProjects] = useState<ProjectWithClient[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    if (user?.id) {
      const fetchData = async () => {
        try {
          const clients = await getClients();
          setTotalClients(clients.length);

          const projects = await getProjects();
          setTotalProjects(projects.length);
          setRecentProjects(projects.slice(0, 5));

          const invoices = await getInvoices() as InvoiceForDashboard[];
          
          const revenue = invoices
            .filter(inv => inv.status === 'paid')
            .reduce((sum, inv) => sum + (inv.total || 0), 0);
          setTotalRevenue(revenue);

          const monthlyData: { [key: string]: { Ingresos: number; Ventas: number } } = {};

          invoices.forEach(invoice => {
            if (invoice.issue_date) {
              const month = format(parseISO(invoice.issue_date), 'yyyy-MM');
              if (!monthlyData[month]) {
                monthlyData[month] = { Ingresos: 0, Ventas: 0 };
              }
              monthlyData[month].Ventas += invoice.total || 0;
              if (invoice.status === 'paid') {
                monthlyData[month].Ingresos += invoice.total || 0;
              }
            }
          });

          const lastSixMonths = Array.from({ length: 6 }, (_, i) => {
            const d = new Date();
            d.setMonth(d.getMonth() - i);
            return format(d, 'yyyy-MM');
          }).reverse();

          const formattedChartData = lastSixMonths.map(month => {
            const monthName = format(parseISO(month + '-01'), 'MMM', { locale: es });
            return {
              name: monthName.charAt(0).toUpperCase() + monthName.slice(1),
              Ingresos: monthlyData[month]?.Ingresos || 0,
              Ventas: monthlyData[month]?.Ventas || 0,
            }
          });

          setChartData(formattedChartData);

        } catch (err) {
          console.error('Error fetching dashboard data:', err);
        }
      };
      fetchData();
    }
  }, [user?.id, getClients, getProjects, getInvoices]);

  const metrics: { title: string; value: string; change: string; color: string; icon: React.ElementType; }[] = [
    {
      title: 'Ingresos Totales',
      value: `${totalRevenue.toLocaleString('es-DO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: 'Calculado de facturas pagadas',
      color: 'text-green-400',
      icon: DollarSign,
    },
    {
      title: 'Clientes Activos',
      value: totalClients.toString(),
      change: `Total de clientes registrados`,
      color: 'text-blue-400',
      icon: Users,
    },
    {
      title: 'Proyectos Totales',
      value: totalProjects.toString(),
      change: 'Total de proyectos creados',
      color: 'text-yellow-400',
      icon: FileText,
    },
    {
      title: 'Proyectos en Desarrollo',
      value: recentProjects.filter(p => p.status === 'development').length.toString(),
      change: 'De los últimos 5 proyectos',
      color: 'text-purple-400',
      icon: BarChart3,
    },
  ];

  const getProjectStatusBadge = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500 bg-opacity-20 text-green-400';
      case 'development': return 'bg-blue-500 bg-opacity-20 text-blue-400';
      case 'pending': return 'bg-yellow-500 bg-opacity-20 text-yellow-400';
      case 'cancelled': return 'bg-red-500 bg-opacity-20 text-red-400';
      case 'testing': return 'bg-purple-500 bg-opacity-20 text-purple-400';
      default: return 'bg-gray-500 bg-opacity-20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Resumen del rendimiento de la agencia</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading && <p className="text-gray-400">Cargando métricas...</p>}
        {error && <p className="text-red-400">Error al cargar métricas: {error}</p>}
        {!loading && !error && metrics.map((metric, index: number) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-500 border-opacity-20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">{metric.title}</p>
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                    <p className={`text-sm ${metric.color}`}>{metric.change}</p>
                  </div>
                  <div className="p-3 bg-blue-500 bg-opacity-20 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Sales/Expenses Chart */}
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-500 border-opacity-20">
        <CardHeader>
          <CardTitle className="text-white">Rendimiento Mensual (Últimos 6 meses)</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#EAEAEA" />
              <YAxis stroke="#EAEAEA" />
              <Tooltip cursor={{ fill: 'rgba(30, 144, 255, 0.2)' }} contentStyle={{ backgroundColor: '#0D0F2D', border: 'none' }} itemStyle={{ color: '#EAEAEA' }} labelStyle={{ color: '#1E90FF' }} />
              <Legend />
              <Bar dataKey="Ventas" fill="#8884d8" name="Ventas (Facturado)" />
              <Bar dataKey="Ingresos" fill="#82ca9d" name="Ingresos (Pagado)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Projects */}
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-500 border-opacity-20">
        <CardHeader>
          <CardTitle className="text-white">Proyectos Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-500 border-opacity-20">
                  <th className="text-left text-gray-400 py-3">Cliente</th>
                  <th className="text-left text-gray-400 py-3">Proyecto</th>
                  <th className="text-left text-gray-400 py-3">Estado</th>
                  <th className="text-left text-gray-400 py-3">Fechas</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={4} className="py-3 text-center text-gray-400">Cargando proyectos recientes...</td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td colSpan={4} className="py-3 text-center text-red-400">Error: {error}</td>
                  </tr>
                )}
                {!loading && !error && recentProjects.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-3 text-center text-gray-400">No hay proyectos recientes.</td>
                  </tr>
                )}
                {recentProjects.map((project: ProjectWithClient) => (
                  <tr key={project.id} className="border-b border-blue-500 border-opacity-10">
                    <td className="py-3 text-white font-medium">{project.clients?.name || 'N/A'}</td>
                    <td className="py-3 text-white font-medium">{project.name}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded text-xs ${getProjectStatusBadge(project.status)}`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="py-3 text-gray-400">
                      {new Date(project.start_date || '').toLocaleDateString()} - {project.estimated_end_date ? new Date(project.estimated_end_date).toLocaleDateString() : 'N/A'}
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

export default DashboardPage;
