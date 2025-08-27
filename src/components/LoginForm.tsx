import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useAuth } from '../hooks/useAuth';

interface LoginFormProps {
  onSuccess?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await signIn(email, password);
      onSuccess?.();
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 space-y-4">
      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#EAEAEA]">
          Correo electrónico
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#EAEAEA]/50" />
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10 bg-[#0D0F2D]/50 border-[#1E90FF]/30 text-[#EAEAEA] placeholder:text-[#EAEAEA]/50 focus:border-[#1E90FF]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-[#EAEAEA]">
          Contraseña
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#EAEAEA]/50" />
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="pl-10 pr-10 bg-[#0D0F2D]/50 border-[#1E90FF]/30 text-[#EAEAEA] placeholder:text-[#EAEAEA]/50 focus:border-[#1E90FF]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#EAEAEA]/50 hover:text-[#EAEAEA] transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <a
          href="/forgot-password"
          className="text-sm text-[#1E90FF] hover:text-[#9B59B6] transition-colors"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] text-white font-semibold hover:from-[#1E90FF]/90 hover:to-[#9B59B6]/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
      >
        {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
      </Button>
    </form>
  );
};

export default LoginForm;
