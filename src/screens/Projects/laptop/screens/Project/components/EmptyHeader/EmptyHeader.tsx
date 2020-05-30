import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { CloseButton } from 'components';
import { Routes } from 'types';

import { useStyles } from './styles';


export const EmptyHeader: React.FC<{}> = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleCloseClick = useCallback(() => {
    history.push(Routes.PROJECTS);
  }, [history]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.rightContainer}>
        <CloseButton
          onClick={handleCloseClick}
        />
      </div>
    </div>
  );
};
