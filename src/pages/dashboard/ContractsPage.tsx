import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { useDatabase } from '../../hooks/useDatabase';
import { useAuth } from '../../hooks/useAuth';
import { Database } from '../../types/supabase';

type Contract = Database['public']['Tables']['contracts']['Row'];
type ContractWithClient = Contract & { clients: { name: string } | null };

const ContractsPage: React.FC = () => {
  const { user } = useAuth();
  const { getContracts, loading, error } = useDatabase(user?.id || '');
  const [contracts, setContracts] = useState<ContractWithClient[]>([]);

  useEffect(() => {
    if (user?.id) {
      const fetchContracts = async () => {
        try {
          const fetchedContracts = await getContracts();
          setContracts(fetchedContracts);
        } catch (err) {
          console.error('Error fetching contracts:', err);
        }
      };
      fetchContracts();
    }
  }, [user?.id, getContracts]);

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: string } = {
      draft: 'bg-gray-500/20 text-gray-400',
      sent: 'bg-blue-500/20 text-blue-400',
      signed: 'bg-green-500/20 text-green-400',
      completed: 'bg-purple-500/20 text-purple-400',
      cancelled: 'bg-red-500/20 text-red-400',
    };
    return variants[status] || 'bg-gray-500/20 text-gray-400';
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
                  <th className="text-left text-[#EAEAEA]/70 py-3">Título</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Valor</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Estado</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Fechas</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr>
                    <td colSpan={5} className="py-3 text-center text-[#EAEAEA]/70">Cargando contratos...</td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td colSpan={5} className="py-3 text-center text-red-400">Error: {error}</td>
                  </tr>
                )}
                {!loading && !error && contracts.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-3 text-center text-[#EAEAEA]/70">No hay contratos registrados.</td>
                  </tr>
                )}
                {contracts.map((contract: ContractWithClient) => (
                  <tr key={contract.id} className="border-b border-[#1E90FF]/10">
                    <td className="py-3 text-[#EAEAEA] font-medium">{contract.clients?.name || 'N/A'}</td>
                    <td className="py-3 text-[#EAEAEA] font-medium">{contract.title}</td>
                    <td className="py-3 text-[#EAEAEA] font-medium">${contract.amount.toFixed(2)}</td>
                    <td className="py-3">
                      <Badge className={getStatusBadge(contract.status)}>
                        {contract.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-[#EAEAEA]/70">
                      {contract.start_date ? new Date(contract.start_date).toLocaleDateString() : 'N/A'} - {contract.end_date ? new Date(contract.end_date).toLocaleDateString() : 'N/A'}
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
