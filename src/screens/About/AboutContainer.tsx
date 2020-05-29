import React, { Suspense, memo } from 'react';

import { useModule } from 'hooks';
import { Fallback } from 'components';


const AboutContainerComp: React.FC<{}> = () => {
  const module = useModule();
  const AboutScreen = React.lazy(() => import(`./${module}`));

  return (
    <Suspense fallback={<Fallback />}>
      <AboutScreen />
    </Suspense>
  );
};

export const AboutContainer = memo(AboutContainerComp);
