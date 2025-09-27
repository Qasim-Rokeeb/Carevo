'use client';

import {cn} from '@/lib/utils';
import {buttonVariants} from './ui/button';

export const SkipToContent = () => (
  <a
    href="#main-content"
    className={cn(
      buttonVariants({variant: 'outline'}),
      'sr-only absolute left-4 top-4 z-[100] bg-background focus:not-sr-only'
    )}
  >
    Skip to Content
  </a>
);
