import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Settings, LogOut, DollarSign } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const DashboardLayout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const navLinks = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/dashboard/projects', icon: FolderKanban, label: 'Proyectos' },
    { to: '/dashboard/finances', icon: DollarSign, label: 'Finanzas' },
    { to: '/dashboard/settings', icon: Settings, label: 'Ajustes' },
  ];

  return (
    <div className="flex h-screen bg-[#0D0F2D] text-white">
      <aside className="w-64 bg-[#1A1C3A] p-6 flex flex-col justify-between border-r border-[#1E90FF]/20">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1E90FF] to-[#9E7FFF] rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold">A</span>
            </div>
            <h1 className="text-2xl font-bold text-[#EAEAEA]">Azokia</h1>
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/dashboard'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-[#EAEAEA]/70 hover:bg-[#1E90FF]/20 hover:text-white ${
                    isActive ? 'bg-[#1E90FF]/20 text-white' : ''
                  }`
                }
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-[#EAEAEA]/70 hover:bg-red-500/20 hover:text-red-400"
        >
          <LogOut className="h-5 w-5" />
          <span>Cerrar Sesión</span>
        </button>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
