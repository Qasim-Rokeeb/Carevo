'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';

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
                        <WhatsAppIcon className="h-5 w-5 !animate-float" />
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