import React, { memo, useCallback } from 'react';

import { SvgIcon } from '../../../SvgIcon';

import { useStyles } from './styles';
import { TButtonType } from './types';


interface MenuButtonProps {
  innerRef?: React.RefObject<HTMLButtonElement>;
  type: TButtonType;
  active?: boolean;
  onClick?: (id: string) => void;
}

const MenuButtonComp: React.FC<MenuButtonProps> = ({
  innerRef,
  type,
  active = false,
  onClick,
}) => {
  const classes = useStyles({ type, active });
  const iconColor = active
    ? '#81AF65'
    : 'rgba(255,255,255,0.6)';

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(type);
    }
  }, [onClick]);

  return (
    <button
      className={classes.button}
      onClick={handleClick}
      ref={innerRef}
    >
      <SvgIcon
        type={type}
        color={iconColor}
        width={30}
        height={30}
      />
    </button>
  );
};

export const MenuButton = memo(MenuButtonComp);
