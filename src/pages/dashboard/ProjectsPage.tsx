import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      cliente: 'TechCorp SA',
      proyecto: 'Sitio corporativo',
      tipo: 'Desarrollo Web',
      estado: 'desarrollo',
      progreso: 65,
      plazo: '15 días',
      presupuesto: '€12,500'
    },
    {
      cliente: 'Boutique Luna',
      proyecto: 'E-commerce',
      tipo: 'Tienda Online',
      estado: 'revisión',
      progreso: 90,
      plazo: '5 días',
      presupuesto: '€8,200'
    },
    {
      cliente: 'Restaurant El Puerto',
      proyecto: 'Landing page',
      tipo: 'Marketing',
      estado: 'diseño',
      progreso: 30,
      plazo: '10 días',
      presupuesto: '€3,800'
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      diseño: 'bg-purple-500/20 text-purple-400',
      desarrollo: 'bg-blue-500/20 text-blue-400',
      revisión: 'bg-yellow-500/20 text-yellow-400',
      completado: 'bg-green-500/20 text-green-400'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">Proyectos</h1>
        <p className="text-[#EAEAEA]/70">Sitios web que desarrollamos para clientes</p>
      </div>

      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
        <CardHeader>
          <CardTitle className="text-[#EAEAEA]">Proyectos Activos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1E90FF]/20">
                  <th className="text-left text-[#EAEAEA]/70 py-3">Cliente</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Proyecto</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Tipo</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Estado</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Progreso</th>
                  <th className="text-left text-[#EAEAEA]/70 py-3">Presupuesto</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="border-b border-[#1E90FF]/10">
                    <td className="py-3 text-[#EAEAEA] font-medium">{project.cliente}</td>
                    <td className="py-3 text-[#EAEAEA]">{project.proyecto}</td>
                    <td className="py-3 text-[#EAEAEA]/70">{project.tipo}</td>
                    <td className="py-3">
                      <Badge className={getStatusBadge(project.estado)}>
                        {project.estado}
                      </Badge>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <Progress value={project.progreso} className="w-20" />
                        <span className="text-[#EAEAEA] text-sm">{project.progreso}%</span>
                      </div>
                    </td>
                    <td className="py-3 text-[#EAEAEA] font-medium">{project.presupuesto}</td>
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

export default ProjectsPage;
