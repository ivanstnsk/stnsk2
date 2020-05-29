import React, { Suspense } from 'react';

import { Fallback } from 'components';
import { useModule } from 'hooks';


export const ArticlesContainer: React.FC<{}> = () => {
  const module = useModule();
  const ArticlesScreen = React.lazy(() => import(`./${module}`));

  return (
    <Suspense fallback={<Fallback />}>
      <ArticlesScreen />
    </Suspense>
  );
};
