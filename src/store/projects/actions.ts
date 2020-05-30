import { Action } from 'redux';
import { TProjectsListData } from 'types/data';


export enum ProjectsActions {
  GET_PROJECTS = 'Projects/GET',
  SET_PROJECTS = 'Projects/SET',
}

export type TProjectsActionScheme = Action<ProjectsActions> & {
  type: ProjectsActions;
  payload?: TProjectsListData;
}

export const getProjects = (): TProjectsActionScheme => ({
  type: ProjectsActions.GET_PROJECTS,
});

export const setProjects = (data: TProjectsListData): TProjectsActionScheme => {
  return {
    type: ProjectsActions.SET_PROJECTS,
    payload: data,
  };
};
