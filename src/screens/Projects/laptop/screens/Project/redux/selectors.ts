import { createSelector, Selector } from 'reselect';

import { TState, TProjectsState } from 'types/store';
import { TProjectData } from 'types/data';


export const selectProjects = (state: TState): TProjectsState => state.projects;

type TCreatedSelector = Selector<TState, TProjectData | undefined>;

export const selectProject = (projectId: string): TCreatedSelector => createSelector<
  TState,
  TProjectsState,
  TProjectData | undefined
>(
  [selectProjects],
  (projects) => projects.find(({ id }) => id === projectId),
);
