/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';

import H1 from 'components/H1';

export default function NotFound() {
  return (
    <div style={{ padding: '0px 5px' }}>
      <H1>Oops, looks like that page does not exist.</H1>
      <H1>Click the NextWrk logo to return to the homepage.</H1>
    </div>
  );
}
