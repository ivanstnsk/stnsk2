import React from 'react';
import {useModule} from 'hooks';
import {Mobile} from 'Mobile';
import {Tablet} from 'Tablet';
import {Laptop} from 'Laptop';


export const AppContainer: React.FC<{}> = () => {
  const module = useModule();

  switch (module) {
    case 'mobile':
      return <Mobile />;
    case 'tablet':
      return <Tablet />;
    case 'laptop':
      return <Laptop />;
    default:
      return <Laptop />;
  }
};
