import { combineReducers } from 'redux';

import { TState } from 'types/store';

import { projectsReducer } from './projects';


export const reducer = combineReducers<TState>({
  projects: projectsReducer,
});
