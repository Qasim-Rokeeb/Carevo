'use client';

import {useState, useEffect} from 'react';

export const Spotlight = () => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({x: event.clientX, y: event.clientY});
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.05), transparent 80%)`,
      }}
    />
  );
};
