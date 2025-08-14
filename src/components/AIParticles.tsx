import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: 'node' | 'connection' | 'data';
  color: string;
  pulsePhase: number;
}

interface Connection {
  from: Particle;
  to: Particle;
  opacity: number;
  animated: boolean;
}

const AIParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000); // Reducido para mejor rendimiento

      for (let i = 0; i < particleCount; i++) {
        const types: Particle['type'][] = ['node', 'connection', 'data'];
        const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Velocidad reducida
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5, // Tamaño reducido
          opacity: Math.random() * 0.4 + 0.1, // Opacidad reducida
          type: types[Math.floor(Math.random() * types.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      particlesRef.current = particles;
    };

    const createConnections = () => {
      const connections: Connection[] = [];
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120 && Math.random() < 0.05) { // Menos conexiones
            connections.push({
              from: particles[i],
              to: particles[j],
              opacity: Math.random() * 0.2 + 0.05, // Opacidad muy baja
              animated: Math.random() < 0.2,
            });
          }
        }
      }

      connectionsRef.current = connections;
    };

    const drawParticle = (particle: Particle, time: number) => {
      ctx.save();
      
      // Efecto de pulso más sutil
      const pulse = Math.sin(time * 0.001 + particle.pulsePhase) * 0.2 + 0.8;
      const currentSize = particle.size * pulse;
      const currentOpacity = particle.opacity * pulse * 0.6; // Opacidad muy reducida

      ctx.globalAlpha = currentOpacity;
      ctx.fillStyle = particle.color;

      switch (particle.type) {
        case 'node':
          // Nodo circular simple sin glow
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
          ctx.fill();
          break;

        case 'connection':
          // Punto de conexión cuadrado simple
          ctx.fillRect(
            particle.x - currentSize / 2,
            particle.y - currentSize / 2,
            currentSize,
            currentSize
          );
          break;

        case 'data':
          // Partícula de datos (triángulo) simple
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y - currentSize);
          ctx.lineTo(particle.x - currentSize, particle.y + currentSize);
          ctx.lineTo(particle.x + currentSize, particle.y + currentSize);
          ctx.closePath();
          ctx.fill();
          break;
      }

      ctx.restore();
    };

    const drawConnection = (connection: Connection) => {
      const { from, to, opacity } = connection;
      
      ctx.save();
      ctx.globalAlpha = opacity * 0.3; // Opacidad muy baja para las conexiones
      ctx.strokeStyle = from.color;
      ctx.lineWidth = 0.5; // Líneas muy finas
      
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();

      ctx.restore();
    };

    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        // Movimiento muy lento
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Interacción muy sutil con el mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 80) {
          const force = (80 - distance) / 80;
          particle.vx += (dx / distance) * force * 0.005; // Fuerza muy reducida
          particle.vy += (dy / distance) * force * 0.005;
        }

        // Limitar velocidad
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > 1) {
          particle.vx = (particle.vx / speed) * 1;
          particle.vy = (particle.vy / speed) * 1;
        }
      });
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      updateParticles();

      // Dibujar conexiones
      connectionsRef.current.forEach(connection => {
        drawConnection(connection);
      });

      // Dibujar partículas
      particlesRef.current.forEach(particle => {
        drawParticle(particle, time);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
      createConnections();
    };

    // Inicialización
    resizeCanvas();
    createParticles();
    createConnections();
    animate(0);

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default AIParticles;