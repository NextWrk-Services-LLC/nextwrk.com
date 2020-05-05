/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

import H1 from 'components/H1';
import BodySpacing from 'components/BodySpacing';

export default function NotFound() {
  return (
    <BodySpacing>
      <H1>Oops, Looks Like That Page Does Not Exist.</H1>
      <H1>Click the NextWrk Logo to Return to the Homepage.</H1>
    </BodySpacing>
  );
}
