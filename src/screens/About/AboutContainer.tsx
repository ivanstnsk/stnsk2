import React, { Suspense } from 'react';

import { useModule } from 'hooks';
import { Fallback } from 'components';


export const AboutContainer: React.FC<{}> = () => {
  const module = useModule();
  const AboutScreen = React.lazy(() => import(`./${module}`));

  return (
    <Suspense fallback={<Fallback />}>
      <AboutScreen />
    </Suspense>
  );
};
