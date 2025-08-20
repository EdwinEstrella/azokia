import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  typing?: boolean;
}

const ChatBubble: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mensajes predefinidos según el idioma
  const predefinedResponses = {
    es: {
      welcome: '¡Hola! 👋 Soy el asistente virtual de Azokia. ¿En qué puedo ayudarte hoy?',
      services: 'Ofrecemos servicios de marketing digital, desarrollo web, automatización con n8n, SEO, consultoría digital y diseño gráfico. ¿Te interesa algún servicio en particular?',
      pricing: 'Nuestros precios varían según el proyecto. Te ofrecemos una consulta gratuita para evaluar tus necesidades. ¿Te gustaría agendar una?',
      contact: 'Puedes contactarnos en info@azokia.com o llamarnos al +1 (555) 123-4567. También puedes llenar nuestro formulario de contacto.',
      automation: 'Nos especializamos en automatizaciones con n8n para ventas, atención al cliente, reportes y flujos de trabajo. ¿Qué proceso te gustaría automatizar?',
      default: 'Gracias por tu mensaje. Un especialista se pondrá en contacto contigo pronto. ¿Hay algo más en lo que pueda ayudarte?'
    },
    en: {
      welcome: 'Hello! 👋 I\'m Azokia\'s virtual assistant. How can I help you today?',
      services: 'We offer digital marketing, web development, n8n automation, SEO, digital consulting and graphic design services. Are you interested in any particular service?',
      pricing: 'Our prices vary depending on the project. We offer a free consultation to evaluate your needs. Would you like to schedule one?',
      contact: 'You can contact us at info@azokia.com or call us at +1 (555) 123-4567. You can also fill out our contact form.',
      automation: 'We specialize in n8n automations for sales, customer service, reports and workflows. What process would you like to automate?',
      default: 'Thank you for your message. A specialist will contact you soon. Is there anything else I can help you with?'
    }
  };

  // Scroll automático al final de los mensajes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mensaje de bienvenida al abrir el chat
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: predefinedResponses[language].welcome,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language]);

  // Simular respuesta del bot
  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    const responses = predefinedResponses[language];

    if (message.includes('servicio') || message.includes('service') || message.includes('qué hacen') || message.includes('what do you do')) {
      return responses.services;
    }
    if (message.includes('precio') || message.includes('cost') || message.includes('cuánto') || message.includes('how much')) {
      return responses.pricing;
    }
    if (message.includes('contacto') || message.includes('contact') || message.includes('teléfono') || message.includes('phone')) {
      return responses.contact;
    }
    if (message.includes('automatización') || message.includes('automation') || message.includes('n8n') || message.includes('automatizar')) {
      return responses.automation;
    }
    return responses.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simular delay de respuesta
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group"
        >
          <MessageCircle className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
          
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
        }`}>
          <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden h-full flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src="/catalogo copy.png" 
                    alt="Azokia" 
                    className="w-8 h-8 object-contain"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Azokia Assistant</h3>
                  <p className="text-blue-100 text-xs">
                    {language === 'es' ? 'En línea' : 'Online'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
                >
                  {isMinimized ? (
                    <Maximize2 className="h-4 w-4 text-white" />
                  ) : (
                    <Minimize2 className="h-4 w-4 text-white" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-800/50">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                            : 'bg-gradient-to-r from-green-500 to-blue-500'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </div>
                        
                        {/* Message bubble */}
                        <div className={`rounded-2xl px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : 'bg-white/10 text-gray-200 border border-white/20'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2 max-w-[80%]">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-white/10 border border-white/20 rounded-2xl px-4 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-white/10 bg-slate-900/50">
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={language === 'es' ? 'Escribe tu mensaje...' : 'Type your message...'}
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-400 text-sm"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {/* Quick actions */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    <button
                      onClick={() => setInputValue(language === 'es' ? '¿Qué servicios ofrecen?' : 'What services do you offer?')}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {language === 'es' ? 'Servicios' : 'Services'}
                    </button>
                    <button
                      onClick={() => setInputValue(language === 'es' ? '¿Cuáles son sus precios?' : 'What are your prices?')}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {language === 'es' ? 'Precios' : 'Pricing'}
                    </button>
                    <button
                      onClick={() => setInputValue(language === 'es' ? 'Quiero información sobre automatización' : 'I want information about automation')}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {language === 'es' ? 'Automatización' : 'Automation'}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;
