import React from 'react';

import {useStyles} from './styles';

export const Laptop: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>Laptop</div>
  );
};
