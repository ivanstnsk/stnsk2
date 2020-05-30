import { combineReducers } from 'redux';

import { TState } from 'types/store';

import { projectsReducer } from 'screens/Projects/redux';


export const reducer = combineReducers<TState>({
  projects: projectsReducer,
});
