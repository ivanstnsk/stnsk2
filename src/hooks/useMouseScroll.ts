import { useEffect, useState, useRef } from 'react';


type THook<T extends HTMLElement> = [
  React.RefObject<T>,
  number,
];

export const useMouseScroll = <T extends HTMLElement>(): THook<T> => {
  const [scrollY, setScrollY] = useState<number>(0);
  const ref = useRef<T>(null);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const handleScroll = (event: Event): void => {
      const { target } = event;
      setScrollY((target as T).scrollTop);
    };
    const node = ref && ref.current;

    if (node) {
      node.addEventListener('scroll', handleScroll);
      return () => {
        node.removeEventListener('scroll', handleScroll);
      };
    }
  }, [ref]);

  return [ref, scrollY];
};
