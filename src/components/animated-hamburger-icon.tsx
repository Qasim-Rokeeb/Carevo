'use client';

import {cn} from '@/lib/utils';

interface AnimatedHamburgerIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export const AnimatedHamburgerIcon = ({
  isOpen,
  className,
}: AnimatedHamburgerIconProps) => {
  return (
    <div
      className={cn('hamburger-icon h-6 w-6', className)}
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-[5px]">
        <div className="hamburger-line hamburger-line-top h-0.5 w-6 rounded-full bg-current"></div>
        <div className="hamburger-line hamburger-line-middle h-0.5 w-6 rounded-full bg-current"></div>
        <div className="hamburger-line hamburger-line-bottom h-0.5 w-6 rounded-full bg-current"></div>
      </div>
    </div>
  );
};
