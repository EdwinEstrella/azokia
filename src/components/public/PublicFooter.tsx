import React from 'react';
import { Link } from 'react-router-dom';

const PublicFooter: React.FC = () => {
  return (
    <footer className="bg-[#0A0C23] border-t border-[#1E90FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#1E90FF] to-[#9E7FFF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-[#EAEAEA]">Azokia</span>
            </div>
            <p className="text-[#EAEAEA]/70 mb-4">
              Agencia de desarrollo web especializada en crear soluciones digitales que impulsan tu negocio.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/servicios" className="text-[#EAEAEA]/70 hover:text-[#1E90FF]">Desarrollo Web</Link></li>
              <li><Link to="/servicios" className="text-[#EAEAEA]/70 hover:text-[#1E90FF]">E-commerce</Link></li>
              <li><Link to="/servicios" className="text-[#EAEAEA]/70 hover:text-[#1E90FF]">Diseño UI/UX</Link></li>
              <li><Link to="/servicios" className="text-[#EAEAEA]/70 hover:text-[#1E90FF]">Marketing Digital</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-[#EAEAEA]/70">info@azokia.com</li>
              <li className="text-[#EAEAEA]/70">+34 912 345 678</li>
              <li className="text-[#EAEAEA]/70">Madrid, España</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1E90FF]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#EAEAEA]/70 text-sm">
            © 2024 Azokia. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacidad" className="text-[#EAEAEA]/70 hover:text-[#1E90FF] text-sm">Privacidad</Link>
            <Link to="/terminos" className="text-[#EAEAEA]/70 hover:text-[#1E90FF] text-sm">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
