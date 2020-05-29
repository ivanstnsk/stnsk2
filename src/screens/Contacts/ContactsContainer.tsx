import React, { Suspense } from 'react';

import { useModule } from 'hooks';
import { Fallback } from 'components';


export const ContactsContainer: React.FC<{}> = () => {
  const module = useModule();
  const ContactsScreen = React.lazy(() => import(`./${module}`));

  return (
    <Suspense fallback={<Fallback />}>
      <ContactsScreen />
    </Suspense>
  );
};
