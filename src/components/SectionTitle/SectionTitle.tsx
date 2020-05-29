import React from 'react';

import { useStyles } from './styles';


interface SectionTitleProps {
  children: string | number;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.title}>
      {children}
    </div>
  );
};
