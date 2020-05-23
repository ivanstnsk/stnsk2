import React, {memo, useCallback} from 'react';

import {useStyles} from './styles';
import {TButtonType} from './types';


interface MenuButtonProps {
  innerRef?: React.RefObject<HTMLButtonElement>;
  type: TButtonType;
  onClick?: (id: string) => void;
}

const MenuButtonComp: React.FC<MenuButtonProps> = ({
  innerRef,
  type,
  onClick,
}) => {
  const classes = useStyles({type});

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(type);
    }
  }, []);

  return (
    <button
      className={classes.button}
      onClick={handleClick}
      ref={innerRef}
    >
      <div className={classes.icon} />
    </button>
  );
};

export const MenuButton = memo(MenuButtonComp);
