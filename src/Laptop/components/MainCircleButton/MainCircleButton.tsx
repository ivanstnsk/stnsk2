import React from 'react';

import {useStyles} from './styles';


export const MainCircleButton: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      button
    </div>
  );
};
