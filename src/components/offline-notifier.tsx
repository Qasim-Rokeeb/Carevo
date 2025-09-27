'use client';

import {useEffect} from 'react';
import {useToast} from '@/hooks/use-toast';
import {Wifi, WifiOff} from 'lucide-react';

export const OfflineNotifier = () => {
  const {toast, dismiss} = useToast();
  const OFFLINE_TOAST_ID = 'offline-toast';

  useEffect(() => {
    const handleOnline = () => {
      dismiss(OFFLINE_TOAST_ID);
      toast({
        title: 'You are back online!',
        description: 'Your internet connection has been restored.',
        variant: 'default',
        icon: <Wifi className="h-5 w-5 text-primary" />,
      });
    };

    const handleOffline = () => {
      toast({
        id: OFFLINE_TOAST_ID,
        title: 'You are currently offline',
        description: 'Please check your internet connection.',
        variant: 'destructive',
        duration: Infinity,
        icon: <WifiOff className="h-5 w-5" />,
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      handleOffline();
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [toast, dismiss]);

  return null;
};
