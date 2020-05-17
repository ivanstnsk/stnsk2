import React from 'react';

import {IntroCircle} from 'components';

import {useStyles} from './styles';

export const Laptop: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <IntroCircle />
    </div>
  );
};
