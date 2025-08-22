import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Rocket } from 'lucide-react';
import LoginForm from '../components/LoginForm';
import { BackgroundGradient } from '../components/ui/background-gradient';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0F2D] relative overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-md w-full space-y-8 z-10">
        {/* Header */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center text-[#EAEAEA]/60 hover:text-[#EAEAEA] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          
          <div className="flex justify-center mb-6">
            <BackgroundGradient className="rounded-2xl p-4 bg-[#0D0F2D]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1E90FF] to-[#9B59B6] rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
            </BackgroundGradient>
          </div>
          
          <h1 className="text-3xl font-bold text-[#EAEAEA] mb-2">
            Bienvenido de vuelta
          </h1>
          <p className="text-[#EAEAEA]/70">
            Ingresa a tu cuenta para continuar
          </p>
        </div>

        {/* Login Form */}
        <BackgroundGradient className="rounded-2xl p-6 bg-[#0D0F2D]/80 backdrop-blur-sm border border-[#1E90FF]/30">
          <LoginForm />
        </BackgroundGradient>

        {/* Footer */}
        <div className="text-center">
          <p className="text-[#EAEAEA]/60 text-sm">
            ¿No tienes cuenta?{' '}
            <Link
              to="/register"
              className="text-[#1E90FF] hover:text-[#9B59B6] font-medium transition-colors"
            >
              Crear cuenta
            </Link>
          </p>
        </div>

        {/* Additional info */}
        <div className="text-center pt-8">
          <div className="inline-flex items-center px-4 py-2 bg-[#0D0F2D]/50 border border-[#1E90FF]/20 rounded-full text-sm text-[#EAEAEA]/60">
            <Rocket className="h-4 w-4 mr-2 text-[#1E90FF]" />
            Accede a todas las herramientas de IA
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
