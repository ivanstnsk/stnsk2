import { TState } from 'types/store';


export const initState: TState = {
  projects: [
    {
      id: 'UN1',
      type: 'commercial',
      iconName: 'ticket-saling',
      title: 'ID authentication App',
      subTitle: 'The mobile app for user ID authentication provided to be used by government & business.',
      tags: ['mobile'],
      team: [
        ['PM', '1'],
        ['DEV', '6'],
        ['QA', '2'],
      ],
      dates: {
        from: ['2018', 'August'],
        to: ['2018', 'November'],
      },
      technologies: [
        'react-native, react, redux, redux-saga, prop-types, styled-components, react-navigation, react-fbsdk, react-native-google-login, react-native-twitter-signin, push notifications, react-native-linkedIn-sdk',
      ],
      workResults: [
        '- Refactored the existing mobile app code',
        '- Updated the mobile app navigation',
        '- Participated in meetings related to features & security',
        '- Estimated new features',
      ],
      achievements: [
        '- Was working as a key developer on the project',
        '- Prepared a demo for the client in a first working week',
      ],
    },
    {
      id: 'UN2',
      type: 'commercial',
      iconName: 'ticket-saling',
      title: 'Medical marketplace',
      subTitle: 'The marketplace for purchasing medical drugs. Mobile app on the React Native framework.',
      tags: ['mobile'],
      team: [
        ['PM', '1'],
        ['DEV', '6'],
        ['QA', '2'],
      ],
      dates: {
        from: ['2018', 'October'],
        to: ['2018', 'November'],
      },
      technologies: [
        'react-native, react, redux, redux-saga, styled-components, react-navigation, react-fbsdk, react-native-google-login, react-native-twitter-signin, react-native-video, react-native-maps, push notifications, react-native-linkedIn-sdk, ios in app purchase',
      ],
      workResults: [
        '- Created the mobile app architecture',
        '- Reviwed the work of the other React Native developers',
        '- Created iOS and Android dev & production builds',
        '- Estimated new features',
      ],
      achievements: [
        '- Produced the main part of the mobile app code',
        '- Configured Apple AppStore & Testflight and Google Play Market',
      ],
    },
    {
      id: 'UN3',
      type: 'commercial',
      iconName: 'ticket-saling',
      title: 'Web admin panel',
      subTitle: 'Admin panel for Ukrainian government service.',
      tags: ['web'],
      team: [
        ['PM', '1'],
        ['DEV', '6'],
        ['QA', '2'],
      ],
      dates: {
        from: ['2019', 'April'],
        to: ['2019', 'June'],
      },
      technologies: [
        'create-react-app, yeoman, chrome dev tools, vs code, git, gitlab, swagger, postman, webpack, eslint, prettier',
      ],
      workResults: [
        '- Created the admin panel architecture',
        '- Participated in discussing new features',
        '- Reviwed the work of the other React developers',
      ],
      achievements: [
        '- Learned the Material UI framework',
      ],
    },
    {
      id: 'UN4',
      type: 'commercial',
      iconName: 'ticket-saling',
      title: 'Virtual tours marketplace',
      subTitle: 'The marketplace for creating, celling and purchasing virtual tours in the city (virtual guidance).',
      tags: ['mobile', 'web'],
      team: [
        ['PM', '1'],
        ['DEV', '6'],
        ['QA', '2'],
      ],
      dates: {
        from: ['2018', 'October'],
        to: ['2019', 'July'],
      },
      technologies: [
        'react native cli, android cli, android emulator, ios simulator, android studio, xcode, vs code,react native debugger, figma, babel, eslint, prettier, webpack, create-react-app, yarn, docker, git, gitlab',
      ],
      workResults: [
        '- Created the mobile app architecture',
        '- Reviwed the work of the other React Native developers',
        '- Created iOS and Android dev & production builds',
        '- Configured Apple AppStore & Testflight and Google Play Market',
      ],
      achievements: [
        '- Produced the main part of the mobile app code',
        '- Published the app to AppStore & Google Play Market',
      ],
    },
    {
      id: 'UN5',
      type: 'commercial',
      iconName: 'ticket-saling',
      title: 'Company internal services',
      subTitle: 'The mobile app for directly access for all internal services in the company',
      tags: ['mobile', 'web'],
      team: [
        ['DEV', '2'],
        ['QA', '1'],
      ],
      dates: {
        from: ['2019', 'July'],
        to: ['2019', 'September'],
      },
      technologies: [
        'react native cli, android cli, android emulator, ios simulator, android studio, xcode, vs code, react native debugger, figma, babel, eslint, prettier, lerna, webpack, create-react-app, yarn, yarn workspaces, git, github',
      ],
      workResults: [
        '- Worked directly with the customer (via slack)',
        '- Created all visible interface (both mobile and web)',
        '- Created the project architecture',
        '- Configured Firebase login/ analytics/ database services',
        '- Provided iOS & Android builds via Expo',
      ],
      achievements: [
        '- Configured the project as monorepository using Yarn workspaces & Lerna',
        '- Published the app to AppStore & Google Play Market',
      ],
    },
    {
      id: 'UN6',
      type: 'commercial',
      iconName: 'ticket-saling',
      title: 'Mobile banking app',
      subTitle: 'The mobile banking app',
      tags: ['mobile'],
      team: [
        ['DEV', '40 - 80'],
        ['QA', '15 - 30'],
      ],
      dates: {
        from: ['2019', 'November'],
        to: ['2019', 'December'],
      },
      technologies: [
        'react native cli, android cli, android emulator, ios simulator, android studio, xcode, vs code, react native debugger, figma, zeplin, azure, babel, eslint, prettier, husky, lerna, jest, enzyme, mockdate, postinstall, react-native-mock-render, events, git, bitbucket',
      ],
      workResults: [
        '- Worked on bug fixing and optimizations;',
        '- Covered new features with tests',
        '- Reviewed Pull Request of other developers',
        '- Participated in discussing new sprints',
        '- Closely worked with outstaff QA team',
      ],
      achievements: [
        '- Business trip to UAE',
      ],
    },
    {
      id: 'UN7',
      type: 'commercial',
      iconName: 'ticket-saling',
      title: 'Sport fan app',
      subTitle: 'The mobile application for sport clubs fans',
      tags: ['mobile'],
      team: [
        ['DEV', '10'],
        ['QA', '3'],
        ['PM', '1'],
        ['BA', '1'],
        ['UI/UX', '2'],
      ],
      dates: {
        from: ['2019', 'September'],
        to: ['2020', 'January'],
      },
      technologies: [
        'react-native cli, android cli, babel, eslint, prettier, jest, vs code, android studio, xcode, android emulator, ios simulator, figma, jira, confluence, swagger, postman, git, bitbucket',
      ],
      workResults: [
        '- Produced around 80% of the mobile app code',
        '- Created the main project configuration',
        '- Implemented the app native navigation',
        '- Configured redux store and async-storage',
        '- Created UI elements (components) of the interface',
        '- Implemented chat module in the app using Socket.IO library',
        '- Provided a new App build (android / iOS) for each work scope',
        '- Reviewed Pull Request of other developers',
        '- Participated in the project discussions',
      ],
      achievements: [
        '- Created OpenAPI documentation (using Swagger) for existing and planned API endpoints',
      ],
    },
  ],
};
