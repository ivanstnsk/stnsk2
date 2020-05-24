import React, { memo, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Routes } from 'types';
import { SvgIcon } from '../SvgIcon';

import { MenuButton } from './components';
import { useStyles } from './styles';


const isButtonActive = (url: string, path: string): boolean => {
  return !!url && url.includes(path);
};

const getActiveButtonPosition = (url: string): number => {
  if (isButtonActive(url, 'projects')) {
    return 0;
  }
  if (isButtonActive(url, 'about')) {
    return 1;
  }
  if (isButtonActive(url, 'cv')) {
    return 2;
  }
  if (isButtonActive(url, 'contacts')) {
    return 3;
  }
  return 0;
};

const MenuComp: React.FC<{}> = () => {
  const history = useHistory();
  const location = useLocation();
  const activeButtonPosition = getActiveButtonPosition(location.pathname);
  const classes = useStyles({ activeButtonPosition });

  const getNavigatorHandler = useCallback((route: Routes) => () => {
    history.push(route);
  }, [history]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <SvgIcon
          type="logo"
          color="rgba(255,255,255,0.6)"
          width={60}
          height={60}
        />
      </div>
      <div className={classes.buttons}>
        <div className={classes.buttonsInner}>
          <div className={classes.tick} />
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
      </div>
    </div>
  );
};

export const Menu = memo(MenuComp);
