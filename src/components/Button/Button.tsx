import React, { forwardRef } from 'react';

import { combineClasses } from 'utils/styles';

import { useStyles } from './styles';


interface ButtonProps {
  text: string | number;
  width: number;
  className?: string;
  onClick?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  text,
  width = 200,
  className,
  onClick,
}, ref) => {
  const classes = useStyles({ width });

  return (
    <button
      ref={ref}
      className={combineClasses(classes.button, className)}
      onClick={onClick}
    >
      <svg
        className={classes.svg}
        width={width}
        height={37}
        viewBox={`0 0 ${width} 37`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeDasharray="0"
      >
        <rect x="2" y="2" width={width - 4} height={33} rx="19" stroke="#81AF65" strokeWidth="2" />
      </svg>
      {text}
    </button>
  );
});
