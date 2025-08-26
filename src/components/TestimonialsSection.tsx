import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Este ERP revolucionó nuestras operaciones, optimizando finanzas e inventario. La plataforma en la nube nos mantiene productivos, incluso de forma remota.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Gerente de Operaciones",
  },
  {
    text: "La implementación de este ERP fue sencilla y rápida. La interfaz personalizable y fácil de usar hizo que la capacitación del equipo fuera sin esfuerzo.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Gerente de TI",
  },
  {
    text: "El equipo de soporte es excepcional, nos guió a través de la configuración y brindó asistencia continua, asegurando nuestra satisfacción.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Líder de Soporte al Cliente",
  },
  {
    text: "La integración perfecta de este ERP mejoró nuestras operaciones comerciales y eficiencia. Lo recomiendo encarecidamente por su interfaz intuitiva.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Sus sólidas características y rápido soporte han transformado nuestro flujo de trabajo, haciéndonos significativamente más eficientes.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Gerente de Proyectos",
  },
  {
    text: "La implementación fluida superó las expectativas. Optimizó los procesos, mejorando el rendimiento general del negocio.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Analista de Negocios",
  },
  {
    text: "Nuestras funciones comerciales mejoraron con un diseño fácil de usar y comentarios positivos de los clientes.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Director de Marketing",
  },
  {
    text: "Entregaron una solución que superó las expectativas, comprendiendo nuestras necesidades y mejorando nuestras operaciones.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Gerente de Ventas",
  },
  {
    text: "Con este ERP, nuestra presencia en línea y las conversiones mejoraron significativamente, impulsando el rendimiento comercial.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Gerente de E-commerce",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const TestimonialsSection = () => {
  return (
    <section className="bg-[#0D0F2D] my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonios</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-center mt-5 opacity-75">
            Descubre lo que nuestros clientes tienen que decir sobre nosotros.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;