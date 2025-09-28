'use client';

import {useState, useEffect, useCallback} from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export const useKonamiCode = () => {
  const [keys, setKeys] = useState<string[]>([]);
  const [isKonami, setIsKonami] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      setKeys(prevKeys => {
        const newKeys = [...prevKeys, e.key].slice(-KONAMI_CODE.length);

        if (JSON.stringify(newKeys) === JSON.stringify(KONAMI_CODE)) {
          setIsKonami(true);
          // Reset after a delay so it can be triggered again
          setTimeout(() => setIsKonami(false), 4000);
        }

        return newKeys;
      });
    },
    [setIsKonami]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return isKonami;
};
