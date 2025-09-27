import {cn} from '@/lib/utils';
import type {SVGProps} from 'react';

export const SwooshDivider = ({
  className,
  ...props
}: SVGProps<SVGSVGElement> & {top?: boolean; bottom?: boolean}) => {
  const {top, bottom, ...rest} = props;
  const patternId = 'plus-pattern-divider';
  return (
    <div
      className={cn(
        'absolute inset-x-0 h-24 pointer-events-none',
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
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <defs>
          <pattern
            id={patternId}
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <path
              d="M10 0 V20 M0 10 H20"
              stroke="hsl(var(--foreground))"
              strokeWidth="1.5"
              opacity="0.05"
            />
          </pattern>
        </defs>
        <path
          d="M0,0 Q50,100 100,0 L100,100 L0,100 Z"
          fill="hsl(var(--secondary))"
        />
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};
