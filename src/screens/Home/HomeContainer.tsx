import React, { Suspense, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Fallback } from 'components';
import { useModule } from 'hooks';


export const HomeContainer: React.FC<{}> = () => {
  const module = useModule();
  const history = useHistory();
  const Home = React.lazy(() => import(`./${module}`));

  const handleNavigateAbout = useCallback(() => {
    history.push('/about');
  }, [history]);

  return (
    <Suspense fallback={<Fallback />}>
      <Home
        onNavigateAbout={handleNavigateAbout}
      />
    </Suspense>
  );
};
