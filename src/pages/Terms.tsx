import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Terms: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Azokia LLC
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>{language === 'es' ? 'Última actualización:' : 'Last updated:'}</strong> {language === 'es' ? 'Enero 2024' : 'January 2024'}
            </p>

            {language === 'es' ? (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Al acceder y utilizar los servicios de Azokia LLC ("la Empresa", "nosotros", "nuestro"), usted acepta cumplir con estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Servicios Ofrecidos</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Azokia LLC proporciona soluciones de marketing digital, automatización, consultoría tecnológica y servicios relacionados. Nos reservamos el derecho de modificar o discontinuar cualquier servicio sin previo aviso.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registro y Cuentas</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Para acceder a ciertos servicios, puede ser necesario crear una cuenta. Usted es responsable de mantener la confidencialidad de sus credenciales y de toda actividad bajo su cuenta.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pagos y Facturación</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Los precios, métodos de pago y políticas de reembolso se detallarán en contratos separados o en la plataforma de servicios. Los pagos atrasados pueden incurrir en cargos adicionales.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Todo el contenido, marcas y materiales proporcionados por Azokia LLC son propiedad exclusiva de la empresa. Queda prohibida su reproducción no autorizada.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitación de Responsabilidad</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Azokia LLC no será responsable por daños indirectos, incidentales o consecuentes derivados del uso de nuestros servicios.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Ley Aplicable y Jurisdicción</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Estos términos se regirán por las leyes del estado de Delaware, EE.UU. Cualquier disputa se resolverá en los tribunales competentes en dicha jurisdicción.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificaciones</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nos reservamos el derecho de actualizar estos términos en cualquier momento. Los cambios entrarán en vigor al publicarse en nuestro sitio web.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para preguntas sobre estos términos, contáctenos en:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Correo electrónico:</strong> edwinestrella@azokia.com / info@azokia.com</li>
                    <li><strong>Dirección:</strong> Urbanización Villa Laura, Calle 1ra Número 16, Santo Domingo, República Dominicana</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using the services of Azokia LLC ("the Company", "we", "our"), you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, you should not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Offered</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Azokia LLC provides digital marketing solutions, automation, technology consulting and related services. We reserve the right to modify or discontinue any service without prior notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registration and Accounts</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To access certain services, it may be necessary to create an account. You are responsible for maintaining the confidentiality of your credentials and all activity under your account.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payments and Billing</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Prices, payment methods and refund policies will be detailed in separate contracts or on the service platform. Late payments may incur additional charges.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed">
                    All content, trademarks and materials provided by Azokia LLC are the exclusive property of the company. Unauthorized reproduction is prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Azokia LLC will not be liable for indirect, incidental or consequential damages arising from the use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Applicable Law and Jurisdiction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These terms will be governed by the laws of the state of Delaware, USA. Any dispute will be resolved in the competent courts in said jurisdiction.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to update these terms at any time. Changes will take effect when published on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For questions about these terms, contact us at:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Email:</strong> edwinestrella@azokia.com / info@azokia.com</li>
                    <li><strong>Address:</strong> Urbanización Villa Laura, Calle 1ra Número 16, Santo Domingo, República Dominicana</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
