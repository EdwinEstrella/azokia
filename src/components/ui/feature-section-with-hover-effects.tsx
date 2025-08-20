import { cn } from "@/lib/utils";
import {
  Bot,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Award,
  Heart,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Automatizamos procesos clave",
      description:
        "Implementamos automatizaciones inteligentes que optimizan tu flujo de trabajo y aumentan la eficiencia operativa.",
      icon: <Bot className="h-6 w-6" />,
    },
    {
      title: "Diseños web optimizados para ventas",
      description:
        "Creamos páginas web y landing pages que convierten visitantes en clientes reales.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Estrategias digitales que escalan",
      description:
        "Desarrollamos campañas de marketing digital que crecen junto con tu negocio.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Acompañamiento real con expertos",
      description:
        "Nuestro equipo te guía en cada paso de tu transformación digital.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Tecnología de vanguardia",
      description: "Utilizamos las últimas herramientas y tecnologías para impulsar tu éxito.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Seguridad garantizada",
      description:
        "Implementamos las mejores prácticas de seguridad para proteger tu información.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Resultados medibles",
      description:
        "Cada estrategia está respaldada por métricas claras y resultados tangibles.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Soporte continuo",
      description: "Te acompañamos más allá del lanzamiento con soporte técnico especializado.",
      icon: <Heart className="h-6 w-6" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-6 md:py-10 relative group/feature border-white/10",
        (index === 0 || index === 4) && "lg:border-l border-white/10",
        index < 4 && "lg:border-b border-white/10"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#1E90FF]/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#1E90FF]/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-4 md:px-10 text-[#1E90FF]">
        {icon}
      </div>
      <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-4 md:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-[#1E90FF] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#EAEAEA]">
          {title}
        </span>
      </div>
      <p className="text-sm text-[#EAEAEA]/70 max-w-xs relative z-10 px-4 md:px-10">
        {description}
      </p>
    </div>
  );
};
