'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';

const WHATSAPP_LINK = 'https://wa.me/15551234567?text=Hi%20Carevo!';

const Logo = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M16 8.5h-3.5V5h-1v3.5H8v1h3.5V13h1V9.5H16v-1z"
        fill="hsl(var(--primary-foreground))"
      />
    </svg>
  );
  
  const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
      <svg 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          className="animate-float"
          {...props}
      >
          <defs>
              <linearGradient id="wa-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#25D366', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor: '#128C7E', stopOpacity:1}} />
              </linearGradient>
              <filter id="wa-shadow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                  <feOffset dx="1" dy="2" result="offsetblur"/>
                  <feComponentTransfer>
                      <feFuncA type="linear" slope="0.5"/>
                  </feComponentTransfer>
                  <feMerge> 
                      <feMergeNode/>
                      <feMergeNode in="SourceGraphic"/> 
                  </feMerge>
              </filter>
          </defs>
          <g filter="url(#wa-shadow)">
              <path 
                  fill="url(#wa-grad)" 
                  d="M19.6,4.4c-1.8-1.8-4.2-2.8-6.8-2.8c-5.3,0-9.6,4.3-9.6,9.6c0,1.7,0.4,3.3,1.3,4.8L3,21l5.4-1.4 c1.4,0.8,3,1.2,4.6,1.2h0c5.3,0,9.6-4.3,9.6-9.6C22.4,8.6,21.4,6.2,19.6,4.4z"
              />
              <path 
                  fill="#FFF" 
                  d="M16.9,14.5c-0.2-0.1-1.3-0.6-1.5-0.7c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.5,0.7-0.7,0.8 c-0.1,0.1-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5c0.1-0.1,0.2-0.3,0.4-0.4 c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.5-1.3-0.7-1.8c-0.2-0.5-0.4-0.4-0.5-0.4h-0.3 c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.7,0.7-0.7,1.6c0,1,0.7,1.9,0.8,2c0.1,0.1,1.4,2.1,3.3,2.9c0.5,0.2,0.8,0.3,1.1,0.4 c0.5,0.1,0.9,0.1,1.2,0.1c0.4-0.1,1.3-0.5,1.4-1c0.2-0.5,0.2-0.9,0.1-1C17.3,14.7,17.1,14.6,16.9,14.5z"
              />
          </g>
      </svg>
    );

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false); // Scrolling down
        } else {
            setIsVisible(true); // Scrolling up or at top
        }
        setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={cn(
            'sticky top-0 z-50 w-full bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300',
            !isVisible && '-translate-y-full'
        )}>
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-24">
                <Link href="/" className="flex items-center gap-2">
                    <Logo className="h-8 w-8" />
                    <span className="text-2xl font-bold text-primary">Carevo</span>
                </Link>
                <div className='flex items-center gap-2'>
                    <Button asChild>
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Start a conversation with Carevo on WhatsApp"
                    >
                        <WhatsAppIcon className="h-5 w-5" />
                        Start on WhatsApp
                    </a>
                    </Button>
                    <LanguageSwitcher />
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};
