import React, {Suspense} from 'react';
import LoadingIndicator from '../core/Components/LoadingIndicator/LoadingIndicator';

const withSuspenseFallback = (Component: React.ComponentType<any>) => {
  return () => (
    <Suspense fallback={<LoadingIndicator />}>
      <Component />
    </Suspense>
  );
};

export default withSuspenseFallback;
