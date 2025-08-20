import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Privacy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Azokia LLC
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>{language === 'es' ? 'Última actualización:' : 'Last updated:'}</strong> {language === 'es' ? 'Enero 2024' : 'January 2024'}
            </p>

            {language === 'es' ? (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información Recopilada</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Podemos recopilar:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Datos personales (nombre, correo, teléfono).</li>
                    <li>Información de transacciones y pagos.</li>
                    <li>Datos de navegación (cookies, dirección IP).</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Uso de la Información</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    La información se utiliza para:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Proporcionar y mejorar nuestros servicios.</li>
                    <li>Procesar transacciones.</li>
                    <li>Cumplir con obligaciones legales.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartir Datos</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    No vendemos datos personales. Podemos compartir información con:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Proveedores de servicios necesarios (ej: procesadores de pago).</li>
                    <li>Autoridades si es requerido por ley.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Seguridad</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Implementamos medidas técnicas y organizativas para proteger sus datos, aunque ninguna transmisión en línea es 100% segura.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Derechos del Usuario</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Según su jurisdicción, puede:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Acceder, corregir o eliminar sus datos.</li>
                    <li>Oponerse al procesamiento.</li>
                    <li>Retirar su consentimiento (donde aplique).</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies y Tecnologías Similares</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Usamos cookies para mejorar la experiencia del usuario. Puede gestionarlas desde su navegador.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Menores de Edad</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Nuestros servicios no están dirigidos a menores de 16 años según legislación aplicable.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cambios a esta Política</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Notificaremos cambios importantes via email o mediante avisos en nuestro sitio web.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para ejercer sus derechos o consultas sobre privacidad:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Correo:</strong> info@azokia.com</li>
                    <li><strong>Responsable de Protección de Datos:</strong> Edwin Estrella (edwinestrella@azokia.com)</li>
                    <li><strong>Dirección:</strong> Urbanización Villa Laura, Calle 1ra Número 16, Santo Domingo, República Dominicana</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Nota Importante</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Esta política se adapta a las operaciones reales de Azokia LLC y cumple con regulaciones globales incluyendo GDPR y CCPA según las jurisdicciones donde operamos.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information Collected</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may collect:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Personal data (name, email, phone).</li>
                    <li>Transaction and payment information.</li>
                    <li>Browsing data (cookies, IP address).</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The information is used to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Provide and improve our services.</li>
                    <li>Process transactions.</li>
                    <li>Comply with legal obligations.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell personal data. We may share information with:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Necessary service providers (e.g., payment processors).</li>
                    <li>Authorities if required by law.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement technical and organizational measures to protect your data, although no online transmission is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Depending on your jurisdiction, you may:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Access, correct or delete your data.</li>
                    <li>Object to processing.</li>
                    <li>Withdraw your consent (where applicable).</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Similar Technologies</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies to improve user experience. You can manage them from your browser.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Minors</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not directed to minors under 16 years of age according to applicable legislation.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to this Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We will notify important changes via email or through notices on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To exercise your rights or privacy inquiries:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Email:</strong> info@azokia.com</li>
                    <li><strong>Data Protection Officer:</strong> Edwin Estrella (edwinestrella@azokia.com)</li>
                    <li><strong>Address:</strong> Urbanización Villa Laura, Calle 1ra Número 16, Santo Domingo, República Dominicana</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Note</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This policy is adapted to the actual operations of Azokia LLC and complies with global regulations including GDPR and CCPA according to the jurisdictions where we operate.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
