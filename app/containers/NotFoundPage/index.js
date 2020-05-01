/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

import Header from 'components/Header';
import H1 from 'components/H1';
import BodySpacing from 'components/BodySpacing';

export default function NotFound() {
  return (
    <div>
      <Header />
      <BodySpacing>
        <H1>Oops, looks like that page does not exist.</H1>
        <H1>Click the NextWrk logo to return to the homepage.</H1>
      </BodySpacing>
    </div>
  );
}
