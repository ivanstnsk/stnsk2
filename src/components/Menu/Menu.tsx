import React, { memo, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Routes } from 'types';

import { MenuButton } from './components';
import { useStyles } from './styles';


const isButtonActive = (url: string, path: string): boolean => {
  return !!url && url.includes(path);
};

const MenuComp: React.FC<{}> = () => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  const getNavigatorHandler = useCallback((route: Routes) => () => {
    history.push(route);
  }, [history]);

  return (
    <div className={classes.container}>
      <MenuButton
        type="projects"
        onClick={getNavigatorHandler(Routes.PROJECTS)}
        active={isButtonActive(location.pathname, 'projects')}
      />
      <MenuButton
        type="about"
        onClick={getNavigatorHandler(Routes.ABOUT)}
        active={isButtonActive(location.pathname, 'about')}
      />
      <MenuButton
        type="cv"
        onClick={getNavigatorHandler(Routes.CV)}
        active={isButtonActive(location.pathname, 'cv')}
      />
      <MenuButton
        type="contacts"
        onClick={getNavigatorHandler(Routes.CONTACTS)}
        active={isButtonActive(location.pathname, 'contacts')}
      />
    </div>
  );
};

export const Menu = memo(MenuComp);
