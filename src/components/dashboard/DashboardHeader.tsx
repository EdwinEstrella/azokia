import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb';
import { Button } from '../ui/button';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const DashboardHeader: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const getBreadcrumbItems = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    const items = [];
    
    if (pathnames.length > 0 && pathnames[0] === 'dashboard') {
      items.push({ href: '/dashboard', label: 'Dashboard' });
      
      if (pathnames.length > 1) {
        const page = pathnames[1];
        const pageLabels: { [key: string]: string } = {
          'clientes': 'Clientes',
          'contratos': 'Contratos',
          'proyectos': 'Proyectos',
          'facturacion': 'Facturación',
          'finanzas': 'Finanzas',
          'automatizacion': 'Automatización',
          'configuracion': 'Configuración'
        };
        
        items.push({ 
          href: `/dashboard/${page}`, 
          label: pageLabels[page] || page 
        });
      }
    }
    
    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <header className="bg-[#0D0F2D] border-b border-[#1E90FF]/20 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#EAEAEA] mb-2">
            Panel de Administración - Azokia
          </h1>
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={item.href}>
                  <BreadcrumbItem>
                    <BreadcrumbLink 
                      href={item.href}
                      className={index === breadcrumbItems.length - 1 ? 'text-[#1E90FF]' : 'text-[#EAEAEA]/70'}
                    >
                      {item.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1E90FF]/20 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-[#1E90FF]" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-[#EAEAEA]">{user?.email}</p>
              <p className="text-xs text-[#EAEAEA]/60">Administrador</p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="text-[#EAEAEA]/70 hover:text-[#EAEAEA] hover:bg-red-500/20"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
