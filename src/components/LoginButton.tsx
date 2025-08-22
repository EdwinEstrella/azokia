import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, User } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import LoginForm from './LoginForm';

const LoginButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="border border-white/20 bg-slate-900/60 text-gray-200 hover:bg-slate-800/80 hover:text-white transition-all duration-300 group"
        >
          <LogIn className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
          Iniciar Sesión
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-[#0D0F2D] border border-[#1E90FF]/30 backdrop-blur-lg rounded-2xl p-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/5 to-[#9B59B6]/5"></div>
        <div className="relative z-10">
          <DialogHeader className="p-6 pb-4">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E90FF] to-[#9B59B6] rounded-2xl flex items-center justify-center shadow-lg">
                <User className="h-8 w-8 text-white" />
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold text-center text-[#EAEAEA]">
              Bienvenido de vuelta
            </DialogTitle>
            <DialogDescription className="text-center text-[#EAEAEA]/70">
              Ingresa a tu cuenta para acceder a todos los servicios
            </DialogDescription>
          </DialogHeader>
          
          <LoginForm onSuccess={() => setIsOpen(false)} />
          
          <div className="px-6 pb-6 pt-4 text-center">
            <p className="text-sm text-[#EAEAEA]/60">
              ¿No tienes cuenta?{' '}
              <Link
                to="/register"
                className="text-[#1E90FF] hover:text-[#9B59B6] font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginButton;
