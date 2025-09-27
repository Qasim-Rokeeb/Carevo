import type {ImageProps} from 'next/image';
import Image from 'next/image';
import {cn, shimmer} from '@/lib/utils';

export const ImageWithLoader = ({className, ...props}: ImageProps) => {
  return (
    <Image
      className={cn(
        'transition-[scale,filter] duration-700',
        'group-hover:scale-105',
        className
      )}
      placeholder="blur"
      blurDataURL={shimmer(
        props.width ? +props.width : 1,
        props.height ? +props.height : 1
      )}
      {...props}
    />
  );
};

    