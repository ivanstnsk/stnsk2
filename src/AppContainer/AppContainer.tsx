import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {Menu} from 'components';
import {
  Home,
  About,
  Projects,
} from 'screens';


export const AppContainer: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/">
          <Menu />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
};
