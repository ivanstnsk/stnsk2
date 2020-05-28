import React, { memo } from 'react';

import { SvgIcon } from 'components';

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
        width={40}
        height={40}
        color="rgba(255,255,255,0.6)"
      />
    </button>
  );
};

export const CloseButton = memo(CloseButtonComp);
