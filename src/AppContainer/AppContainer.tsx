import React, { memo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Transition } from 'react-transition-group';

import { Routes } from 'types';
import { Menu, TransitionScreenWrapper } from 'components';
import {
  Home,
  About,
  Projects,
  Contacts,
  CV,
  Articles,
} from 'screens';

import { useStyles } from './styles';


const routes = [
  { path: Routes.ABOUT, Component: About },
  { path: Routes.PROJECTS, Component: Projects },
  { path: Routes.CONTACTS, Component: Contacts },
  { path: Routes.CV, Component: CV },
  { path: Routes.ARTICLES, Component: Articles },
];

const AppContainerComp: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME}>
          <Home />
        </Route>
        <Route path="/">
          <Menu />
          <div className={classes.page}>
            {routes.map(({ path, Component }) => (
              <Route
                key={path}
                exact
                path={path}
              >
                {({ match }) => (
                  <Transition
                    in={match != null}
                    timeout={600}
                    unmountOnExit
                  >
                    {(state) => {
                      return (
                        <TransitionScreenWrapper transitionState={state}>
                          <Component />
                        </TransitionScreenWrapper>
                      );
                    }}
                  </Transition>
                )}
              </Route>
            ))}
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export const AppContainer = memo(AppContainerComp, () => true);
