import React from 'react';

import {IntroCircle, GradientBackground} from 'components';

import {useStyles} from './styles';


export const Laptop: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GradientBackground id="laptop-gradient-bg">
        <IntroCircle id="main-circle" />
      </GradientBackground>
    </div>
  );
};
