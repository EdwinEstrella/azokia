import React, { useState } from 'react';
import { Send, Sparkles, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ContactFormProps {
  compact?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ compact = false }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formId = compact ? 'contactoExpress' : 'contacto_lento';
    
    const webhookData = {
      id: formId,
      timestamp: new Date().toISOString(),
      ...formData
    };
    
    fetch('https://n8n.ibpweb.site/webhook/azokiallc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    })
    .then(response => {
      if (response.ok) {
        alert('¡Mensaje enviado! Te contactaremos pronto.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessType: '',
          budget: '',
          message: '',
        });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const businessTypes = [
    { value: '', label: `-- ${t('businessType')} --` },
    { value: 'ecommerce', label: t('businessTypes.ecommerce') },
    { value: 'saas', label: t('businessTypes.saas') },
    { value: 'local', label: t('businessTypes.local') },
    { value: 'startup', label: t('businessTypes.startup') },
    { value: 'enterprise', label: t('businessTypes.enterprise') },
    { value: 'other', label: t('businessTypes.other') },
  ];

  const budgetRanges = [
    { value: '', label: `-- ${t('budget')} --` },
    { value: 'small', label: t('budgetRanges.small') },
    { value: 'medium', label: t('budgetRanges.medium') },
    { value: 'large', label: t('budgetRanges.large') },
    { value: 'enterprise', label: t('budgetRanges.enterprise') },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className={compact ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#EAEAEA]/80 mb-2">
            {compact ? 'Nombre' : t('name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-colors text-[#EAEAEA] placeholder-gray-400 backdrop-blur-sm"
            placeholder={compact ? 'Tu nombre completo' : t('name')}
          />
        </div>

        {/* WhatsApp (para versión compact) */}
        {compact && (
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#EAEAEA]/80 mb-2">
              WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-colors text-[#EAEAEA] placeholder-gray-400 backdrop-blur-sm"
              placeholder="+1 234 567 8900"
            />
          </div>
        )}

        {/* Email */}
        <div className={compact ? 'md:col-span-1' : ''}>
          <label htmlFor="email" className="block text-sm font-medium text-[#EAEAEA]/80 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-colors text-[#EAEAEA] placeholder-gray-400 backdrop-blur-sm"
            placeholder={compact ? 'tu@email.com' : t('email')}
          />
        </div>

        {/* Phone (para versión no compact) */}
        {!compact && (
          <div className="md:col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium text-[#EAEAEA]/80 mb-2">
              {t('phone')} *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-colors text-[#EAEAEA] placeholder-gray-400 backdrop-blur-sm"
              placeholder={t('phone')}
            />
          </div>
        )}

        {!compact && (
          <>
            {/* Business Type */}
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-[#EAEAEA]/80 mb-2">
                {t('businessType')}
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-colors text-[#EAEAEA] backdrop-blur-sm"
              >
                {businessTypes.map((type) => (
                  <option key={type.value} value={type.value} className="bg-[#0D0F2D] text-[#EAEAEA]">
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-[#EAEAEA]/80 mb-2">
                {t('budget')}
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-colors text-[#EAEAEA] backdrop-blur-sm"
              >
                {budgetRanges.map((range) => (
                  <option key={range.value} value={range.value} className="bg-[#0D0F2D] text-[#EAEAEA]">
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {/* Message */}
        <div className={compact ? 'md:col-span-2' : 'md:col-span-2'}>
          <label htmlFor="message" className="block text-sm font-medium text-[#EAEAEA]/80 mb-2">
            {compact ? 'Mensaje' : t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 3 : 4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#1E90FF] focus:border-transparent transition-colors resize-none text-[#EAEAEA] placeholder-gray-400 backdrop-blur-sm"
            placeholder={compact ? 'Cuéntanos tu idea y la construimos juntos...' : t('message')}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group w-full bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] text-white py-4 px-6 rounded-lg font-medium hover:from-[#1E90FF]/90 hover:to-[#9B59B6]/90 transition-all duration-200 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-[#1E90FF]/25 transform hover:scale-105"
      >
        {compact ? (
          <>
            <MessageSquare className="h-5 w-5" />
            <span>¡Envíame tu idea y lo construimos juntos!</span>
            <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </>
        ) : (
          <>
            <Sparkles className="h-5 w-5" />
            <span>{t('sendMessage')}</span>
            <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
