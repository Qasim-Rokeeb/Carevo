'use client';

import {useEffect} from 'react';

export const RippleEffect = () => {
  useEffect(() => {
    const createRipple = (event: MouseEvent) => {
      const ripple = document.createElement('span');
      const diameter = Math.max(window.innerWidth, window.innerHeight) / 15;
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${event.clientX - radius}px`;
      ripple.style.top = `${event.clientY - radius}px`;
      ripple.classList.add('ripple');

      document.body.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    document.addEventListener('mousedown', createRipple);

    return () => {
      document.removeEventListener('mousedown', createRipple);
    };
  }, []);

  return null;
};
