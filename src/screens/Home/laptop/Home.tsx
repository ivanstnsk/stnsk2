import React, { useState, useCallback } from 'react';

import { IntroCircle, GradientBackground, Footer } from 'components';

import { CircleButtonsLayout } from './components';
import { useStyles } from './styles';


interface HomeProps {
  onNavigateAbout: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigateAbout,
}) => {
  const classes = useStyles();
  const [showMode, setShowMode] = useState(true);

  const handleNavigate = useCallback(() => {
    setShowMode(false);
    setTimeout(() => {
      onNavigateAbout();
    }, 1200);
  }, [setShowMode, showMode]);

  return (
    <div className={classes.container}>
      <GradientBackground id="laptop-gradient-bg">
        <CircleButtonsLayout
          showMode={showMode}
          onButtonClick={handleNavigate}
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
