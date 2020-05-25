import React from 'react';

import { useMouseScroll } from 'hooks';

import { useStyles } from './styles';


interface ScrollContentProps {
  children: JSX.Element | JSX.Element[];
}

export const ScrollContent: React.FC<ScrollContentProps> = ({
  children,
}) => {
  const [containerRef, scrollY] = useMouseScroll<HTMLDivElement>();

  // TODO: Show custom scrollbar

  const classes = useStyles({
    showTopUnderline: scrollY > 0,
  });

  return (
    <div
      ref={containerRef}
      className={classes.container}
    >
      {children}
    </div>
  );
};
