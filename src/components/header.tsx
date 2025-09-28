'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import type {SVGProps} from 'react';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {ModeToggle} from '@/components/mode-toggle';
import {LanguageSwitcher} from '@/components/language-switcher';
import {WhatsAppIcon} from '@/components/ui/whatsapp-icon';
import {ReducedDataToggle} from './reduced-data-toggle';
import {useConfetti} from '@/components/confetti';
import {Menu, X} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import {AnimatedHamburgerIcon} from './animated-hamburger-icon';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {fire} = useConfetti();

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

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300',
        !isVisible && '-translate-y-full'
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-24">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="text-2xl font-bold text-primary">Carevo</span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            onClick={() => {
              fire();
            }}
          >
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
          <ReducedDataToggle />
          <ModeToggle />
        </nav>
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Open mobile menu"
              >
                <AnimatedHamburgerIcon isOpen={isMenuOpen} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" id="mobile-menu">
              <SheetHeader>
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Logo className="h-8 w-8" />
                  <span className="text-2xl font-bold text-primary">
                    Carevo
                  </span>
                </Link>
              </SheetHeader>
              <div className="mt-8 flex flex-col items-center gap-4">
                <Button
                  asChild
                  onClick={() => {
                    fire();
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Start on WhatsApp
                  </a>
                </Button>
                <div className="flex w-full justify-around pt-4">
                  <LanguageSwitcher />
                  <ReducedDataToggle />
                  <ModeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
