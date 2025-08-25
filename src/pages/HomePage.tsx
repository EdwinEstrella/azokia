import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0F2D] to-[#1A1C3A] text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bienvenido a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] to-[#9E7FFF]">
              Azokia
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Tu plataforma integral para gestionar proyectos, finanzas y equipos de manera eficiente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1E90FF] to-[#9E7FFF] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Iniciar Sesión
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-4 border-2 border-[#1E90FF] text-[#1E90FF] font-semibold rounded-xl hover:bg-[#1E90FF] hover:text-white transition-all duration-300"
            >
              <ArrowRight className="mr-3 h-6 w-6" />
              Ir al Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
