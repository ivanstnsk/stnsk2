import React from 'react';

import { useStyles } from './styles';


type TMainButtonProps = {
  children: string;
  onClick?: () => void;
};

export const MainButton: React.FC<TMainButtonProps> = ({
  children,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <button
      className={classes.button}
      onClick={onClick}
    >
      <svg
        className={classes.svg}
        width="200"
        height="50"
        viewBox="0 0 200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeDasharray="0"
      >
        <rect x="1.25" y="1.25" width="197.5" height="47.5" rx="23.75" stroke="#81AF65" strokeWidth="2.5"/>
      </svg>

      {children}
    </button>
  );
};
