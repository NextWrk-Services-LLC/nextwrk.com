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

import CenterText from 'components/CenterText';
import BodySpacing from 'components/BodySpacing';
import H1 from 'components/H1';
import Header from 'components/Header';

import A from './A';
import MobileBody from './MobileBody';
import Body from './Body';

export function HomePage() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <article>
      <Helmet>
        <title>Featured Gigs</title>
        <meta
          name="description"
          content="NextWrk's Featured Gigs and Services. Discover the best gigs for developing extra streams of income, and the best services for maximizing your returns!"
        />
      </Helmet>
      <Header />
      <BodySpacing>
        <H1>Discover...</H1>
        {isMobile ? <MobileBody /> : <Body />}
        <CenterText>
          <A href="/gigs">
            <H1>Find Your Next Gig Today!</H1>
          </A>
        </CenterText>
      </BodySpacing>
    </article>
  );
}

export default compose(memo)(HomePage);
