import React from 'react';

import { SvgIcon, Button } from 'components';
import { useMouseHover } from 'hooks';

import { TContactButtonTypes } from './types';
import { useStyles } from './styles';


interface SocialButtonProps {
  type: TContactButtonTypes;
  onClick?: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  type,
  onClick,
}) => {
  const [containerRef, hovered] = useMouseHover<HTMLDivElement>();
  const classes = useStyles({ hovered });
  const iconColor = hovered
    ? '#81AF65'
    : 'rgba(255,255,255,0.4)';

  return (
    <div
      ref={containerRef}
      className={classes.container}
      onClick={onClick}
    >
      <SvgIcon
        className={classes.icon}
        type={type}
        width={60}
        height={60}
        color={iconColor}
      />
      <Button
        className={classes.button}
        text="Open"
        width={110}
        onClick={onClick}
      />
    </div>
  );
};
