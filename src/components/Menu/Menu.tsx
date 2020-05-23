import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import {Routes} from 'types';

import {MenuButton} from './components';
import {useStyles} from './styles';


export const Menu: React.FC<{}> = () => {
  const history = useHistory();
  const classes = useStyles();

  const getNavigatorHandler = useCallback((route: Routes) => () => {
    history.push(route);
  }, [history]);

  return (
    <div className={classes.container}>
      <MenuButton
        type="projects"
        onClick={getNavigatorHandler(Routes.PROJECTS)}
      />
      <MenuButton
        type="skills"
        onClick={getNavigatorHandler(Routes.ABOUT)}
      />
      <MenuButton
        type="cv"
        onClick={getNavigatorHandler(Routes.CV)}
      />
      <MenuButton
        type="contacts"
        onClick={getNavigatorHandler(Routes.CONTACTS)}
      />
    </div>
  );
};
