import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MessageCircle,
  PlayCircle,
  Users,
  Building,
  HeartHandshake,
  Globe,
  Star,
} from 'lucide-react';
import type { SVGProps } from 'react';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import Image from 'next/image';
import { TypingCarousel } from '@/components/typing-carousel';
import { Header } from '@/components/header';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';

const WHATSAPP_LINK = 'https://wa.me/15551234567?text=Hi%20Carevo!';

const SmartphoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const InclusiveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    <path d="M12 6v6l4 2" />
    <path d="M12 12H8" />
  </svg>
);

const ImpactfulIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    <path d="M22 12h-4" />
    <path d="M2 12h4" />
    <path d="M12 2v4" />
    <path d="M12 22v-4" />
  </svg>
);


const WhyCarevoSection = () => {
  const items = [
    { icon: SmartphoneIcon, title: 'Accessible', description: 'No app needed, works on any phone with WhatsApp.' },
    { icon: InclusiveIcon, title: 'Inclusive', description: 'Audio in local languages, no reading required.' },
    { icon: ImpactfulIcon, title: 'Impactful', description: 'Practical tips on hygiene, childcare, and disease prevention.' },
  ];
  return (
    <section id="why-carevo" className="container py-20 bg-secondary/50 rounded-2xl px-4 md:px-24">
        <div className="text-center mb-12">
            <h2 className="text-fluid-h2 font-bold text-foreground">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Closing the Health Information Gap
              </span>
            </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {items.map(item => (
                <Card key={item.title} className="text-center shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-transparent hover:border-primary rounded-xl hover:-translate-y-1">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
                            <item.icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-fluid-p text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
        <div className="w-full border-b my-20" />
    </section>
  );
}

const AboutSection = () => (
  <section id="about" className="container py-20 px-4 md:px-24 overflow-hidden">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="relative rounded-lg overflow-hidden shadow-xl">
        <Image
          src="https://picsum.photos/seed/about/600/400"
          alt="A healthcare worker smiling"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
          data-ai-hint="healthcare worker smiling"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-fluid-h2 font-bold text-foreground">
          <TypingCarousel
            phrases={['Our Mission: Health Equity for All', 'Our Goal: Accessible Information', 'Our Vision: Empowered Communities']}
            className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          />
        </div>
        <p className="text-fluid-p text-muted-foreground">
          Carevo was born from a simple yet powerful idea: everyone deserves access to clear, reliable health information.
        </p>
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
          "Empowering communities with accessible health knowledge is at the core of what we do."
        </blockquote>
        <div className="flex gap-6 mt-2">
          <div className="flex items-center gap-3">
            <Globe className="h-7 w-7 text-primary" />
            <div>
              <p className="font-semibold">Global Reach</p>
              <p className="text-sm text-muted-foreground">Accessible worldwide</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Star className="h-7 w-7 text-primary" />
            <div>
              <p className="font-semibold">Trusted Content</p>
              <p className="text-sm text-muted-foreground">Expert-verified info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-background px-4 md:px-24">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-fluid-h2 font-bold text-foreground">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get Started in Seconds
          </span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-12 text-center items-start">
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
            <p className="text-fluid-p text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhoItsForSection = () => {
  const audiences = [
    { icon: Users, title: 'Communities', description: 'With limited literacy or internet access.' },
    { icon: Building, title: 'NGOs & Health Ministries', description: 'For public health and education campaigns.' },
    { icon: HeartHandshake, title: 'Families & Caregivers', description: 'For trusted, simple health education.' },
  ];
  return (
    <section id="who-its-for" className="py-24 bg-secondary/50 rounded-2xl px-4 md:px-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-fluid-h2 font-bold text-foreground">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Designed For Everyone
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map(audience => (
            <Card key={audience.title} className="text-center shadow-md hover:shadow-lg transition-all duration-300 rounded-xl hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="bg-accent/10 rounded-full p-4 w-fit mb-4">
                  <audience.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fluid-p text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


const FinalCTASection = () => (
    <section id="cta" className="bg-background py-24 px-4 md:px-24">
        <div className="container text-center relative overflow-hidden rounded-2xl bg-primary/90 text-primary-foreground p-16">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-background/10 rounded-full animate-pulse-slow"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-background/10 rounded-full animate-pulse-slow animation-delay-3000"></div>
            <h2 className="text-fluid-h2 font-bold">Start Learning With Just a Voice Note.</h2>
            <div className="mt-8">
                <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Try Carevo on WhatsApp"
                    >
                        <WhatsAppIcon className="h-5 w-5" />
                        Try Carevo on WhatsApp
                    </a>
                </Button>
            </div>
            <p className="mt-4 text-primary-foreground/80">Free. Simple. Life-saving.</p>
        </div>
    </section>
);

const Footer = () => (
  <footer className="border-t bg-secondary/50 animate-fade-in duration-500 relative overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-[0.03]">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="plus-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <path
              d="M10 0 V20 M0 10 H20"
              stroke="hsl(var(--foreground))"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#plus-pattern)" />
      </svg>
    </div>
    <div className="container py-6 text-center text-muted-foreground px-4 md:px-24 relative z-10">
      <p>
        <span className="font-bold">
          &copy; {new Date().getFullYear()} Carevo.
        </span>{' '}
        All Rights Reserved.
      </p>
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