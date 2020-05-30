import React, { memo } from 'react';

import { SvgIcon } from '../SvgIcon';

import { useStyles } from './styles';


interface CloseButtonProps {
  onClick?: () => void;
}

const CloseButtonComp: React.FC<CloseButtonProps> = ({
  onClick,
}) => {
  const classes = useStyles();

  return (
    <button
      className={classes.button}
      onClick={onClick}
    >
      <SvgIcon
        type="close"
        width={30}
        height={30}
        color="rgba(255,255,255,0.6)"
      />
    </button>
  );
};

export const CloseButton = memo(CloseButtonComp);
