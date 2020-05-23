import React, { Suspense } from 'react';

import { Fallback } from 'components';
import { useModule } from 'hooks';


export const AboutContainer: React.FC<{}> = () => {
  const module = useModule();
  const AboutScreen = React.lazy(() => import(`./${module}`));

  return (
    <Suspense fallback={<Fallback />}>
      <AboutScreen />
    </Suspense>
  );
};
