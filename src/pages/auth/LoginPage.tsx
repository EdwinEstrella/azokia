import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    return /^[^s@]+@[^s@]+.[^s@]+$/.test(email);
  };
 
  const handleSignIn = async () => {
    if (!email || !password) {
      setError("Por favor, ingresa tu correo y contraseña.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Por favor, ingresa una dirección de correo válida.");
      return;
    }
    setError("");
    setLoading(true);
    
    try {
      await signIn(email, password);
      navigate('/dashboard');
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0D0F2D] rounded-xl z-1">
      <div className="w-full max-w-sm bg-gradient-to-b from-[#0D0F2D] to-[#1A1C3A] rounded-3xl shadow-xl shadow-opacity-10 p-8 flex flex-col items-center border border-[#1E90FF]/20 text-[#EAEAEA]">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] mb-6 shadow-lg shadow-opacity-5">
          <img src="/logo.png" alt="Azokia Logo" className="h-10 w-auto" />
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-center text-[#EAEAEA]">
          Iniciar sesión con correo
        </h2>
        <p className="text-[#EAEAEA]/70 text-sm mb-6 text-center">
          Accede a tu panel de control para gestionar tu negocio.
        </p>
        <div className="w-full flex flex-col gap-3 mb-2">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#EAEAEA]/70">
              <Mail className="w-4 h-4" />
            </span>
            <input
              placeholder="Correo electrónico"
              type="email"
              value={email}
              className="w-full pl-10 pr-3 py-2 rounded-xl border border-[#1E90FF]/20 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] bg-[#1A1C3A] text-[#EAEAEA] text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#EAEAEA]/70">
              <Lock className="w-4 h-4" />
            </span>
            <input
              placeholder="Contraseña"
              type="password"
              value={password}
              className="w-full pl-10 pr-10 py-2 rounded-xl border border-[#1E90FF]/20 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] bg-[#1A1C3A] text-[#EAEAEA] text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#EAEAEA]/70 cursor-pointer text-xs select-none"></span>
          </div>
          <div className="w-full flex justify-end">
          {error && (
            <div className="text-sm text-[#ef4444] text-left">{error}</div>
          )}
            <button className="text-xs  hover:underline font-medium text-[#EAEAEA]/70">
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </div>
        <button
          onClick={handleSignIn}
          className="w-full bg-gradient-to-b from-[#1E90FF] to-[#9B59B6] text-white font-medium py-2 rounded-xl shadow hover:from-[#1E90FF]/90 hover:to-[#9B59B6]/90 cursor-pointer transition mb-4 mt-2"
          disabled={loading}
        >
          {loading ? 'Iniciando sesión...' : 'Acceder'}
        </button>
      </div>
    </div>
  );
};
 
export default LoginPage;