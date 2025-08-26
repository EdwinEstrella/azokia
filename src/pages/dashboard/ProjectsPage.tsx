import React, { useState, useEffect } from 'react';
import { Plus, Search, Globe, Edit, Eye, ExternalLink, Calendar, Server } from 'lucide-react';
import { useDatabase } from '../../hooks/useDatabase';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card } from '../../components/ui/card';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { ProjectForm } from '../../components/forms/ProjectForm';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { user } = useAuth();
  const { getProjects, loading } = useDatabase(user!.id);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data || []);
  };

  const handleProjectCreated = () => {
    setIsDialogOpen(false);
    loadProjects();
  };

  const filteredProjects = projects.filter(project =>
    (filterStatus === 'ALL' || project.status === filterStatus) &&
    (project.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.client_name?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
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
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Proyectos</h1>
            <p className="text-[#EAEAEA]/60">Gestiona tus proyectos</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Proyecto
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0D0F2D] border-[#1E90FF]/30 max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-[#EAEAEA]">Agregar Nuevo Proyecto</DialogTitle>
              </DialogHeader>
              <ProjectForm onSuccess={handleProjectCreated} />
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/20">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EAEAEA]/40 h-4 w-4" />
              <Input
                placeholder="Buscar proyectos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-[#0D0F2D] border border-[#1E90FF]/20 rounded-lg text-[#EAEAEA]"
            >
              <option value="ALL">Todos los estados</option>
              <option value="pending">Pendiente</option>
              <option value="development">Desarrollo</option>
              <option value="testing">Pruebas</option>
              <option value="completed">Completado</option>
              <option value="cancelled">Cancelado</option>
            </select>
          </div>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <BackgroundGradient
              key={project.id}
              className="rounded-2xl p-6 bg-[#0D0F2D]/80 border border-[#1E90FF]/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1E90FF]/20 rounded-lg">
                    <Globe className="h-5 w-5 text-[#1E90FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#EAEAEA]">{project.name}</h3>
                    <p className="text-[#1E90FF] text-sm">{project.clients?.name || 'Sin cliente'}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                {project.repository_url && (
                  <p className="text-[#EAEAEA]/70 text-sm flex items-center gap-2">
                    <Server className="h-4 w-4" />
                    {project.repository_url}
                  </p>
                )}
                {project.start_date && (
                  <p className="text-[#EAEAEA]/70 text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Inicio: {new Date(project.start_date).toLocaleDateString()}
                  </p>
                )}
                {project.estimated_end_date && (
                  <p className="text-[#EAEAEA]/70 text-sm">
                    Fin: {new Date(project.estimated_end_date).toLocaleDateString()}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-[#EAEAEA]/60">
                  {project.contracts_count || 0} contratos
                </div>
                <div className="flex gap-2">
                  {project.production_url && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#EAEAEA] hover:bg-[#1E90FF]/20"
                      onClick={() => window.open(project.production_url, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
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

        {filteredProjects.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-[#EAEAEA]/40 mb-4">No hay proyectos registrados</div>
            <Button 
              className="bg-[#1E90FF] hover:bg-[#1E90FF]/90"
              onClick={() => setIsDialogOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Agregar primer proyecto
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
