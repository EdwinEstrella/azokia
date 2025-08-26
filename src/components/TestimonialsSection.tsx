import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [];

const testimonials: any[] = [];

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
          {/* TestimonialsColumn components will now receive empty arrays */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

