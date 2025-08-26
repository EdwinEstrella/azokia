import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Eye, UserPlus, Calendar, Phone, MapPin } from 'lucide-react';
import { useDatabase } from '../../hooks/useDatabase';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { ClientForm } from '../../components/forms/ClientForm';

const Clients: React.FC = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { user } = useAuth();
  const { getClients, searchClients, loading } = useDatabase(user!.id);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const data = await getClients();
    setClients(data || []);
  };

  const handleSearch = async (query: string) => {
    setSearchTerm(query);
    if (query.trim()) {
      const results = await searchClients(query);
      setClients(results || []);
    } else {
      loadClients();
    }
  };

  const handleClientCreated = () => {
    setIsDialogOpen(false);
    loadClients();
  };

  const filteredClients = clients.filter(client => 
    filterStatus === 'ALL' || client.status === filterStatus
  );

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Clientes</h1>
            <p className="text-[#EAEAEA]/60">Gestiona tu cartera de clientes</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
                <UserPlus className="h-4 w-4 mr-2" />
                Nuevo Cliente
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0D0F2D] border-[#1E90FF]/30">
              <DialogHeader>
                <DialogTitle className="text-[#EAEAEA]">Agregar Nuevo Cliente</DialogTitle>
              </DialogHeader>
              <ClientForm onSuccess={handleClientCreated} />
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EAEAEA]/40 h-4 w-4" />
              <Input
                placeholder="Buscar clientes..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA]"
            >
              <option value="ALL">Todos los estados</option>
              <option value="ACTIVE">Activos</option>
              <option value="INACTIVE">Inactivos</option>
              <option value="SUSPENDED">Suspendidos</option>
            </select>
          </div>
        </Card>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client) => (
            <BackgroundGradient
              key={client.id}
              className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#EAEAEA]">{client.name}</h3>
                  <p className="text-[#1E90FF] text-sm">{client.email}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  client.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' :
                  client.status === 'INACTIVE' ? 'bg-gray-500/20 text-gray-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {client.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                {client.phone && (
                  <p className="text-[#EAEAEA]/70 text-sm flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {client.phone}
                  </p>
                )}
                {client.address && (
                  <p className="text-[#EAEAEA]/70 text-sm flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {client.address}
                  </p>
                )}
                {client.birth_date && (
                  <p className="text-[#EAEAEA]/70 text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(client.birth_date).toLocaleDateString()}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-[#EAEAEA]/60">
                  {client.contracts?.length || 0} contratos
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-[#EAEAEA] hover:bg-[#1E90FF]/20">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#EAEAEA] hover:bg-[#1E90FF]/20">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {filteredClients.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-[#EAEAEA]/40 mb-4">No hay clientes registrados</div>
            <Button 
              className="bg-[#1E90FF] hover:bg-[#1E90FF]/90"
              onClick={() => setIsDialogOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Agregar primer cliente
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clients;
