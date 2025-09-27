import {
  Headphones,
  Search,
  Download,
  MessageCircle,
  HelpCircle,
  ClipboardCheck,
} from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Headphones,
      title: 'Voice-First Onboarding',
      description: 'Easy language selection with your voice.',
    },
    {
      icon: Search,
      title: 'Quick Access',
      description: 'Get info fast with simple keywords.',
    },
    {
      icon: Download,
      title: 'Offline Playback',
      description: 'Listen anywhere once downloaded.',
    },
    {
      icon: MessageCircle,
      title: 'Follow-Up Q&A',
      description: 'Ask questions and get answers.',
    },
    {
      icon: HelpCircle,
      title: 'Clear Guidance',
      description: 'Simple help if something goes wrong.',
    },
    {
      icon: ClipboardCheck,
      title: 'Verified Information',
      description: 'Content from trusted health sources.',
    },
  ];
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
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="animate-fade-up flex flex-col items-center gap-3 rounded-xl p-4 text-center"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'forwards',
              opacity: 0,
            }}
          >
            <div className="rounded-full bg-background p-3 shadow">
              <feature.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-center font-semibold">{feature.title}</h3>
            <p className="text-center text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
