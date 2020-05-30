import { Reducer } from 'redux';

import { TProjectsState } from 'types/store';
import { TProjectsListData } from 'types/data';

import { ProjectsActions, TProjectsActionScheme } from './actions';


type TProjectsReducer = Reducer<TProjectsState, TProjectsActionScheme>;

const initState: TProjectsListData = [];

export const projectsReducer: TProjectsReducer = (
  state = initState,
  { type, payload },
) => {
  switch (type) {
    case ProjectsActions.SET_PROJECTS:
      return payload as TProjectsListData;
    default:
      return state;
  }
};
