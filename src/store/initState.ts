import { TState } from 'types/store';


export const initState: TState = {
  projects: [
    {
      id: 'test1',
      type: 'commercial',
      title: 'Test 1',
      subTitle: 'Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.',
      tags: ['web', 'mobile', 'bot'],
    },
    {
      id: 'test2',
      type: 'commercial',
      title: 'Test 2',
      subTitle: 'Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.',
      tags: ['web', 'mobile', 'bot'],
    },
    {
      id: 'test3',
      type: 'personal',
      title: 'Test 3',
      subTitle: 'Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.',
      tags: ['web', 'mobile', 'bot'],
    },
    {
      id: 'test4',
      type: 'personal',
      title: 'Test 4',
      subTitle: 'Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.',
      tags: ['web', 'mobile', 'bot'],
    },
  ],
};
