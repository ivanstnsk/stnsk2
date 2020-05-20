import React, {memo, useCallback} from 'react';

import {LAPTOP_MAIN_CIRCLE_BUTTON_SIZE} from 'constants/sizes';

import {useStyles} from './styles';
import {TButtonType} from './types';


type TMainCircleButton = {
  innerRef?: React.RefObject<HTMLButtonElement>;
  type: TButtonType;
  label: string;
  onClick?: (id: string) => void;
};

const MainCircleButtonComp: React.FC<TMainCircleButton> = ({
  innerRef,
  type,
  label,
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
      <svg
        className={classes.svg}
        width={LAPTOP_MAIN_CIRCLE_BUTTON_SIZE}
        height={LAPTOP_MAIN_CIRCLE_BUTTON_SIZE}
        viewBox={`0 0 ${LAPTOP_MAIN_CIRCLE_BUTTON_SIZE} ${LAPTOP_MAIN_CIRCLE_BUTTON_SIZE}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeDasharray="0"
      >
        <circle
          cx={LAPTOP_MAIN_CIRCLE_BUTTON_SIZE / 2}
          cy={LAPTOP_MAIN_CIRCLE_BUTTON_SIZE / 2}
          r={LAPTOP_MAIN_CIRCLE_BUTTON_SIZE / 2 - 2}
          stroke="#81AF65"
          strokeWidth="0"
        />
      </svg>
      <div className={classes.icon} />
      <div className={classes.label}>
        {label}
      </div>
    </button>
  );
};

export const MainCircleButton = memo(MainCircleButtonComp);
