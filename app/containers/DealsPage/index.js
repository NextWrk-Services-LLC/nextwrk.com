/**
 *
 * DealsPage
 *
 * Deals Page of NextWrk.com, displays and lets users search through deals for making more money working gig jobs
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  makeSelectGigs,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import BodySpacing from 'components/BodySpacing';

import makeSelectDealsPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import AllDeals from './AllDeals';
import Img from './Img';

import dealsheader from './dealsheader.png';

const key = 'dealsPage';

export function DealsPage({ loading, error, gigs }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const allDeals = gigs.filter(obj => obj.id.startsWith('D'));

  const dealsProps = {
    loading,
    error,
    gigs: allDeals,
  };

  return (
    <div>
      <Helmet>
        <title>Discover New Products</title>
        <meta
          name="description"
          content="Maximize your returns! NextWrk's Deals Page connects users looking for new services with services looking for new users!"
        />
      </Helmet>
      <Img src={dealsheader} alt="Deals Page Header" />
      <BodySpacing>
        <AllDeals deals={dealsProps} />
      </BodySpacing>
    </div>
  );
}

DealsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  gigs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  dealsPage: makeSelectDealsPage(),
  gigs: makeSelectGigs(),
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
)(DealsPage);
