import React from 'react';

import { SvgIcon } from 'components';
import { TSvgIconType } from 'types/icons';

import { useStyles } from './styles';


interface CardTextProps {
  iconType: TSvgIconType;
  title: string;
  lines?: string[];
  ContentComponent?: JSX.Element;
}

export const CardText: React.FC<CardTextProps> = ({
  iconType,
  title,
  lines,
  ContentComponent,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SvgIcon
        type={iconType}
        width={100}
        height={100}
        color="rgba(255,255,255,0.15)"
      />
      <div className={classes.title}>{title}</div>
      <div className={classes.text}>
        {lines && lines.length > 0 ? lines.map((line) => (
          <div key={line}>{line}</div>
        )) : null}
      </div>
      {ContentComponent}
    </div>
  );
};
