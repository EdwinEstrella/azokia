import { Footerdemo } from './ui/footer-section';
import { Button } from './ui/button'; // Asegúrate de importar el botón

const Footer: React.FC = () => {
  return (
    <Footerdemo>
      {/* Aquí se mueve el botón */}
      <div className="flex items-center gap-1 bg-slate-900/80 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        <Button className="border-0.8 border-white/10 bg-slate-900/80 text-gray-200">
          ESEN
        </Button>
      </div>
    </Footerdemo>
  );
};

export default Footer;
