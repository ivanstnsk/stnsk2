import React from 'react';

import {useStyles} from './styles';


export const Menu: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      menu
    </div>
  );
};
