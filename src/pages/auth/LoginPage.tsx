import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { useAuth } from '../../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0F2D] flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-gradient-to-br from-slate-800 to-slate-900 border-[#1E90FF]/20">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#1E90FF] to-[#9E7FFF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
          </div>
          <CardTitle className="text-[#EAEAEA]">Acceso al Dashboard</CardTitle>
          <p className="text-[#EAEAEA]/70 text-sm">
            Ingresa con tus credenciales de Azokia
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-[#EAEAEA]">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-800 border-[#1E90FF]/20 text-[#EAEAEA]"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-[#EAEAEA]">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-slate-800 border-[#1E90FF]/20 text-[#EAEAEA]"
                placeholder="••••••••"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] hover:from-[#1E90FF]/90 hover:to-[#9B59B6]/90"
              disabled={loading}
            >
              {loading ? 'Iniciando sesión...' : 'Acceder al Dashboard'}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-[#1E90FF]/10 rounded-lg">
            <p className="text-[#EAEAEA]/70 text-sm text-center">
              💡 Este acceso es solo para el equipo interno de Azokia
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
