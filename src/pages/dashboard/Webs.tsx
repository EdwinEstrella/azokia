import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, Globe, Eye, BarChart3, Calendar, Users, Shield, AlertCircle } from 'lucide-react';
import { useSupabase } from '../../hooks/useSupabase';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const Webs: React.FC = () => {
  const [websites, setWebsites] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const { getWebsites, searchWebsites, loading } = useSupabase('user-id');

  useEffect(() => {
    loadWebsites();
  }, []);

  const loadWebsites = async () => {
    const data = await getWebsites();
    setWebsites(data || []);
  };

  const handleSearch = async (query: string) => {
    setSearchTerm(query);
    if (query.trim()) {
      const results = await searchWebsites(query);
      setWebsites(results || []);
    } else {
      loadWebsites();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'bg-green-500/20 text-green-400';
      case 'MAINTENANCE': return 'bg-yellow-500/20 text-yellow-400';
      case 'DOWN': return 'bg-red-500/20 text-red-400';
      case 'DEVELOPMENT': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getUptimeColor = (uptime: number) => {
    if (uptime >= 99.9) return 'text-green-400';
    if (uptime >= 99) return 'text-yellow-400';
    return 'text-red-400';
  };

  const filteredWebsites = websites.filter(website => 
    filterStatus === 'ALL' || website.status === filterStatus
  );

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Webs</h1>
            <p className="text-[#EAEAEA]/60">Monitorea y gestiona tus sitios web</p>
          </div>
          <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Sitio Web
          </Button>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EAEAEA]/40 h-4 w-4" />
              <Input
                placeholder="Buscar sitios web..."
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
              <option value="MAINTENANCE">En mantenimiento</option>
              <option value="DOWN">Caídos</option>
              <option value="DEVELOPMENT">En desarrollo</option>
            </select>
          </div>
        </Card>

        {/* Websites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWebsites.map((website) => (
            <BackgroundGradient
              key={website.id}
              className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#EAEAEA]">{website.name}</h3>
                  <a 
                    href={website.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#1E90FF] text-sm hover:underline"
                  >
                    {website.url}
                  </a>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(website.status)}`}>
                  {website.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <Globe className="h-4 w-4" />
                  <span>{website.technology}</span>
                </div>
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Lanzado: {new Date(website.launch_date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <Shield className="h-4 w-4" />
                  <span>SSL: {website.ssl_status ? 'Activo' : 'Inactivo'}</span>
                </div>
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <BarChart3 className="h-4 w-4" />
                  <span className={getUptimeColor(website.uptime)}>
                    Uptime: {website.uptime}%
                  </span>
                </div>
              </div>

              {website.alerts > 0 && (
                <div className="flex items-center gap-2 text-yellow-400 text-sm mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <span>{website.alerts} alerta(s) activa(s)</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="text-sm text-[#EAEAEA]/60">
                  <Users className="h-4 w-4 inline mr-1" />
                  {website.visitors?.toLocaleString()} visitas/mes
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-[#EAEAEA] hover:bg-[#1E90FF]/20">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#EAEAEA] hover:bg-[#1E90FF]/20">
                    <BarChart3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {filteredWebsites.length === 0 && !loading && (
          <div className="text-center py-12">
            <Globe className="h-16 w-16 text-[#EAEAEA]/40 mx-auto mb-4" />
            <div className="text-[#EAEAEA]/40 mb-4">No hay sitios web registrados</div>
            <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
              <Plus className="h-4 w-4 mr-2" />
              Agregar primer sitio web
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Webs;
