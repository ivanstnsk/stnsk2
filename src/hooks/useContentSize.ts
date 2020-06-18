import { useState, useCallback } from 'react';

import { TContentSize } from 'types/sizes';


type TScrollableRanges = number[][];
type THookProps = {
  normal?: TScrollableRanges;
  compact?: TScrollableRanges;
}

type THook = [
  TContentSize,
  (scrollY: number) => void
];

const getContentSize = (sizes: THookProps, scrollY: number): TContentSize => {
  if (!sizes) {
    return 'normal';
  }
  if (sizes.normal) {
    for (let i = 0; i < sizes.normal.length; i += 1) {
      const range = sizes.normal[i];
      if (scrollY >= range[0] && scrollY < range[1]) {
        return 'normal';
      }
    }
  }
  if (sizes.compact) {
    for (let i = 0; i < sizes.compact.length; i += 1) {
      const range = sizes.compact[i];
      if (scrollY >= range[0] && scrollY < range[1]) {
        return 'compact';
      }
    }
  }
  return 'normal';
};

export const useContentSize = (sizes: THookProps): THook => {
  const [size, setSize] = useState<TContentSize>('normal');

  const handleScrollY = useCallback((scrollY: number) => {
    const nextSize = getContentSize(sizes, scrollY);
    setSize(nextSize);
    // TODO Fix glitch on Projects screen
    // setSize('normal');
  }, [setSize, sizes]);

  return [
    size,
    handleScrollY,
  ];
};
