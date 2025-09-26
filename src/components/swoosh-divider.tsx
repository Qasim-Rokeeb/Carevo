import {cn} from '@/lib/utils';
import type {SVGProps} from 'react';

export const SwooshDivider = ({
  className,
  ...props
}: SVGProps<SVGSVGElement> & {top?: boolean; bottom?: boolean}) => {
  const {top, bottom, ...rest} = props;
  return (
    <div
      className={cn(
        'absolute inset-x-0 h-24 text-secondary/50 pointer-events-none',
        top ? '-top-1' : '',
        bottom ? '-bottom-1' : '',
        className
      )}
      style={{
        transform: bottom ? 'scaleY(-1)' : '',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path d="M0,0 Q50,100 100,0 L100,100 L0,100 Z" />
      </svg>
    </div>
  );
};
