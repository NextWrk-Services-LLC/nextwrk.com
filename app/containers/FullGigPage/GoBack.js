import React from 'react';

import BackWrapper from './BackWrapper';
import A from './A';

export function GoBack() {
  return (
    <BackWrapper>
      <A href="/gigs">{'<< Go Back'}</A>
    </BackWrapper>
  );
}

export default GoBack;
