'use client';

import {useRef, useEffect} from 'react';
import {WhatsAppIcon} from '@/components/ui/whatsapp-icon';
import {cn} from '@/lib/utils';
import {useIsMobile} from '@/hooks/use-mobile';
import {useConfetti} from '@/components/confetti';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const WHATSAPP_LINK = 'https://wa.me/15551234567?text=Hi%20Carevo!';

export const WhatsAppFloatButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const isMobile = useIsMobile();
  const {fire} = useConfetti();

  useEffect(() => {
    if (isMobile || !buttonRef.current) return;

    const button = buttonRef.current;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const {clientX, clientY} = e;
      const {left, top, width, height} = button.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const moveButton = () => {
        const radius = 60;
        if (distance < radius) {
          const newX = (deltaX / distance) * (distance - radius);
          const newY = (deltaY / distance) * (distance - radius);
          button.style.transform = `translate(${newX * 0.4}px, ${
            newY * 0.4
          }px) scale(1.1)`;
        } else {
          button.style.transform = 'translate(0, 0) scale(1)';
        }
        animationFrameId = requestAnimationFrame(moveButton);
      };

      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(moveButton);
    };

    const handleMouseLeave = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (button) {
        button.style.transform = 'translate(0, 0) scale(1)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    fire();
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer');
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            ref={buttonRef}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={cn(
              'fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-transform duration-200 ease-out',
              'animate-pop-in'
            )}
            aria-label="Start a conversation with Carevo on WhatsApp"
            style={{
              willChange: 'transform',
            }}
          >
            <WhatsAppIcon className="h-10 w-10" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="mr-2">
          <p>Chat on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
