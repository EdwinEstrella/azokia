import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, FolderKanban, Calendar, Users, Target, Clock, BarChart3 } from 'lucide-react';
import { useSupabase } from '../../hooks/useSupabase';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const { getProjects, searchProjects, loading } = useSupabase('user-id');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data || []);
  };

  const handleSearch = async (query: string) => {
    setSearchTerm(query);
    if (query.trim()) {
      const results = await searchProjects(query);
      setProjects(results || []);
    } else {
      loadProjects();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE': return 'bg-green-500/20 text-green-400';
      case 'COMPLETED': return 'bg-blue-500/20 text-blue-400';
      case 'ON_HOLD': return 'bg-yellow-500/20 text-yellow-400';
      case 'CANCELLED': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 20) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const filteredProjects = projects.filter(project => 
    filterStatus === 'ALL' || project.status === filterStatus
  );

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Proyectos</h1>
            <p className="text-[#EAEAEA]/60">Gestiona tus proyectos activos</p>
          </div>
          <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Proyecto
          </Button>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EAEAEA]/40 h-4 w-4" />
              <Input
                placeholder="Buscar proyectos..."
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
              <option value="COMPLETED">Completados</option>
              <option value="ON_HOLD">En pausa</option>
              <option value="CANCELLED">Cancelados</option>
            </select>
          </div>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <BackgroundGradient
              key={project.id}
              className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#EAEAEA]">{project.name}</h3>
                  <p className="text-[#1E90FF] text-sm">{project.client_name}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                  {project.status.replace('_', ' ')}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(project.start_date).toLocaleDateString()} - {new Date(project.end_date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <Users className="h-4 w-4" />
                  <span>{project.team_members} miembros</span>
                </div>
                <div className="flex items-center gap-2 text-[#EAEAEA]/70 text-sm">
                  <Target className="h-4 w-4" />
                  <span>Presupuesto: ${project.budget?.toLocaleString()}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-[#EAEAEA]/70 mb-2">
                  <span>Progreso</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-[#1A1C3A] rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-[#EAEAEA]/60">
                  <Clock className="h-4 w-4 inline mr-1" />
                  {Math.ceil((new Date(project.end_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} días restantes
                </div>
                <Button variant="ghost" size="sm" className="text-[#EAEAEA] hover:bg-[#1E90FF]/20">
                  <BarChart3 className="h-4 w-4" />
                </Button>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        {filteredProjects.length === 0 && !loading && (
          <div className="text-center py-12">
            <FolderKanban className="h-16 w-16 text-[#EAEAEA]/40 mx-auto mb-4" />
            <div className="text-[#EAEAEA]/40 mb-4">No hay proyectos registrados</div>
            <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
              <Plus className="h-4 w-4 mr-2" />
              Crear primer proyecto
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
