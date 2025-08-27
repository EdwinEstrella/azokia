import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { useDatabase } from '../../hooks/useDatabase';
import { useAuth } from '../../hooks/useAuth';
import { Database } from '../../types/supabase';

type Client = Database['public']['Tables']['clients']['Row'];

const ClientsPage: React.FC = () => {
  const { user } = useAuth();
  const { getClients, loading, error } = useDatabase(user?.id || '');
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    if (user?.id) {
      const fetchClients = async () => {
        try {
          const fetchedClients = await getClients();
          setClients(fetchedClients);
        } catch (err) {
          console.error('Error fetching clients:', err);
        }
      };
      fetchClients();
    }
  }, [user?.id, getClients]);

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: string } = {
      active: 'bg-green-500/20 text-green-400',
      inactive: 'bg-red-500/20 text-red-400',
      prospect: 'bg-blue-500/20 text-blue-400',
    };
    return variants[status] || 'bg-gray-500/20 text-gray-400';
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
                  <th className="text-left text-[#EAEAEA]/70 py-3">Email</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Teléfono</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Estado</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={4} className="py-3 text-center text-[#EAEAEA]/70">Cargando clientes...</td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td colSpan={4} className="py-3 text-center text-red-400">Error: {error}</td>
                  </tr>
                )}
                {!loading && !error && clients.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-3 text-center text-[#EAEAEA]/70">No hay clientes registrados.</td>
                  </tr>
                )}
                {clients.map((client: Client) => (
                  <tr key={client.id} className="border-b border-[#1E90FF]/10">
                    <td className="py-3">
                      <p className="text-[#EAEAEA] font-medium">{client.name}</p>
                    </td>
                    <td className="py-3 text-[#EAEAEA]">{client.email}</td>
                    <td className="py-3 text-[#EAEAEA]">{client.phone || 'N/A'}</td>
                    <td className="py-3">
                      <Badge className={getStatusBadge(client.status)}>
                        {client.status}
                      </Badge>
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

export default ClientsPage;
