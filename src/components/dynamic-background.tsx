'use client';

import {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';
import {cn} from '@/lib/utils';

// Define HSL colors for different times of day
const getGradientColors = (hour: number, theme: string | undefined) => {
  if (theme === 'dark') {
    // Dark mode gradients
    if (hour >= 5 && hour < 8) {
      // Sunrise
      return {
        start: 'hsl(222, 40%, 15%)',
        end: 'hsl(260, 40%, 10%)',
      };
    }
    if (hour >= 18 && hour < 21) {
      // Sunset
      return {
        start: 'hsl(250, 40%, 15%)',
        end: 'hsl(222, 50%, 12%)',
      };
    }
    // Night and Day in dark mode
    return {
      start: 'hsl(var(--background))',
      end: 'hsl(var(--background))',
    };
  }

  // Light mode gradients
  if (hour >= 5 && hour < 8) {
    // Sunrise
    return {start: 'hsl(30, 100%, 95%)', end: 'hsl(0, 100%, 97%)'};
  }
  if (hour >= 18 && hour < 21) {
    // Sunset
    return {start: 'hsl(210, 80%, 95%)', end: 'hsl(280, 100%, 97%)'};
  }
  // Daytime
  return {
    start: 'hsl(var(--background))',
    end: 'hsl(var(--background))',
  };
};

export const DynamicBackground = () => {
  const [gradient, setGradient] = useState({
    start: 'hsl(var(--background))',
    end: 'hsl(var(--background))',
  });
  const [isClient, setIsClient] = useState(false);
  const {theme} = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const updateGradient = () => {
      const currentHour = new Date().getHours();
      const colors = getGradientColors(currentHour, theme);
      setGradient(colors);
    };

    updateGradient();
    // Update every 10 minutes
    const intervalId = setInterval(updateGradient, 10 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [isClient, theme]);

  return (
    <div
      className="fixed inset-0 -z-20 w-full h-full transition-colors duration-[2000ms]"
      style={{
        background: `linear-gradient(180deg, ${gradient.start} 0%, ${gradient.end} 100%)`,
      }}
    />
  );
};
