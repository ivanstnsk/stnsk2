import React from 'react';

import { useStyles } from './styles';


interface ContentHeaderProps {
  title: string;
  subTitle: string;
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
  title,
  subTitle,
}) => {
  const classes = useStyles();

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
