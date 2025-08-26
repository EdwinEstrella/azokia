import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Trabajar con Azokia transformó completamente nuestro negocio. Su automatización nos ahorró 40 horas semanales y aumentó nuestras ventas un 300%.",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "María González",
    role: "CEO, TechStart Solutions",
  },
  {
    text: "La implementación fue increíblemente fluida. El equipo de Azokia entendió perfectamente nuestras necesidades y entregó resultados excepcionales.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Carlos Rodríguez",
    role: "Director de Marketing",
  },
  {
    text: "El soporte técnico es excepcional. Nos guiaron en cada paso y siguen brindando asistencia continua. Altamente recomendados.",
    image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Ana Martínez",
    role: "Gerente de Operaciones",
  },
  {
    text: "Azokia revolucionó nuestras operaciones digitales. La integración fue perfecta y los resultados superaron todas nuestras expectativas.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "David López",
    role: "CTO",
  },
  {
    text: "Sus características robustas y soporte rápido transformaron nuestro flujo de trabajo, haciéndonos significativamente más eficientes.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Laura Fernández",
    role: "Project Manager",
  },
  {
    text: "La implementación superó nuestras expectativas. Optimizó procesos y mejoró significativamente el rendimiento general del negocio.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Roberto Silva",
    role: "Business Analyst",
  },
  {
    text: "Nuestras funciones comerciales mejoraron con un diseño fácil de usar y comentarios positivos de los clientes.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Patricia Morales",
    role: "Marketing Director",
  },
  {
    text: "Entregaron una solución que superó las expectativas, entendiendo nuestras necesidades y mejorando nuestras operaciones.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Miguel Herrera",
    role: "Sales Manager",
  },
  {
    text: "Usando sus soluciones, nuestra presencia online y conversiones mejoraron significativamente, impulsando el rendimiento del negocio.",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Carmen Ruiz",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0D0F2D] to-[#1a1f4a] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#1E90FF]/20 to-[#9B59B6]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-[#9B59B6]/20 to-[#2ECC71]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="px-4 py-2 bg-gradient-to-r from-[#1E90FF] to-[#9B59B6] rounded-full text-white text-sm font-medium">
              Testimonios
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] text-center mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-center text-[#EAEAEA]/70 text-lg">
            Descubre por qué las empresas confían en Azokia para su transformación digital.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
