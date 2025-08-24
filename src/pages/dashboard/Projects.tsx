import React, { useState } from 'react';
import { Plus, Calendar, Clock, Users, Target, CheckCircle, Play, Pause, Edit, Trash2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { BackgroundGradient } from '../../components/ui/background-gradient';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { ProjectForm } from '../../components/forms/ProjectForm';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Rediseño Website Corporativo",
      client: "TechSolutions Inc.",
      status: "active",
      progress: 75,
      hours: 120,
      budget: 50000,
      startDate: "2024-01-15",
      endDate: "2024-03-15",
      team: ["María García", "Carlos Rodríguez", "Ana Martínez"],
      description: "Rediseño completo del sitio web corporativo con enfoque en UX y rendimiento"
    },
    {
      id: 2,
      name: "App Móvil E-commerce",
      client: "FashionStore MX",
      status: "paused",
      progress: 30,
      hours: 45,
      budget: 75000,
      startDate: "2024-02-01",
      endDate: "2024-05-01",
      team: ["Juan Pérez", "Laura Sánchez"],
      description: "Desarrollo de aplicación móvil para plataforma de e-commerce"
    },
    {
      id: 3,
      name: "Sistema de Gestión Interna",
      client: "Consultoría ABC",
      status: "completed",
      progress: 100,
      hours: 200,
      budget: 120000,
      startDate: "2023-11-01",
      endDate: "2024-01-31",
      team: ["Pedro López", "Sofía Ramírez", "Miguel Torres"],
      description: "Sistema integral de gestión de procesos internos y reporting"
    }
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(amount);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Play className="h-4 w-4 text-green-400" />;
      case 'paused': return <Pause className="h-4 w-4 text-yellow-400" />;
      case 'completed': return <CheckCircle className="h-4 w-4 text-blue-400" />;
      default: return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const handleProjectCreated = (newProject: any) => {
    setProjects(prev => [...prev, { ...newProject, id: Date.now() }]);
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Proyectos</h1>
            <p className="text-[#EAEAEA]/60">Gestiona proyectos, tareas y tiempo facturado</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#1E90FF] hover:bg-[#1E90FF]/90">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Proyecto
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0D0F2D] border-[#1E90FF]/30 text-[#EAEAEA]">
              <DialogHeader>
                <DialogTitle>Crear Nuevo Proyecto</DialogTitle>
              </DialogHeader>
              <ProjectForm onProjectCreated={handleProjectCreated} />
            </DialogContent>
          </Dialog>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <BackgroundGradient
              key={project.id}
              className="rounded-[22px] p-4 sm:p-6 bg-[#0D0F2D]/80 flex flex-col h-full"
              containerClassName="w-full h-full"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#EAEAEA]">{project.name}</h3>
                    <p className="text-sm text-[#1E90FF]">{project.client}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm capitalize bg-[#1E90FF]/10 px-2 py-1 rounded-full text-[#1E90FF]">
                    {getStatusIcon(project.status)}
                    <span>{project.status}</span>
                  </div>
                </div>

                <p className="text-[#EAEAEA]/70 text-sm mb-4">{project.description}</p>

                <div className="space-y-3 text-sm mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#EAEAEA]/60 flex items-center"><Calendar className="h-4 w-4 mr-2" /> Fecha Límite</span>
                    <span className="text-[#EAEAEA] font-medium">{new Date(project.endDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#EAEAEA]/60 flex items-center"><Clock className="h-4 w-4 mr-2" /> Horas</span>
                    <span className="text-[#EAEAEA] font-medium">{project.hours}h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#EAEAEA]/60 flex items-center"><Target className="h-4 w-4 mr-2" /> Presupuesto</span>
                    <span className="text-[#EAEAEA] font-medium">{formatCurrency(project.budget)}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span className="text-[#EAEAEA]/60">Progreso</span>
                    <span className="text-[#1E90FF] font-semibold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-[#1E90FF]/20 rounded-full h-2">
                    <div className="bg-[#1E90FF] h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>

                <div>
                  <p className="text-[#EAEAEA]/60 text-sm mb-2">Equipo</p>
                  <div className="flex items-center space-x-2">
                    {project.team.map((member, index) => (
                      <div key={index} className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white" title={member}>
                        {member.split(' ').map(n => n[0]).join('')}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E90FF]/20 flex items-center justify-end gap-2">
                <Button variant="ghost" size="icon" className="text-[#EAEAEA]/70 hover:text-white hover:bg-[#1E90FF]/20">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-red-400/70 hover:text-red-400 hover:bg-red-400/20">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
