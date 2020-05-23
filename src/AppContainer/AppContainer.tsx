import React from 'react';
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
} from 'screens';

import { useStyles } from './styles';


const routes = [
  { path: Routes.ABOUT, Component: About },
  { path: Routes.PROJECTS, Component: Projects },
  { path: Routes.CONTACTS, Component: Contacts },
  { path: Routes.CV, Component: CV },
];

export const AppContainer: React.FC<{}> = () => {
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
          {/* <Switch>
            <Route path={Routes.ABOUT}>
              <About transitionState="entered" />
            </Route>
            <Route path={Routes.PROJECTS}>
              <Projects transitionState="entered" />
            </Route>
            <Route path={Routes.CONTACTS}>
              <Contacts transitionState="entered" />
            </Route>
            <Route path={Routes.CV}>
              <CV transitionState="entered" />
            </Route>
          </Switch> */}
        </Route>
      </Switch>
    </Router>
  );
};
