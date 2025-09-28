'use client';

import {useKonamiCode} from '@/hooks/use-konami-code';
import {useConfetti} from './confetti';
import {useEffect} from 'react';

export const KonamiCodeEasterEgg = () => {
  const isKonami = useKonamiCode();
  const {fire} = useConfetti();

  useEffect(() => {
    if (isKonami) {
      fire();
    }
  }, [isKonami, fire]);

  if (!isKonami) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      <div
        className="text-8xl animate-fade-up"
        style={{
          animationDuration: '1s',
          animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
      >
        🎉
      </div>
    </div>
  );
};
