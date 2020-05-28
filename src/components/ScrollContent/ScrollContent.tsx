import React, { useEffect } from 'react';

import { useMouseScroll } from 'hooks';

import { useStyles } from './styles';


interface ScrollContentProps {
  children: JSX.Element | JSX.Element[];
  onReachTop?: (reached: boolean) => void;
}

export const ScrollContent: React.FC<ScrollContentProps> = ({
  children,
  onReachTop,
}) => {
  const [containerRef, scrollY] = useMouseScroll<HTMLDivElement>();
  const reachedTop = scrollY < 40;

  // TODO: Show custom scrollbar

  const classes = useStyles({
    showTopUnderline: scrollY > 0,
  });

  useEffect(() => {
    if (onReachTop) {
      onReachTop(reachedTop);
    }
  }, [reachedTop]);

  return (
    <div
      ref={containerRef}
      className={classes.innerScroll}
    >
      {children}
    </div>
  );
};
