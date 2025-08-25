import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-[#0D0F2D] border-b border-[#1E90FF]/20 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden text-[#EAEAEA]">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#EAEAEA]/40 h-4 w-4" />
            <Input
              placeholder="Buscar..."
              className="pl-10 bg-[#0D0F2D] border-[#1E90FF]/20 text-[#EAEAEA]"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-[#EAEAEA] hover:bg-[#1E90FF]/20">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
