import React, { useState, useCallback, memo } from 'react';

import { SvgIcon } from 'components';

import { TMainSkillIconType } from './types';
import { useStyles } from './styles';


interface MainSkillIconProps {
  type: TMainSkillIconType;
  tooltip: string;
}

const MainSkillIconComp: React.FC<MainSkillIconProps> = ({
  type,
  tooltip,
}) => {
  const [active, setActive] = useState(false);
  const classes = useStyles({ active });
  const iconColor = active
    ? '#7FAB63'
    : 'rgba(255,255,255,0.4)';

  const getActiveHandler = useCallback((nextActive: boolean) => () => {
    setActive(nextActive);
  }, [setActive]);

  return (
    <div
      className={classes.container}

    >
      <div
        onMouseEnter={getActiveHandler(true)}
        onMouseLeave={getActiveHandler(false)}
      >
        <SvgIcon
          type={type}
          width={60}
          height={60}
          color={iconColor}
        />
      </div>
      <div className={classes.tooltip}>
        {tooltip}
      </div>
    </div>
  );
};

export const MainSkillIcon = memo(MainSkillIconComp);
