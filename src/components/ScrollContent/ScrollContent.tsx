import React, { useCallback, useState } from 'react';

import { useMouseScroll } from 'hooks';

import { useStyles } from './styles';


interface ScrollContentProps {
  children: JSX.Element | JSX.Element[];
  onScroll?: (scrollY: number) => void;
}

export const ScrollContent: React.FC<ScrollContentProps> = ({
  children,
  onScroll,
}) => {
  const [showTopUnderline, setShowTopUnderline] = useState(false);

  const handleScrollY = useCallback((scrollY: number) => {
    setShowTopUnderline(scrollY > 0);

    if (onScroll) {
      onScroll(scrollY);
    }
  }, []);

  const [containerRef] = useMouseScroll<HTMLDivElement>(handleScrollY);

  // TODO: Show custom scrollbar

  const classes = useStyles({ showTopUnderline });

  return (
    <div
      ref={containerRef}
      className={classes.innerScroll}
    >
      {children}
    </div>
  );
};
