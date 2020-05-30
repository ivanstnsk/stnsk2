import { createSelector } from 'reselect';

import { TState, TProjectsState } from 'types/store';
import { TProjectData } from 'types/data';


export const selectProjects = (state: TState): TProjectsState => state.projects;

export const selectCommercialProjects = createSelector<
  TState,
  TProjectsState,
  TProjectData[]>(
    selectProjects,
    (projects) => projects.commercial,
  );

export const selectPersonalProjects = createSelector<
  TState,
  TProjectsState,
  TProjectData[]>(
    selectProjects,
    (projects) => projects.personal,
  );
