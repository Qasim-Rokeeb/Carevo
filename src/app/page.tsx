import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  HeartPulse,
  Languages,
  MessageCircle,
  PlayCircle,
  Smartphone,
  Users,
  Building,
  HeartHandshake,
  Download,
  Headphones,
  Search,
  HelpCircle,
  ClipboardCheck,
  Globe,
  Star,
} from 'lucide-react';
import type { SVGProps } from 'react';
import Link from 'next/link';

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


const Header = () => (
  <header className="sticky top-0 z-50 w-full bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/5 to-transparent -z-10" />
      <div className="flex flex-col gap-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Health Guidance You Can Hear, Anytime.
          </span>
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

const WhyCarevoSection = () => {
  const items = [
    { icon: Smartphone, title: 'Accessible', description: 'No app needed, works on any phone with WhatsApp.' },
    { icon: Languages, title: 'Inclusive', description: 'Audio in local languages, no reading required.' },
    { icon: HeartPulse, title: 'Impactful', description: 'Practical tips on hygiene, childcare, and disease prevention.' },
  ];
  return (
    <section id="why-carevo" className="container py-20 bg-secondary/50 rounded-2xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Closing the Health Information Gap
              </span>
            </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {items.map(item => (
                <Card key={item.title} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-primary">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                            <item.icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
        <div className="w-full h-px bg-border my-20" />
    </section>
  );
}

const AboutSection = () => (
  <section id="about" className="container py-20">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Mission: Health Equity for All
          </span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Carevo was born from a simple yet powerful idea: everyone deserves access to clear, reliable health information, regardless of their location, language, or literacy level. We are committed to breaking down barriers and empowering communities with the knowledge they need to live healthier lives.
        </p>
        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="font-semibold">Global Reach</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            <span className="font-semibold">Trusted Content</span>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <img
          src="https://picsum.photos/seed/about/600/400"
          alt="A healthcare worker smiling"
          className="rounded-lg shadow-xl w-full"
          data-ai-hint="healthcare worker smiling"
        />
        <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg max-w-xs">
          <p className="text-sm font-semibold">"Empowering communities with accessible health knowledge is at the core of what we do."</p>
        </div>
      </div>
    </div>
  </section>
);


const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get Started in Seconds
          </span>
        </h2>
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
        { icon: ClipboardCheck, title: "Verified Information", description: "Content from trusted health sources."}
    ];
    return (
        <section id="features" className="container py-24 bg-secondary/50 rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Powerful Features, Simple Interface
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature) => (
                    <div key={feature.title} className="flex flex-col items-center text-center gap-3">
                        <div className="bg-background rounded-full p-3 shadow">
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
    <section id="who-its-for" className="py-24 bg-secondary/50 rounded-2xl">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Designed For Everyone
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map(audience => (
            <Card key={audience.title} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-accent/10 rounded-full p-4 w-fit mb-4">
                  <audience.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">{audience.title}</CardTitle>
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
    <section id="cta" className="bg-background py-24">
        <div className="container text-center relative overflow-hidden rounded-2xl bg-primary/90 text-primary-foreground p-16">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-background/10 rounded-full"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-background/10 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Start Learning With Just a Voice Note.</h2>
            <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Try Carevo on WhatsApp</a>
                </Button>
            </div>
            <p className="mt-4 text-primary-foreground/80">Free. Simple. Life-saving.</p>
        </div>
    </section>
);

const Footer = () => (
    <footer className="border-t bg-secondary/50 animate-fade-in duration-500">
        <div className="container py-6 text-center text-muted-foreground">
            <p><span className="font-bold">&copy; {new Date().getFullYear()} Carevo.</span> All Rights Reserved.</p>
        </div>
    </footer>
);

export default function CarevoLandingPage() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Header />
      <main>
        <HeroSection />
        <WhyCarevoSection />
        <AboutSection />
        <HowItWorksSection />
        <FeaturesSection />
        <WhoItsForSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
