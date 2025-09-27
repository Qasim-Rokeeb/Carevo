'use client';

import * as React from 'react';
import {Signal, SignalLow} from 'lucide-react';

import {Button} from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {useReducedData} from '@/contexts/reduced-data-provider';

export function ReducedDataToggle() {
  const {isReducedData, setIsReducedData} = useReducedData();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11"
            onClick={() => setIsReducedData(!isReducedData)}
            aria-label={
              isReducedData ? 'Disable reduced data mode' : 'Enable reduced data mode'
            }
          >
            {isReducedData ? (
              <SignalLow className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Signal className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isReducedData ? 'Disable' : 'Enable'} Reduced Data Mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
