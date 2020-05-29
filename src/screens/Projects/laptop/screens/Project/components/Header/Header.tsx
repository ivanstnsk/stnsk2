import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Routes } from 'types';

import { CloseButton } from './components';
import { useStyles } from './styles';


export const Header: React.FC<{}> = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleCloseClick = useCallback(() => {
    history.push(Routes.PROJECTS);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div className={classes.photo} />
          <div className={classes.titleContainer}>
            <div className={classes.title}>
              Virtual Tours
          </div>
            <div className={classes.subTitle}>
              The marketplace for creating, celling and<br />
            purchasing virtual tours in the city (virtual guidance).<br />
            Includes mobile app and the website.
          </div>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <CloseButton
          onClick={handleCloseClick}
        />
      </div>
    </div>
  );
};
