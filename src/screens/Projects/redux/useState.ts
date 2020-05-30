import { useSelector } from 'react-redux';

import { TProjectData } from 'types/data';

import {
  selectCommercialProjects,
  selectPersonalProjects,
} from './selectors';


type TData = {
  commercial: TProjectData[];
  personal: TProjectData[];
}

export const useState = (): TData => ({
  commercial: useSelector(selectCommercialProjects),
  personal: useSelector(selectPersonalProjects),
});
