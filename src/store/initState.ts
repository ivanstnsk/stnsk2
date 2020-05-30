import { TState } from 'types/store';


export const initState: TState = {
  projects: {
    commercial: [
      {
        id: 'test1',
        title: 'Test 1',
        subTitle: 'Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.',
      },
      {
        id: 'test2',
        title: 'Test 2',
        subTitle: 'Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.',
      },
    ],
    personal: [
      {
        id: 'test3',
        title: 'Test 3',
        subTitle: 'Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.',
      },
      {
        id: 'test4',
        title: 'Test 4',
        subTitle: 'Dispatch a few data fetching actions to a store instance and wait for them to complete before rendering the app on the server.',
      },
    ],
  },
};
