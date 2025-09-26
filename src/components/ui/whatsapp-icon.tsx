import type { SVGProps } from 'react';
import { cn } from '@/lib/utils';

export const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        className={cn("animate-pop-in", props.className)}
        {...props}
    >
        <defs>
            <linearGradient id="wa-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#25D366', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: '#128C7E', stopOpacity:1}} />
            </linearGradient>
            <filter id="wa-shadow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                <feOffset dx="1" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5"/>
                </feComponentTransfer>
                <feMerge> 
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/> 
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#wa-shadow)">
            <path 
                fill="url(#wa-grad)" 
                d="M19.6,4.4c-1.8-1.8-4.2-2.8-6.8-2.8c-5.3,0-9.6,4.3-9.6,9.6c0,1.7,0.4,3.3,1.3,4.8L3,21l5.4-1.4 c1.4,0.8,3,1.2,4.6,1.2h0c5.3,0,9.6-4.3,9.6-9.6C22.4,8.6,21.4,6.2,19.6,4.4z"
            />
            <path 
                fill="#FFF" 
                d="M16.9,14.5c-0.2-0.1-1.3-0.6-1.5-0.7c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.5,0.7-0.7,0.8 c-0.1,0.1-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5c0.1-0.1,0.2-0.3,0.4-0.4 c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.5-1.3-0.7-1.8c-0.2-0.5-0.4-0.4-0.5-0.4h-0.3 c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.7,0.7-0.7,1.6c0,1,0.7,1.9,0.8,2c0.1,0.1,1.4,2.1,3.3,2.9c0.5,0.2,0.8,0.3,1.1,0.4 c0.5,0.1,0.9,0.1,1.2,0.1c0.4-0.1,1.3-0.5,1.4-1c0.2-0.5,0.2-0.9,0.1-1C17.3,14.7,17.1,14.6,16.9,14.5z"
            />
        </g>
    </svg>
  );