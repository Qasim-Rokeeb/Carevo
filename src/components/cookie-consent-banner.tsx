'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Cookie } from 'lucide-react';

export const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMadeChoice, setHasMadeChoice] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setHasMadeChoice(false);
      // Delay for fade-in effect
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    localStorage.setItem('cookie_consent', consent.toString());
    setIsVisible(false);
    // Use a timeout to allow the fade-out animation to complete before removing from DOM
    setTimeout(() => {
      setHasMadeChoice(true);
    }, 500);
  };

  if (hasMadeChoice) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 transition-opacity duration-500 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div className="container mx-auto max-w-4xl p-6 rounded-xl bg-background/80 backdrop-blur-md border shadow-2xl flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <Cookie className="h-8 w-8 text-primary" />
        </div>
        <div className="flex-grow text-sm text-muted-foreground text-center sm:text-left">
          <h3 className="font-semibold text-foreground mb-1">Cookie Preferences</h3>
          <p>
            We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept," you consent to our use of cookies.
          </p>
        </div>
        <div className="flex-shrink-0 flex gap-3">
          <Button variant="outline" size="sm" onClick={() => handleConsent(false)}>
            Decline
          </Button>
          <Button size="sm" onClick={() => handleConsent(true)}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};
