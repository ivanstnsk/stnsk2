import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {Routes} from 'types';
import {Menu} from 'components';
import {
  Home,
  About,
  Projects,
  Contacts,
  CV,
} from 'screens';


export const AppContainer: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME}>
          <Home />
        </Route>
        <Route path="/">
          <Menu />
          <Switch>
            <Route path={Routes.ABOUT}>
              <About />
            </Route>
            <Route path={Routes.PROJECTS}>
              <Projects />
            </Route>
            <Route path={Routes.CONTACTS}>
              <Contacts />
            </Route>
            <Route path={Routes.CV}>
              <CV />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
};
