import {useState, useEffect} from 'react';

/**
 * A hook that returns `true` once the component has been mounted on the client.
 *
 * This is useful for avoiding hydration mismatches when you need to render
 * different content on the server and the client.
 *
 * @returns `true` if the component is mounted on the client, otherwise `false`.
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
