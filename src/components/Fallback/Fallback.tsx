import React from 'react';

import { useStyles } from './styles';


export const Fallback: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} />
  );
};
