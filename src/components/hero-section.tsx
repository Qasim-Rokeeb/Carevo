import {Button} from '@/components/ui/button';
import type {SVGProps} from 'react';
import {ScrollDownArrow} from './scroll-down-arrow';
import {WhatsAppIcon} from '@/components/ui/whatsapp-icon';
import {useConfetti} from '@/components/confetti';
import {useRef, useState, useEffect} from 'react';
import {useIsClient} from '@/hooks/use-is-client';

const HeroIllustrationLayer1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 500 350"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="absolute inset-0 w-full h-full"
  >
    <path
      d="M0,350 Q250,320 500,350 L500,350 L0,350 Z"
      fill="hsl(var(--primary) / 0.05)"
    />
  </svg>
);

const HeroIllustrationLayer2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 500 350"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="absolute inset-0 w-full h-full"
  >
    <g transform="translate(1.25rem, 1.25rem)">
      <rect
        x="200"
        y="75"
        width="100"
        height="200"
        rx="15"
        fill="hsl(var(--card))"
        stroke="hsl(var(--border))"
        strokeWidth="1.5"
      />
      <rect
        x="210"
        y="85"
        width="80"
        height="150"
        rx="5"
        fill="hsl(var(--background))"
      />
      <line
        x1="235"
        y1="260"
        x2="265"
        y2="260"
        stroke="hsl(var(--border))"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const HeroIllustrationLayer3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 500 350"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    className="absolute inset-0 w-full h-full"
  >
    <defs>
      <linearGradient id="grad-glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.7}}
        />
        <stop
          offset="100%"
          style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.5}}
        />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g transform="translate(1.25rem, 1.25rem)">
      <rect x="215" y="95" width="60" height="20" rx="5" fill="hsl(var(--secondary))" />
      <rect x="235" y="125" width="50" height="30" rx="5" fill="hsl(var(--primary))" />
      <g
        transform="translate(245, 132.5)"
        fill="hsl(var(--primary-foreground))"
        filter="url(#glow)"
      >
        <path
          d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"
          transform="scale(0.5)"
        />
        <path
          d="M5 10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1zm10 0a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1z"
          transform="scale(0.5) translate(0, 10)"
        />
      </g>
    </g>
  </svg>
);

const WHATSAPP_LINK = 'https://wa.me/15551234567?text=Hi%20Carevo!';

export const HeroSection = () => {
  const {fire} = useConfetti();
  const headline = 'Health Guidance You Can Hear, Anytime.';
  const [scrollY, setScrollY] = useState(0);
  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  const getParallaxStyle = (speed: number) => ({
    transform: `translateY(${scrollY * speed}px)`,
    transition: 'transform 0.1s ease-out',
    willChange: 'transform',
  });

  return (
    <section className="container grid lg:grid-cols-2 gap-10 items-center py-24 md:py-32 relative px-8 md:px-24 snap-start">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-fluid-h1 font-bold tracking-tight animate-fade-up">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {headline.split(' ').map((word, index) => (
              <span
                key={index}
                className="inline-block animate-fade-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards',
                  opacity: 0,
                }}
              >
                {word}&nbsp;
              </span>
            ))}
          </span>
        </h1>
        <p className="text-fluid-p text-muted-foreground max-w-2xl mx-auto lg:mx-0">
          Carevo delivers life-saving health education through WhatsApp voice
          notes in your local&nbsp;language.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            asChild
            size="lg"
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
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/5 hover:text-primary"
          >
            <a href="#how-it-works">How It Works</a>
          </Button>
        </div>
      </div>
      <div
        className="relative flex justify-center items-center h-full w-full"
        data-ai-hint="phone whatsapp voice"
      >
        <HeroIllustrationLayer1 style={getParallaxStyle(0.1)} />
        <HeroIllustrationLayer2 style={getParallaxStyle(0.25)} />
        <HeroIllustrationLayer3 style={getParallaxStyle(0.4)} />
      </div>
      <ScrollDownArrow className="absolute bottom-10 left-1/2 -translate-x-1/2" />
    </section>
  );
};
