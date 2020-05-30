import { Reducer } from 'redux';

import { TProjectsState } from 'types/store';
import { TProjectsListData } from 'types/data';

import { ProjectsActions, TProjectsActionScheme } from './actions';


type TProjectsReducer = Reducer<TProjectsState, TProjectsActionScheme>;

const initState: TProjectsListData = {
  commercial: [],
  personal: [],
};

export const projectsReducer: TProjectsReducer = (
  state = initState,
  { type, payload },
) => {
  switch (type) {
    case ProjectsActions.SET_PROJECTS:
      return {
        ...state,
        ...(payload as TProjectsListData),
      };
    default:
      return state;
  }
};
