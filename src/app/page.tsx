'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {
  MessageCircle,
  PlayCircle,
  Users,
  Building,
  HeartHandshake,
  Globe,
  Star,
  Phone,
} from 'lucide-react';
import type {SVGProps} from 'react';
import {HeroSection} from '@/components/hero-section';
import {FeaturesSection} from '@/components/features-section';
import {TypingCarousel} from '@/components/typing-carousel';
import {Header} from '@/components/header';
import {WhatsAppIcon} from '@/components/ui/whatsapp-icon';
import {useToast} from '@/hooks/use-toast';
import {useIsMobile} from '@/hooks/use-mobile';
import {useIsClient} from '@/hooks/use-is-client';
import {SwooshDivider} from '@/components/swoosh-divider';
import {BackToTopButton} from '@/components/back-to-top-button';
import {ImageWithLoader} from '@/components/image-with-loader';
import {useConfetti} from '@/components/confetti';

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
    {
      icon: SmartphoneIcon,
      title: 'Accessible',
      description: 'No app needed, works on any phone with WhatsApp.',
    },
    {
      icon: InclusiveIcon,
      title: 'Inclusive',
      description: 'Audio in local languages, no reading required.',
    },
    {
      icon: ImpactfulIcon,
      title: 'Impactful',
      description:
        'Practical tips on hygiene, childcare, and disease prevention.',
    },
  ];
  return (
    <section
      id="why-carevo"
      className="container relative scroll-mt-24 rounded-2xl bg-secondary/50 px-4 py-20 md:px-24 snap-start"
    >
      <SwooshDivider top className="text-background" />
      <div className="mb-12 text-center">
        <h2 className="text-fluid-h2 font-bold text-foreground">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Closing the Health Information Gap
          </span>
        </h2>
      </div>
      <div className="grid gap-8 [perspective:1000px] md:grid-cols-3">
        {items.map(item => (
          <Card
            key={item.title}
            className="transform-style-3d rounded-xl border-t-4 border-transparent text-center shadow-md transition-all duration-300 hover:border-primary hover:shadow-lg hover:[transform:rotateX(10deg)_rotateY(-5deg)]"
          >
            <CardHeader>
              <div className="mx-auto w-fit rounded-full bg-primary/10 p-3">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-fluid-p text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="my-20 w-full border-b" />
      <SwooshDivider bottom className="text-background" />
    </section>
  );
};

const AboutSection = () => (
  <section
    id="about"
    className="container scroll-mt-24 overflow-hidden px-4 py-20 md:px-24 snap-start"
  >
    <div className="grid items-center gap-16 md:grid-cols-2">
      <div className="relative overflow-hidden rounded-lg shadow-xl">
        <ImageWithLoader
          src="https://picsum.photos/seed/about/600/400"
          alt="A healthcare worker smiling"
          width={600}
          height={400}
          className="h-auto w-full object-cover"
          data-ai-hint="healthcare worker smiling"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-fluid-h2 font-bold text-foreground">
          <TypingCarousel
            phrases={[
              'Our Mission: Health Equity for All',
              'Our Goal: Accessible Information',
              'Our Vision: Empowered Communities',
            ]}
            className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          />
        </div>
        <p className="text-fluid-p text-muted-foreground">
          Carevo was born from a simple yet powerful idea: everyone deserves
          access to clear, reliable health information.
        </p>
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
          "Empowering communities with accessible health knowledge is at the
          core of what we do."
        </blockquote>
        <div className="mt-2 flex gap-6">
          <div className="flex items-center gap-3">
            <Globe className="h-7 w-7 text-primary" />
            <div>
              <p className="font-semibold">Global Reach</p>
              <p className="text-sm text-muted-foreground">
                Accessible worldwide
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Star className="h-7 w-7 text-primary" />
            <div>
              <p className="font-semibold">Trusted Content</p>
              <p className="text-sm text-muted-foreground">
                Expert-verified info
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section
    id="how-it-works"
    className="relative scroll-mt-24 bg-background px-4 py-20 md:px-24 snap-start"
  >
    <div className="container">
      <div className="mb-16 text-center">
        <h2 className="text-fluid-h2 font-bold text-foreground">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get Started in Seconds
          </span>
        </h2>
      </div>
      <div className="grid items-start gap-12 text-center md:grid-cols-3">
        {[
          {
            icon: MessageCircle,
            title: 'Join Carevo on WhatsApp',
            description: 'Receive a welcome voice note to begin.',
          },
          {
            icon: PlayCircle,
            title: 'Choose Your Language',
            description: 'Guided by simple voice prompts.',
          },
          {
            icon: HeartHandshake,
            title: 'Get Health Tips',
            description: 'Audio notes you can replay anytime.',
          },
        ].map((step, index) => (
          <div key={step.title} className="flex flex-col items-center p-4">
            <div className="relative mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-mono font-bold text-white">
                {index + 1}
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
            <p className="text-fluid-p text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhoItsForSection = () => {
  const audiences = [
    {
      icon: Users,
      title: 'Communities',
      description: 'With limited literacy or internet access.',
    },
    {
      icon: Building,
      title: 'NGOs & Health Ministries',
      description: 'For public health and education campaigns.',
    },
    {
      icon: HeartHandshake,
      title: 'Families & Caregivers',
      description: 'For trusted, simple health education.',
    },
  ];
  return (
    <section
      id="who-its-for"
      className="relative scroll-mt-24 rounded-2xl bg-secondary/50 px-4 py-24 md:px-24 snap-start"
    >
      <SwooshDivider top className="text-background" />
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-fluid-h2 font-bold text-foreground">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Designed For Everyone
            </span>
          </h2>
        </div>
        <div className="grid gap-8 [perspective:1000px] md:grid-cols-3">
          {audiences.map(audience => (
            <Card
              key={audience.title}
              className="transform-style-3d rounded-xl text-center shadow-md transition-all duration-300 hover:shadow-lg hover:[transform:rotateX(10deg)_rotateY(5deg)]"
            >
              <CardHeader className="items-center">
                <div className="w-fit rounded-full bg-accent/10 p-4">
                  <audience.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fluid-p text-muted-foreground">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <SwooshDivider bottom className="text-background" />
    </section>
  );
};

const FinalCTASection = () => {
  const isMobile = useIsMobile();
  const isClient = useIsClient();
  const {toast} = useToast();
  const {fire} = useConfetti();

  const handleShare = async () => {
    fire();
    if (isClient && navigator.share && isMobile) {
      try {
        await navigator.share({
          title: 'Carevo',
          text: 'Check out Carevo for health guidance you can hear, anytime.',
          url: WHATSAPP_LINK,
        });
        toast({title: 'Link shared!'});
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Could not share',
          description: 'There was an error trying to share the link.',
        });
      }
    } else {
      window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="cta"
      className="scroll-mt-24 bg-background px-4 py-24 md:px-24 snap-start"
    >
      <div className="container relative overflow-hidden rounded-2xl bg-primary/90 p-16 text-center text-primary-foreground">
        <div className="animate-pulse-slow absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-background/10"></div>
        <div className="animation-delay-3000 animate-pulse-slow absolute -right-10 -top-10 h-48 w-48 rounded-full bg-background/10"></div>
        <h2 className="text-fluid-h2 font-bold">
          Start Learning With Just a Voice Note.
        </h2>
        <div className="mt-8">
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90"
            onClick={handleShare}
            aria-label="Try Carevo on WhatsApp or share"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>
              {isClient && isMobile
                ? 'Share Carevo'
                : 'Try Carevo on WhatsApp'}
            </span>
          </Button>
        </div>
        <p className="mt-4 text-primary-foreground/80">
          Free. Simple. Life-saving.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  const {toast} = useToast();
  const phoneNumber = '+1 (555) 123-4567';

  const handleCopy = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        toast({
          title: 'Copied to Clipboard',
          description: `Phone number ${phoneNumber} copied.`,
        });
      })
      .catch(err => {
        toast({
          variant: 'destructive',
          title: 'Copy Failed',
          description: 'Could not copy phone number to clipboard.',
        });
      });
  };

  return (
    <footer className="relative animate-fade-in duration-500 overflow-hidden border-t bg-secondary/50 snap-start">
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
      <div className="container relative z-10 flex flex-col gap-4 px-4 py-8 text-center text-muted-foreground md:px-24">
        <div
          className="group flex cursor-pointer items-center justify-center gap-2"
          onClick={handleCopy}
          onKeyDown={e => e.key === 'Enter' && handleCopy()}
          role="button"
          tabIndex={0}
          aria-label="Copy phone number"
        >
          <Phone className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          <span className="transition-colors group-hover:text-primary">
            {phoneNumber}
          </span>
        </div>
        <p>
          <span className="font-bold">
            &copy; {new Date().getFullYear()} Carevo.
          </span>{' '}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Carevo',
  url: 'https://carevo.app', // Replace with your actual domain
  logo: 'https://carevo.app/logo.png', // Replace with your actual logo URL
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'Customer Service',
  },
  sameAs: [WHATSAPP_LINK], // Add other social media links if available
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I start using Carevo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Just send a message to our number on WhatsApp to start. You\'ll receive a welcome voice note to guide you through the process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Carevo free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Carevo is completely free to use. Our mission is to make health information accessible to everyone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Carevo accessible?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Carevo works on any phone with WhatsApp, so you don\'t need to download a separate app. Information is provided through audio in local languages, so reading is not required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is Carevo for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Carevo is designed for everyone, especially communities with limited literacy or internet access, NGOs and Health Ministries for public health campaigns, and families or caregivers seeking trusted health education.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of information does Carevo provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Carevo provides practical, expert-verified health tips on topics like hygiene, childcare, and disease prevention through easy-to-understand audio notes.',
      },
    },
  ],
};

export default function CarevoLandingPage() {
  return (
    <div className="bg-background font-sans text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(organizationSchema)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
      />
      <Header />
      <main id="main-content">
        <HeroSection />
        <WhyCarevoSection />
        <AboutSection />
        <HowItWorksSection />
        <FeaturesSection />
        <WhoItsForSection />
        <FinalCTASection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
