import React, { Suspense } from 'react';

import { Fallback } from 'components';
import { useModule } from 'hooks';

import { useState } from './redux';


export const ProjectsContainer: React.FC<{}> = () => {
  const { commercial, personal } = useState();

  const module = useModule();
  const ProjectsScreen = React.lazy(() => import(`./${module}`));

  return (
    <Suspense fallback={<Fallback />}>
      <ProjectsScreen
        commercial={commercial}
        personal={personal}
      />
    </Suspense>
  );
};
