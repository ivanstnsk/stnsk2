import React, {useState, useEffect} from 'react';

import {IntroCircle, GradientBackground} from 'components';

import {CircleButtonsLayout} from './components';
import {useStyles} from './styles';


export const Laptop: React.FC<{}> = () => {
  const classes = useStyles();
  const [showMode, setShowMode] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMode(true), 500);
  }, []);

  return (
    <div className={classes.container}>
      <GradientBackground id="laptop-gradient-bg">
        <CircleButtonsLayout
          showMode={showMode}
          onButtonClick={(): void => {
            setShowMode(false);
          }}
        />
        <IntroCircle
          id="main-circle"
          showMode={showMode}
        />
      </GradientBackground>
    </div>
  );
};
