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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectFeatured,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import BodySpacing from 'components/BodySpacing';
import H0 from 'components/H0';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Header from 'components/Header';
import CenterText from 'components/CenterText';
import GigsList from 'components/GigsList';

import A from './A';
import H0Wrapper from './H0Wrapper';
import ViewMoreWrapper from './ViewMoreWrapper';
import MobileBody from './MobileBody';
import Body from './Body';

export function HomePage({ loading, error, gigs }) {
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
        <H0Wrapper>
          <H0>
            Start Working How, When and Where <b>YOU</b> Want
          </H0>
        </H0Wrapper>
        <H1>Discover...</H1>
        {isMobile ? <MobileBody /> : <Body />}
        <CenterText>
          <H0>Featured Gigs</H0>
          <hr />
        </CenterText>
        <GigsList loading={loading} error={error} gigs={gigs} />
        <ViewMoreWrapper>
          <A href="/gigs">
            <H2>{'View More >>'}</H2>
          </A>
        </ViewMoreWrapper>
      </BodySpacing>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  gigs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  gigs: makeSelectFeatured(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
