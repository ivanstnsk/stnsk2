import React, { Suspense } from 'react';

import { Fallback } from 'components';
import { useModule } from 'hooks';


export const ProjectsContainer: React.FC<{}> = () => {
  const module = useModule();
  const ProjectsScreen = React.lazy(() => import(`./${module}`));

  return (
    <Suspense fallback={<Fallback />}>
      <ProjectsScreen />
    </Suspense>
  );
};
