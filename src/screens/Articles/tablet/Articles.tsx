import React from 'react';

import { useStyles } from './styles';


export const Articles: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>Articles / Tablet</div>
      <div className={classes.text}>This screen resolution is not implemented yet.</div>
    </div>
  );
};
