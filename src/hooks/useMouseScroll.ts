import { useEffect, useRef } from 'react';


type THook<T extends HTMLElement> = [ React.RefObject<T> ];

type TScrollHandler = (scrollY: number) => void;


export const useMouseScroll = <T extends HTMLElement>(onScroll?: TScrollHandler): THook<T> => {
  const ref = useRef<T>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const handleScroll = (event: Event): void => {
      if (onScroll) {
        const { target } = event;
        onScroll((target as T).scrollTop);
      }
    };
    const node = ref && ref.current;

    if (node) {
      node.addEventListener('scroll', handleScroll);
      return () => {
        node.removeEventListener('scroll', handleScroll);
      };
    }
  }, [ref]);

  return [ref];
};
