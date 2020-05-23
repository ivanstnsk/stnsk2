import React, {Suspense} from 'react';

import {Fallback} from 'components';
import {useModule} from 'hooks';


export const CVContainer: React.FC<{}> = () => {
  const module = useModule();
  const CVScreen = React.lazy(() => import(`./${module}`));

  return (
    <Suspense fallback={<Fallback />}>
      <CVScreen />
    </Suspense>
  );
};
