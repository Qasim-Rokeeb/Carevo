import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  HeartPulse,
  Languages,
  MessageCircle,
  PlayCircle,
  Smartphone,
  Users,
  Building,
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
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.6 }} />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>
    </defs>
    <rect width="500" height="350" rx="20" fill="hsl(var(--background))" />
    {/* Phone */}
    <rect x="200" y="75" width="100" height="200" rx="15" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="2"/>
    <rect x="210" y="85" width="80" height="150" rx="5" fill="hsl(var(--background))"/>
    <line x1="230" y1="260" x2="270" y2="260" stroke="hsl(var(--border))" strokeWidth="3" strokeLinecap="round" />
    
    {/* Voice waves */}
    <path d="M 190,175 C 150,125 150,225 110,175" stroke="url(#grad1)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#glow)">
        <animate attributeName="d" values="M 190,175 C 150,125 150,225 110,175; M 190,175 C 130,150 170,200 110,175; M 190,175 C 150,125 150,225 110,175" dur="3s" repeatCount="indefinite" />
    </path>
     <path d="M 180,175 C 130,145 130,205 90,175" stroke="url(#grad1)" strokeWidth="2" fill="none" strokeLinecap="round" strokeOpacity="0.7">
        <animate attributeName="d" values="M 180,175 C 130,145 130,205 90,175; M 180,175 C 110,160 150,190 90,175; M 180,175 C 130,145 130,205 90,175" dur="4s" repeatCount="indefinite" />
    </path>

    {/* Icons */}
    <g transform="translate(60, 100)" fill="hsl(var(--primary))" opacity="0.8">
      <HeartPulse size={24}/>
    </g>
     <g transform="translate(40, 165)" fill="hsl(var(--primary))" opacity="0.8">
      <Users size={24}/>
    </g>
     <g transform="translate(60, 230)" fill="hsl(var(--primary))" opacity="0.8">
      <MessageCircle size={24}/>
    </g>
  </svg>
);


const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Logo className="h-6 w-6" />
        <span className="font-headline text-xl font-bold text-primary">Carevo</span>
      </Link>
      <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          Start on WhatsApp
        </a>
      </Button>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
    <div className="flex flex-col gap-6 text-center lg:text-left">
      <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
        Health Information You Can Hear, Anytime, Anywhere.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
        Carevo delivers life-saving health tips in your language through simple WhatsApp voice notes.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Start on WhatsApp
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
          <a href="#why-carevo">Learn More</a>
        </Button>
      </div>
    </div>
    <div className="flex justify-center items-center">
       <HeroIllustration className="w-full max-w-md lg:max-w-lg h-auto" data-ai-hint="person phone audio" />
    </div>
  </section>
);

const WhyCarevoSection = () => {
  const items = [
    { icon: Smartphone, title: 'Accessible', description: 'Delivered on WhatsApp, a platform you already use. No new app download needed.' },
    { icon: Languages, title: 'Inclusive', description: 'Audio-based content in local languages means literacy is never a barrier to learning.' },
    { icon: HeartPulse, title: 'Impactful', description: 'Covers essential topics like hygiene, disease prevention, nutrition, and childcare.' },
  ];
  return (
    <section id="why-carevo" className="container py-20">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Closing the Health Information Gap</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">We believe everyone deserves access to vital health knowledge. Carevo makes it simple.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map(item => (
          <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const HowItWorksSection = () => (
  <section id="how-it-works" className="bg-primary/5 py-20">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Get Started in Seconds</h2>
        <p className="text-lg text-muted-foreground mt-2">Just three simple steps to unlock a world of health knowledge.</p>
      </div>
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-accent origin-left scale-x-0 animate-progress" style={{ animation: 'progress-bar 3s linear infinite' }}></div>
        {[
          { icon: MessageCircle, title: 'Join on WhatsApp', description: 'Send "Hi" to start and get a welcome voice note.' },
          { icon: Languages, title: 'Choose Language', description: 'Select your preferred local language by voice or text.' },
          { icon: PlayCircle, title: 'Receive Audio Tips', description: 'Listen to practical health advice instantly, anytime.' },
        ].map((step, index) => (
          <div key={step.title} className="relative bg-background z-10 flex flex-col items-center text-center p-6 max-w-xs">
            <div className="bg-accent/20 rounded-full p-4 mb-4">
              <step.icon className="h-10 w-10 text-accent" />
            </div>
            <h3 className="font-headline text-xl font-bold mb-2">{index + 1}. {step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const FeaturesSection = () => {
    const features = [
        "Voice-first onboarding with easy language selection.",
        "Quick access to health information using simple keywords.",
        "All audio tips work offline once downloaded in WhatsApp.",
        "Follow-up Q&A for deeper understanding, powered by AI.",
        "Simple, polite guidance if something goes wrong.",
    ];
    return (
        <section id="features" className="container py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">Powerful Features, Simple Interface</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We've designed Carevo to be both robust and incredibly easy to use. Here’s what makes it special.
                  </p>
                  <ul className="space-y-4">
                      {features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                          </li>
                      ))}
                  </ul>
                </div>
                <div className="flex justify-center">
                    <img src="https://picsum.photos/600/400" alt="Woman listening to health advice on her phone in a vibrant community setting" data-ai-hint="health education community" className="rounded-lg shadow-2xl" width={600} height={400}/>
                </div>
            </div>
        </section>
    );
};


const WhoItsForSection = () => {
  const audiences = [
    { icon: Users, title: 'Communities', description: 'Perfect for communities with limited literacy or internet access, ensuring no one is left behind.' },
    { icon: Building, title: 'NGOs & Health Ministries', description: 'A scalable, cost-effective tool for public health outreach and education campaigns.' },
    { icon: HeartHandshake, title: 'Families & Caregivers', description: 'Provides trusted, simple, and actionable health education for taking care of loved ones.' },
  ];
  return (
    <section id="who-its-for" className="bg-primary/5 py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Designed For Everyone</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">Carevo is built to serve a wide range of users with diverse needs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map(audience => (
            <Card key={audience.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                  <audience.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{audience.title}</CardTitle>
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

const ImpactSection = () => (
    <section id="impact" className="container py-20">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Growing Impact</h2>
            <p className="text-lg text-muted-foreground mt-2">Making a measurable difference in communities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
                <p className="font-headline text-5xl font-bold text-accent">10,000+</p>
                <h3 className="text-lg font-semibold mt-2">Engaged Users Weekly</h3>
            </div>
            <div>
                <p className="font-headline text-5xl font-bold text-accent">98%</p>
                <h3 className="text-lg font-semibold mt-2">Successful Audio Delivery</h3>
            </div>
            <div>
                <p className="font-headline text-5xl font-bold text-accent">4.9/5</p>
                <h3 className="text-lg font-semibold mt-2">Community Feedback Score</h3>
            </div>
        </div>
    </section>
);


const FinalCTASection = () => (
    <section id="cta" className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Start Learning Today with Just a Voice Note.</h2>
            <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Try Carevo on WhatsApp</a>
                </Button>
            </div>
            <p className="mt-4 text-primary-foreground/80">Free. Simple. Life-saving.</p>
        </div>
    </section>
);

const Footer = () => (
    <footer className="border-t">
        <div className="container py-6 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Carevo. All Rights Reserved.</p>
        </div>
    </footer>
);

export default function CarevoLandingPage() {
  return (
    <div className="bg-background text-foreground font-body">
      <Header />
      <main>
        <HeroSection />
        <WhyCarevoSection />
        <HowItWorksSection />
        <FeaturesSection />
        <WhoItsForSection />
        <ImpactSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
