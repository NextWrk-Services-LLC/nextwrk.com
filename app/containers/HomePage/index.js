/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * HomePage.js
 *
 * Homepage of NextWrk.com, displays all featured gigs, services, deals and freelance networks
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import { compose } from 'redux';

import BodySpacing from 'components/BodySpacing';
import H1 from 'components/H1';
import Header from 'components/Header';
import CenterText from 'components/CenterText';

import A from './A';
import MobileBody from './MobileBody';
import Body from './Body';

export function HomePage() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <article>
      <Helmet>
        <title>HomePage</title>
        <meta
          name="description"
          content="NextWrk. Discover the best gigs for developing extra streams of income, and the best services for maximizing your returns!"
        />
      </Helmet>
      <Header />
      <BodySpacing>
        <CenterText>
          <H1>
            Start Working How, When and Where{' '}
            <b>
              {' '}
              <u>YOU</u>
            </b>{' '}
            Want!
          </H1>
        </CenterText>
        <H1>Discover...</H1>
        {isMobile ? <MobileBody /> : <Body />}
        <div style={{ textAlign: 'center', margin: '50px' }}>
          <A href="/gigs">
            <H1>Find Your Next Gig Today!</H1>
          </A>
        </div>
      </BodySpacing>
    </article>
  );
}

export default compose(memo)(HomePage);
