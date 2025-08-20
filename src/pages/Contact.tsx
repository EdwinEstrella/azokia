import React from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@azokia.com',
      description: t('emailUs'),
    },
    {
      icon: Phone,
      title: t('phone'),
      details: '+1 (555) 123-4567',
      description: t('callUs'),
    },
    {
      icon: MapPin,
      title: 'Oficina Principal',
      details: 'Santo Domingo, RD',
      description: t('visitUs'),
    },
    {
      icon: Clock,
      title: t('schedule'),
      details: t('mondayFriday'),
      description: t('businessHours'),
    },
  ];

  const faqs = [
    {
      question: t('faq1Q'),
      answer: t('faq1A'),
    },
    {
      question: t('faq2Q'),
      answer: t('faq2A'),
    },
    {
      question: t('faq3Q'),
      answer: t('faq3A'),
    },
    {
      question: t('faq4Q'),
      answer: t('faq4A'),
    },
    {
      question: t('faq5Q'),
      answer: t('faq5A'),
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>
      </section>

      {/* Contact Info con diseño 3D */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center animate-slide-up transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section con efectos 3D */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('sendMessage')}
            </h2>
            <p className="text-xl text-gray-300">
              {t('contactFormDesc')}
            </p>
          </div>

          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section con diseño 3D */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('faqTitle')}
            </h2>
            <p className="text-xl text-gray-300">
              {t('faqSubtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button
                  onClick={() => toggleFaq(index)}
                  className="relative w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 rounded-2xl transition-colors"
                >
                  <span className="font-semibold text-white">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="relative px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section con efectos 3D */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('ourLocation')}
            </h2>
            <p className="text-xl text-gray-300">
              {t('locationDesc')}
            </p>
          </div>

          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl h-96 flex items-center justify-center border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
            <div className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Oficina Principal
              </h3>
              <p className="text-gray-300">
                Urbanización Villa Laura<br />
                Calle 1ra Número 16<br />
                Santo Domingo, República Dominicana
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
