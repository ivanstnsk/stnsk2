import React from 'react';

import { TContentSize } from 'types/sizes';

import { useStyles } from './styles';


interface ContentHeaderProps {
  title: string;
  subTitle: string;
  size?: TContentSize;
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
  title,
  subTitle,
  size = 'normal',
}) => {
  const classes = useStyles({ size });

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.subTitle}>
        {subTitle}
      </div>
    </div>
  );
};
