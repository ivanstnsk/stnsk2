import React, { useState, useCallback } from 'react';

import { SvgIcon } from 'components';

import { TContactButtonTypes } from './types';
import { useStyles } from './styles';


interface ContactButtonProps {
  type: TContactButtonTypes;
  text: string;
  onClick?: () => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  type,
  text,
  onClick,
}) => {
  const [active, setActive] = useState(false);
  const classes = useStyles();
  const iconColor = active
    ? '#81AF65'
    : 'rgba(255,255,255,0.4)';

  const getActiveHandler = useCallback((nextActive: boolean) => () => {
    setActive(nextActive);
  }, [setActive]);

  return (
    <button
      className={classes.button}
      onClick={onClick}
      onMouseEnter={getActiveHandler(true)}
      onMouseLeave={getActiveHandler(false)}
    >
      <SvgIcon
        type={type}
        width={60}
        height={60}
        color={iconColor}
      />
      <span className={classes.text}>
        {text}
      </span>
    </button>
  );
};
