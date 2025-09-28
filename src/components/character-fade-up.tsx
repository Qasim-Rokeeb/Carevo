'use client';

import {cn} from '@/lib/utils';
import {useInView} from 'react-intersection-observer';

interface CharacterFadeUpProps {
  text: string;
  className?: string;
  stagger?: number;
}

export const CharacterFadeUp = ({
  text,
  className,
  stagger = 0.02,
}: CharacterFadeUpProps) => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <span ref={ref} className={cn('inline-block', className)}>
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={cn(
            'inline-block transition-all duration-500',
            inView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          )}
          style={{
            transitionDelay: `${index * stagger}s`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
