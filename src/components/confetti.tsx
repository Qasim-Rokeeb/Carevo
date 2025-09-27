'use client';

import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';

interface ConfettiContextType {
  fire: () => void;
}

const ConfettiContext = createContext<ConfettiContextType | null>(null);

export const useConfetti = () => {
  const context = useContext(ConfettiContext);
  if (!context) {
    throw new Error('useConfetti must be used within a ConfettiProvider');
  }
  return context;
};

const ConfettiProvider = ({children}: {children: React.ReactNode}) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const confettiRef = useRef<(() => void) | null>(null);

  const fire = useCallback(() => {
    confettiRef.current?.();
  }, []);

  const contextValue = useMemo(() => ({fire}), [fire]);

  return (
    <ConfettiContext.Provider value={contextValue}>
      {children}
      {isClient && <ConfettiCanvas setFire={handler => (confettiRef.current = handler)} />}
    </ConfettiContext.Provider>
  );
};

// Helper functions
const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

// Confetti component
const ConfettiCanvas = ({
  setFire,
}: {
  setFire: (handler: () => void) => void;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);

  const createParticles = useCallback(() => {
    const particleCount = 150;
    const newParticles = [];
    const colors = ['#25D366', '#128C7E', '#075E54', '#34B7F1', '#DCF8C6'];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight - 10,
        size: randomInRange(2, 8),
        vx: randomInRange(-5, 5),
        vy: randomInRange(-10, -5),
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
        angle: 0,
        spin: randomInRange(-0.1, 0.1),
      });
    }
    particlesRef.current = newParticles;
  }, []);

  useEffect(() => {
    setFire(() => {
      createParticles();
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext('2d');
      if (!context) return;

      let animationFrameId: number;

      const render = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);

        particlesRef.current.forEach((p, index) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.1; // gravity
          p.opacity -= 0.005;
          p.angle += p.spin;

          context.save();
          context.translate(p.x, p.y);
          context.rotate(p.angle);
          context.globalAlpha = p.opacity;
          context.fillStyle = p.color;
          context.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          context.restore();

          if (p.opacity <= 0) {
            particlesRef.current.splice(index, 1);
          }
        });

        if (particlesRef.current.length > 0) {
          animationFrameId = requestAnimationFrame(render);
        } else {
          context.clearRect(0, 0, canvas.width, canvas.height);
        }
      };
      render();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    });
  }, [createParticles, setFire]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export {ConfettiProvider};
