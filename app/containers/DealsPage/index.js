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

import {
  makeSelectDeals,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import BodySpacing from 'components/BodySpacing';
import DealsList from 'components/DealsList';

import Img from './Img';
import dealsheader from './img/dealsheader.png';

export function DealsPage({ loading, error, deals }) {
  const allDeals = deals.filter(obj => obj.id.startsWith('D'));

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
        <DealsList {...dealsProps} />
      </BodySpacing>
    </div>
  );
}

DealsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  deals: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  deals: makeSelectDeals(),
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
