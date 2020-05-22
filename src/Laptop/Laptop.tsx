import React, {useState, useCallback} from 'react';

import {IntroCircle, GradientBackground, Footer} from 'components';

import {CircleButtonsLayout} from './components';
import {useStyles} from './styles';


export const Laptop: React.FC<{}> = () => {
  const classes = useStyles();
  const [showMode, setShowMode] = useState(true);

  const handleHide = useCallback(() => {
    setShowMode(false);
  }, [setShowMode, showMode]);

  return (
    <div className={classes.container}>
      <GradientBackground id="laptop-gradient-bg">
        <CircleButtonsLayout
          showMode={showMode}
          onButtonClick={handleHide}
        />
        <IntroCircle
          id="main-circle"
          showMode={showMode}
        />
      </GradientBackground>
      <Footer />
    </div>
  );
};
