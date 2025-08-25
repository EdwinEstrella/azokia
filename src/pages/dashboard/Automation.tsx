import React, { useState } from 'react';
import { Zap, Play, Pause, Settings, Clock, Calendar, Mail, Bell, CheckCircle, XCircle } from 'lucide-react';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Switch } from '../../components/ui/switch';

const Automation: React.FC = () => {
  const [automations, setAutomations] = useState([
    {
      id: 1,
      name: 'Recordatorio de Pagos',
      description: 'Envía recordatorios automáticos de facturas pendientes',
      enabled: true,
      type: 'payment',
      schedule: 'Diario a las 9:00 AM',
      lastRun: '2024-01-15 09:00:00',
      status: 'success'
    },
    {
      id: 2,
      name: 'Bienvenida a Nuevos Clientes',
      description: 'Envía email de bienvenida a nuevos clientes',
      enabled: true,
      type: 'welcome',
      schedule: 'Inmediato al registro',
      lastRun: '2024-01-14 14:30:00',
      status: 'success'
    },
    {
      id: 3,
      name: 'Reporte Semanal',
      description: 'Envía reporte semanal de actividades',
      enabled: false,
      type: 'report',
      schedule: 'Lunes a las 8:00 AM',
      lastRun: '2024-01-08 08:00:00',
      status: 'idle'
    },
    {
      id: 4,
      name: 'Recordatorio de Reuniones',
      description: 'Envía recordatorios de reuniones programadas',
      enabled: true,
      type: 'meeting',
      schedule: '1 hora antes de la reunión',
      lastRun: '2024-01-15 10:00:00',
      status: 'success'
    }
  ]);

  const toggleAutomation = (id: number) => {
    setAutomations(automations.map(auto => 
      auto.id === id ? { ...auto, enabled: !auto.enabled } : auto
    ));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'payment': return <DollarSign className="h-5 w-5" />;
      case 'welcome': return <Mail className="h-5 w-5" />;
      case 'report': return <Calendar className="h-5 w-5" />;
      case 'meeting': return <Clock className="h-5 w-5" />;
      default: return <Zap className="h-5 w-5" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-400" />;
      default: return <Clock className="h-4 w-4 text-yellow-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* HeaderI'll continue implementing the complete dashboard structure. Let me create the remaining modules and resolve the authentication redirect issues.

<boltArtifact id="complete-dashboard-modules" title="Complete Dashboard Modules Implementation">
<boltAction type="file" filePath="src/pages/dashboard/Contracts.tsx">import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, FileText, Calendar, DollarSign, User, Clock, Download } from 'lucide-react';
import { useSupabase } from '../../hooks/useSupabase';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const Contracts: React.FC = () => {
  const [contracts, setContracts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const { getContracts, searchContracts, loading } = useSupabase('user-id');

  useEffect(() => {
    loadContracts();
  }, []);

  const loadContracts = async () => {
    const data = await getContracts();
    setContracts(data || []);
  };

  const handleSearch = async (query: string) => {
    setSearchTerm(query);
    if (query.trim()) {
      const results = await searchContracts(query);
      setContracts(results || []);
    } else {
      loadContracts();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'bg-green-500/20 text-green-400';
      case 'EXPIRED': return 'bg-red-500/20 text-red-400';
      case 'PENDING': return 'bg-yellow-500/20 text-yellow-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredContracts = contracts.filter(contract => 
    filterStatus === 'ALL' || contract.status === filterStatus
  );

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Contratos</h1>
            <p className="text-[#EAEAEA]/60">Gestiona tus contratos y acuerdos</p>
          </div>
          <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Contrato
          </Button>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EAEAEA]/40 h-4 w-4" />
              <Input
                placeholder="Buscar contratos..."
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
              <option value="PENDING">Pendientes</option>
              <option value="EXPIRED">Expirados</option>
            </select>
          </div>
        </Card>

        {/* Contracts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContracts.map((contract) => (
            <BackgroundGradient
              key={contract.id}
              className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#EAEAEA]">{contract.title}</h3>
                  <p className="text-[#1E90FF] text-sm">Contrato #{contract.contract_number}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(contract.status)}`}>
                  {contract.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <User className="h-4 w-4" />
                  <span>{contract.client_name}</span>
                </div>
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <DollarSign className="h-4 w-4" />
                  <span>${contract.value?.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(contract.start_date).toLocaleDateString()} - {new Date(contract.end_date).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-[#EAEAEA]/60">
                  <Clock className="h-4 w-4 inline mr-1" />
                  {Math.ceil((new Date(contract.end_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} días restantes
                </div>
                <Button variant="ghost" size="sm" className="text-[#EAEAEA] hover:bg-[#1E90FF]/20">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {filteredContracts.length === 0 && !loading && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-[#EAEAEA]/40 mx-auto mb-4" />
            <div className="text-[#EAEAEA]/40 mb-4">No hay contratos registrados</div>
            <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
              <Plus className="h-4 w-4 mr-2" />
              Crear primer contrato
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contracts;
