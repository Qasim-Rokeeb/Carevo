'use client';

import * as React from 'react';
import {Check, Languages} from 'lucide-react';

import {Button} from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {cn} from '@/lib/utils';

const languages = [
  {name: 'English', code: 'en'},
  {name: 'Español', code: 'es'},
  {name: 'Français', code: 'fr'},
];

export function LanguageSwitcher() {
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');
  const [announcement, setAnnouncement] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLanguageChange = (lang: {name: string; code: string}) => {
    setSelectedLanguage(lang.code);
    setAnnouncement(`Language changed to ${lang.name}`);
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setIsOpen(open => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-11 w-11">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-fade-in">
        {languages.map(lang => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang)}
            className={cn(
              lang.code === selectedLanguage &&
                'bg-accent/10 font-semibold shadow-[0_0_8px_hsl(var(--accent))]'
            )}
          >
            <Check
              className={cn(
                'mr-2 h-4 w-4',
                lang.code === selectedLanguage ? 'opacity-100' : 'opacity-0'
              )}
            />
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
      <span className="sr-only" aria-live="polite">
        {announcement}
      </span>
    </DropdownMenu>
  );
}
