import React, { Suspense } from 'react';

import { Fallback } from 'components';
import { useModule } from 'hooks';


export const ContactsContainer: React.FC<{}> = () => {
  const module = useModule();
  const ContactsScreen = React.lazy(() => import(`./${module}`));

  return (
    <Suspense fallback={<Fallback />}>
      <ContactsScreen />
    </Suspense>
  );
};
