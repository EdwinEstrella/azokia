import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart3, Users, FileText, DollarSign } from 'lucide-react';
import { useDatabase } from '../../hooks/useDatabase';
import { useAuth } from '../../hooks/useAuth';
import { Database } from '../../types/supabase';

type Project = Database['public']['Tables']['projects']['Row'];
type InvoiceWithClientAndItems = Database['public']['Tables']['invoices']['Row'] & { clients: { name: string } | null; invoice_items: any[] };
type ProjectWithClient = Project & { clients: { name: string } | null };

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { getClients, getProjects, getInvoices, loading, error } = useDatabase(user?.id || '');
  const [totalClients, setTotalClients] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [recentProjects, setRecentProjects] = useState<ProjectWithClient[]>([]);

  useEffect(() => {
    if (user?.id) {
      const fetchData = async () => {
        try {
          // Fetch Clients
          const clients = await getClients();
          setTotalClients(clients.length);

          // Fetch Projects
          const projects = await getProjects();
          setTotalProjects(projects.length);
          setRecentProjects(projects.slice(0, 5)); // Get last 5 projects

          // Fetch Invoices for Revenue
          const invoices = await getInvoices();
          const revenue = invoices.filter((inv: InvoiceWithClientAndItems) => inv.status === 'paid').reduce((sum: number, inv: InvoiceWithClientAndItems) => sum + inv.total, 0);
          setTotalRevenue(revenue);

        } catch (err) {
          console.error('Error fetching dashboard data:', err);
        }
      };
      fetchData();
    }
  }, [user?.id, getClients, getProjects, getInvoices]);

  const metrics = [
    {
      title: 'Ingresos Totales',
      value: `${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: '+10% vs last month', // Placeholder
      color: 'text-green-400',
      icon: DollarSign,
    },
    {
      title: 'Clientes Activos',
      value: totalClients.toString(),
      change: '+5% vs last month', // Placeholder
      color: 'text-blue-400',
      icon: Users,
    },
    {
      title: 'Proyectos Totales',
      value: totalProjects.toString(),
      change: '+2% vs last month', // Placeholder
      color: 'text-yellow-400',
      icon: FileText,
    },
    {
      title: 'Proyectos en Desarrollo',
      value: recentProjects.filter(p => p.status === 'development').length.toString(),
      change: '-', // Placeholder
      color: 'text-purple-400',
      icon: BarChart3,
    },
  ];

  const getProjectStatusBadge = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'development': return 'bg-blue-500/20 text-blue-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'cancelled': return 'bg-red-500/20 text-red-400';
      case 'testing': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default DashboardPage;
