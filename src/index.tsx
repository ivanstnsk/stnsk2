import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

import { AppContainer } from 'AppContainer';
import { theme } from 'theme/theme';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
