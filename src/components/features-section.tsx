'use client';

import {useState} from 'react';
import {
  Headphones,
  Search,
  Download,
  MessageCircle,
  HelpCircle,
  ClipboardCheck,
  TrendingUp,
  Users,
  Clock,
  ThumbsUp,
  Globe,
  CheckCircle,
} from 'lucide-react';
import {cn} from '@/lib/utils';
import {Card} from './ui/card';

const features = [
  {
    icon: Headphones,
    title: 'Voice-First Onboarding',
    description: 'Easy language selection with your voice.',
    statIcon: Users,
    stat: '95%',
    statLabel: 'User adoption via voice',
  },
  {
    icon: Search,
    title: 'Quick Access',
    description: 'Get info fast with simple keywords.',
    statIcon: Clock,
    stat: '5s',
    statLabel: 'Average info retrieval time',
  },
  {
    icon: Download,
    title: 'Offline Playback',
    description: 'Listen anywhere once downloaded.',
    statIcon: TrendingUp,
    stat: '70%',
    statLabel: 'Listen offline rate',
  },
  {
    icon: MessageCircle,
    title: 'Follow-Up Q&A',
    description: 'Ask questions and get answers.',
    statIcon: ThumbsUp,
    stat: '85%',
    statLabel: 'Satisfaction with answers',
  },
  {
    icon: HelpCircle,
    title: 'Clear Guidance',
    description: 'Simple help if something goes wrong.',
    statIcon: Globe,
    stat: '10+',
    statLabel: 'Languages supported',
  },
  {
    icon: ClipboardCheck,
    title: 'Verified Information',
    description: 'Content from trusted health sources.',
    statIcon: CheckCircle,
    stat: '100%',
    statLabel: 'WHO-compliant content',
  },
];

export const FeaturesSection = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section
      id="features"
      className="container scroll-mt-24 rounded-2xl bg-secondary px-8 py-24 md:px-24 snap-start"
    >
      <div className="mb-12 text-center">
        <h2 className="text-fluid-h2 font-bold text-foreground mb-2">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Powerful Features, Simple Interface
          </span>
        </h2>
      </div>
      <div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        style={{perspective: '1200px'}}
      >
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="flip-card animate-fade-up"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'forwards',
              opacity: 0,
            }}
            onClick={() => handleFlip(index)}
          >
            <Card
              className={cn(
                'flip-card-inner transition-transform duration-700',
                flipped === index && 'rotate-y-180'
              )}
            >
              {/* Front of the card */}
              <div className="flip-card-front flex flex-col items-center gap-3 rounded-xl p-4 text-center">
                <div className="rounded-full bg-background p-3 shadow">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-center font-semibold">{feature.title}</h3>
                <p className="text-center text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <span className="mt-auto text-xs font-semibold text-accent">
                  Click to see stats
                </span>
              </div>
              {/* Back of the card */}
              <div className="flip-card-back flex flex-col items-center justify-center gap-3 rounded-xl bg-accent/10 p-4 text-center text-accent-foreground">
                <feature.statIcon className="h-8 w-8 text-accent" />
                <p className="text-4xl font-bold text-accent">{feature.stat}</p>
                <p className="text-sm font-medium">{feature.statLabel}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
