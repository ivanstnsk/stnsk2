import { combineReducers } from 'redux';

import { TStore } from 'types/store';

import { projectsReducer } from './projects';


export const reducer = combineReducers<TStore>({
  projects: projectsReducer,
});
