import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from './reducer';
import { initState } from './initState';


export const store = createStore(
  reducer,
  initState,
  composeWithDevTools(),
);
