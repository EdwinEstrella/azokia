import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-slate-900">
      {/* Hero Section con efectos 3D */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>
      </section>

      {/* About Content con diseño 3D */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('transformIdeas')}
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {t('aboutDescription')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('aboutLongDesc')}
              </p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team working"
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision con efectos 3D */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  {/* <Target className="h-8 w-8 text-white" /> */}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('ourMission')}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('missionText')}
                </p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  {/* <Heart className="h-8 w-8 text-white" /> */}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('ourVision')}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('visionText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values con diseño 3D */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('ourValues')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y relaciones con los clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Values are now empty */}
          </div>
        </div>
      </section>

      {/* Team con efectos 3D */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('ourTeam')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('teamSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team is now empty */}
          </div>
        </div>
      </section>

      {/* Stats con diseño 3D */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Stats are now empty */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
