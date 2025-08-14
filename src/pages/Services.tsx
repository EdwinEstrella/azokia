import React from 'react';
import { Target, Globe, Zap, BarChart3, Palette, Users, CheckCircle, Rocket, Shield, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Target,
      title: t('digitalMarketing'),
      description: t('digitalMarketingDesc'),
      features: [
        t('facebookAds'),
        t('googleAds'),
        t('socialMediaManagement'),
        t('contentStrategy'),
        t('communityManagement'),
        t('paidCampaigns'),
      ],
    },
    {
      icon: Globe,
      title: t('webDevelopment'),
      description: t('webDevelopmentDesc'),
      features: [
        t('corporateWebsites'),
        t('landingPages'),
        t('ecommerce'),
        t('blogs'),
        t('paymentGateways'),
        t('adminPanel'),
      ],
    },
    {
      icon: Zap,
      title: t('automation'),
      description: t('automationDesc'),
      features: [
        t('whatsappBot'),
        t('telegramBot'),
        t('crmAutomation'),
        t('leadFollowUp'),
        t('salesNotifications'),
        t('customDashboards'),
      ],
    },
    {
      icon: BarChart3,
      title: t('seoContent'),
      description: t('seoContentDesc'),
      features: [
        t('onPageSEO'),
        t('offPageSEO'),
        t('organicPositioning'),
        t('videoProduction'),
        t('photoSessions'),
        t('animations'),
      ],
    },
    {
      icon: Users,
      title: t('consulting'),
      description: t('consultingDesc'),
      features: [
        t('digitalAudit'),
        t('funnelAnalysis'),
        t('metricsAnalysis'),
        t('corporateEmail'),
        t('hostingConfiguration'),
        t('technicalSupport'),
      ],
    },
    {
      icon: Palette,
      title: t('graphicDesign'),
      description: t('graphicDesignDesc'),
      features: [
        t('logoDesign'),
        t('branding'),
        t('flyers'),
        t('socialMediaPieces'),
        t('visualIdentity'),
      ],
    },
  ];

  const automationServices = [
    {
      title: t('customerServiceAutomation'),
      features: [
        t('intelligentAutoResponse'),
        t('conversationAssignment'),
        t('hybridChatbot'),
        t('satisfactionSurveys'),
        t('afterHoursResponse'),
      ],
    },
    {
      title: t('salesAutomation'),
      features: [
        t('leadRegistration'),
        t('salesTeamNotification'),
        t('crmOpportunity'),
        t('followUpReminders'),
      ],
    },
    {
      title: t('technicalSupportAutomation'),
      features: [
        t('calendarIntegration'),
        t('ticketGeneration'),
        t('automaticGuides'),
        t('agentReassignment'),
      ],
    },
    {
      title: t('reportsControlAutomation'),
      features: [
        t('dailyWeeklyReports'),
        t('saturationAlerts'),
        t('customerSummaries'),
      ],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: t('analysis'),
      description: t('analysisDesc'),
      icon: Target,
    },
    {
      step: '02',
      title: t('strategy'),
      description: t('strategyDesc'),
      icon: Shield,
    },
    {
      step: '03',
      title: t('implementation'),
      description: t('implementationDesc'),
      icon: Rocket,
    },
    {
      step: '04',
      title: t('optimization'),
      description: t('optimizationDesc'),
      icon: Award,
    },
  ];

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
            {t('servicesTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>
      </section>

      {/* Main Services Grid con diseño 3D */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Automation Services con efectos 3D */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Automatizaciones Avanzadas con n8n
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones de automatización personalizadas para optimizar tus procesos de negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationServices.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {service.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section con diseño 3D */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('ourProcess')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('processSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div
                key={process.step}
                className="group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300 transform group-hover:scale-110">
                    <process.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section con efectos 3D */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('readyToPower')}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('freeConsultation')}
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center px-10 py-5 bg-white text-blue-600 font-semibold rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
          >
            <Rocket className="mr-3 h-6 w-6" />
            <span>{t('requestConsultation')}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;