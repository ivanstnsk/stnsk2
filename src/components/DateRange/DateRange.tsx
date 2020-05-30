import React from 'react';

import { SvgIcon } from 'components';

import { useStyles } from './styles';


type DateRangeProps = {
  from: [string, string];
  to: [string, string];
}

export const DateRange: React.FC<DateRangeProps> = ({
  from,
  to,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.cell}>
        <div className={classes.cellTitle}>{from[0]}</div>
        <div className={classes.cellText}>{from[1]}</div>
      </div>
      <SvgIcon
        className={classes.icon}
        type="direction-arrow"
        width={40}
        height={27}
        color="rgba(255,255,255,0.4)"
      />
      <div className={classes.cell}>
        <div className={classes.cellTitle}>{to[0]}</div>
        <div className={classes.cellText}>{to[1]}</div>
      </div>
    </div>
  );
};
