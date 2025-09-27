import type {ImageProps} from 'next/image';
import Image from 'next/image';
import {cn, shimmer} from '@/lib/utils';
import {useReducedData} from '@/contexts/reduced-data-provider';

export const ImageWithLoader = ({className, src, ...props}: ImageProps) => {
  const {isReducedData} = useReducedData();

  let finalSrc = src;
  if (typeof src === 'string' && src.includes('picsum.photos')) {
    const url = new URL(src);
    if (isReducedData) {
      url.searchParams.set('grayscale', '');
      url.searchParams.set('blur', '2');
    }
    finalSrc = url.toString();
  }

  return (
    <Image
      src={finalSrc}
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
