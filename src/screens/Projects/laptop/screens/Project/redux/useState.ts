import { useSelector } from 'react-redux';

import { TProjectData } from 'types/data';

import { selectProject } from './selectors';


type TData = {
  data: TProjectData | undefined;
}

export const useState = (projectId: string): TData => {
  const data = useSelector(selectProject(projectId));

  return {
    data,
  };
};
