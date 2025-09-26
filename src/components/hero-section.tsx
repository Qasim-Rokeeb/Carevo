import { Button } from '@/components/ui/button';
import type { SVGProps } from 'react';

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

const HeroIllustration = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="grad-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.7 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.5 }} />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
          </feMerge>
      </filter>
      </defs>
      
      <path d="M0,350 Q250,320 500,350 L500,350 L0,350 Z" fill="hsl(var(--primary) / 0.05)" />
      
      <g transform="translate(20, 20)">
        <rect x="200" y="75" width="100" height="200" rx="15" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5"/>
        <rect x="210" y="85" width="80" height="150" rx="5" fill="hsl(var(--background))"/>
        <line x1="235" y1="260" x2="265" y2="260" stroke="hsl(var(--border))" strokeWidth="2" strokeLinecap="round" />
        
        <rect x="215" y="95" width="60" height="20" rx="5" fill="hsl(var(--secondary))" />
        <rect x="235" y="125" width="50" height="30" rx="5" fill="hsl(var(--primary))" />
        
        <g transform="translate(245, 132.5)" fill="hsl(var(--primary-foreground))" filter="url(#glow)">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" transform="scale(0.5)" />
          <path d="M5 10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1zm10 0a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1z" transform="scale(0.5) translate(0, 10)" />
        </g>
      </g>
    </svg>
  );

const WHATSAPP_LINK = 'https://wa.me/15551234567?text=Hi%20Carevo!';

export const HeroSection = () => (
    <section className="container grid lg:grid-cols-2 gap-10 items-center py-24 md:py-32 relative px-8 md:px-16">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="flex flex-col gap-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Health Guidance You Can Hear, Anytime.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Carevo delivers life-saving health education through WhatsApp voice notes in your local language.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-5 w-5" />
              Start on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/5 hover:text-primary">
            <a href="#how-it-works">How It Works</a>
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
         <HeroIllustration className="w-full max-w-md lg:max-w-lg h-auto" data-ai-hint="phone whatsapp voice" />
      </div>
    </section>
  );
  