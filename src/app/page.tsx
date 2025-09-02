import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  HeartPulse,
  Languages,
  MessageCircle,
  PlayCircle,
  Smartphone,
  Users,
  Building,
  HeartHandshake,
  ShieldCheck,
  Zap,
  Download,
  Headphones,
  Search,
  HelpCircle,
} from 'lucide-react';
import type { SVGProps } from 'react';
import Link from 'next/link';

const WHATSAPP_LINK = 'https://wa.me/15551234567?text=Hi%20Carevo!';

const Logo = (props: SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="hsl(var(--primary))"/>
    <path d="M12 6C9.24 6 7 8.24 7 11C7 12.76 7.85 14.3 9.09 15.29L9.5 15.63V18H10.5V15.2L10.21 15C9.23 14.26 8.5 13.03 8.5 11.63C8.5 9.08 10.08 7.5 12 7.5C13.92 7.5 15.5 9.08 15.5 11.63C15.5 13.03 14.77 14.26 13.79 15L13.5 15.2V18H14.5V15.63L14.91 15.29C16.15 14.3 17 12.76 17 11C17 8.24 14.76 6 12 6Z" fill="hsl(var(--primary))"/>
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
      
      {/* Subtle background wave */}
      <path d="M0,350 Q250,320 500,350 L500,350 L0,350 Z" fill="hsl(var(--primary) / 0.05)" />
      
      {/* Phone */}
      <g transform="translate(20, 20)">
        <rect x="200" y="75" width="100" height="200" rx="15" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5"/>
        <rect x="210" y="85" width="80" height="150" rx="5" fill="hsl(var(--background))"/>
        <line x1="235" y1="260" x2="265" y2="260" stroke="hsl(var(--border))" strokeWidth="2" strokeLinecap="round" />
        
        {/* Chat bubbles */}
        <rect x="215" y="95" width="60" height="20" rx="5" fill="hsl(var(--secondary))" />
        <rect x="235" y="125" width="50" height="30" rx="5" fill="hsl(var(--primary))" />
        
        {/* Glowing voice note icon */}
        <g transform="translate(245, 132.5)" fill="white" filter="url(#glow)">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" transform="scale(0.5)" />
          <path d="M5 10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1zm10 0a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1z" transform="scale(0.5) translate(0, 10)" />
        </g>
      </g>
    </svg>
  );


const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Logo className="h-8 w-8" />
        <span className="text-2xl font-bold text-primary">Carevo</span>
      </Link>
      <Button asChild>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          Start on WhatsApp
        </a>
      </Button>
    </div>
  </header>
);

const HeroSection = () => (
    <section className="container grid lg:grid-cols-2 gap-10 items-center py-24 md:py-32 relative">
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-50/50 to-transparent -z-10" />
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Health Guidance You Can Hear, Anytime.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
          Carevo delivers life-saving health education through WhatsApp voice notes in your local language.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button asChild size="lg">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Start on WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/5">
            <a href="#how-it-works">How It Works</a>
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
         <HeroIllustration className="w-full max-w-md lg:max-w-lg h-auto" data-ai-hint="phone whatsapp voice" />
      </div>
    </section>
  );

const WhyCarevoSection = () => {
  const items = [
    { icon: Smartphone, title: 'Accessible', description: 'No app needed, works on WhatsApp.' },
    { icon: Languages, title: 'Inclusive', description: 'Audio in local languages, no reading required.' },
    { icon: HeartPulse, title: 'Impactful', description: 'Practical tips on hygiene, childcare, and disease prevention.' },
  ];
  return (
    <section id="why-carevo" className="container py-20 bg-white">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Closing the Health Information Gap</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {items.map(item => (
                <Card key={item.title} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-primary">
                    <CardHeader>
                        <div className="mx-auto bg-green-100/70 rounded-full p-3 w-fit mb-4">
                            <item.icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
        <div className="w-full h-px bg-gray-200/80 my-20" />
    </section>
  );
}

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-white">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Started in Seconds</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-12 text-center">
        {[
          { icon: MessageCircle, title: 'Join Carevo on WhatsApp', description: 'Receive a welcome voice note to begin.' },
          { icon: PlayCircle, title: 'Choose Your Language', description: 'Guided by simple voice prompts.' },
          { icon: HeartHandshake, title: 'Get Health Tips', description: 'Audio notes you can replay anytime.' },
        ].map((step, index) => (
          <div key={step.title} className="flex flex-col items-center p-4">
            <div className="relative mb-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">{index + 1}</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const FeaturesSection = () => {
    const features = [
        { icon: Headphones, title: "Voice-First Onboarding", description: "Easy language selection with your voice." },
        { icon: Search, title: "Quick Access", description: "Get info fast with simple keywords." },
        { icon: Download, title: "Offline Playback", description: "Listen anywhere once downloaded." },
        { icon: MessageCircle, title: "Follow-Up Q&A", description: "Ask questions and get answers." },
        { icon: HelpCircle, title: "Clear Guidance", description: "Simple help if something goes wrong." },
    ];
    return (
        <section id="features" className="container py-24 bg-secondary/50 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Powerful Features, Simple Interface</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {features.map((feature) => (
                    <div key={feature.title} className="flex flex-col items-center text-center gap-3">
                        <div className="bg-white rounded-full p-3 shadow">
                           <feature.icon className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="font-semibold text-center">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};


const WhoItsForSection = () => {
  const audiences = [
    { icon: Users, title: 'Communities', description: 'With limited literacy or internet access.' },
    { icon: Building, title: 'NGOs & Health Ministries', description: 'For public health and education campaigns.' },
    { icon: HeartHandshake, title: 'Families & Caregivers', description: 'For trusted, simple health education.' },
  ];
  return (
    <section id="who-its-for" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Designed For Everyone</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map(audience => (
            <Card key={audience.title} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-blue-100/70 rounded-full p-4 w-fit mb-4">
                  <audience.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


const FinalCTASection = () => (
    <section id="cta" className="bg-white py-24">
        <div className="container text-center relative overflow-hidden rounded-2xl bg-primary/90 text-white p-16">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Start Learning With Just a Voice Note.</h2>
            <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Try Carevo on WhatsApp</a>
                </Button>
            </div>
            <p className="mt-4 text-white/80">Free. Simple. Life-saving.</p>
        </div>
    </section>
);

const Footer = () => (
    <footer className="border-t bg-gray-50">
        <div className="container py-6 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Carevo. All Rights Reserved.</p>
        </div>
    </footer>
);

export default function CarevoLandingPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <HeroSection />
        <WhyCarevoSection />
        <HowItWorksSection />
        <FeaturesSection />
        <WhoItsForSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

    