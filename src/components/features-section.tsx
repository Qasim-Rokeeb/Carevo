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
      className="container py-24 bg-secondary/50 rounded-2xl px-8 md:px-24 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-fluid-h2 font-bold text-foreground mb-2">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Powerful Features, Simple Interface
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center gap-3 p-4 rounded-xl animate-fade-up"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'forwards',
              opacity: 0,
            }}
          >
            <div className="bg-background rounded-full p-3 shadow">
              <feature.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-center">{feature.title}</h3>
            <p className="text-sm text-muted-foreground text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
