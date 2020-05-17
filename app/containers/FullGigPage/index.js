/* eslint-disable func-names */
/**
 *
 * FullGigPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import ServicesList from 'components/ServicesList';
import GigsList from 'components/GigsList';
import {
  makeSelectPathname,
  makeSelectGigs,
  makeSelectServices,
  makeSelectError,
  makeSelectLoading,
} from '../App/selectors';

import Inner from './Inner';
import BodyWrapper from './BodyWrapper';

import GoBack from './GoBack';
import Header from './Header';
import AppDesc from './AppDesc';
import GigDesc from './GigDesc';
import PayInsights from './PayInsights';
import Resources from './Resources';
import FeaturedServices from './FeaturedServices';
import BottomButtons from './BottomButtons';
import Interested from './Interested';

export function FullGigPage({ gigId, loading, error, allGigs, allServices }) {
  const recommendations = ['G0208', 'G0004', 'G0177', 'G0232', 'G0169'];
  let recs = recommendations;
  let rec = allGigs.filter(obj =>
    obj.id.includes(recs[Math.floor(Math.random() * recommendations.length)]),
  );
  if (recommendations.includes(gigId)) {
    recs = recommendations.filter(obj => !obj.includes(gigId));
    rec = allGigs.filter(obj =>
      obj.id.includes(recs[Math.floor(Math.random() * recs.length)]),
    );
  }
  const info = allGigs.filter(obj => obj.id.includes(gigId))[0];
  const images = require.context('../../images/Logos', true);
  let logo = images(`./nw.png`);
  try {
    logo = images(`./${info.id}.png`);
  } catch {
    logo = images(`./nw.png`);
  }

  const [state] = useState({
    filteredRec: recs,
    recommended: rec,
  });

  function getServices(target, pattern) {
    let value = 0;
    pattern.forEach(function(word) {
      value += target.includes(word);
    });
    return value >= 1;
  }

  let featuredServices = allServices.filter(obj =>
    getServices(obj.id, info.services.slice(0, 3)),
  );

  if (featuredServices.length > 3) {
    featuredServices = featuredServices.slice(0, 3);
  }

  const servicesProps = {
    loading,
    error,
    gigs: featuredServices,
  };

  return (
    <div>
      <Helmet>
        <title>Discover New Work</title>
        <meta
          name="description"
          content="NextWrk helps individuals leverage the gig economy to start working on their own terms. From charging scooters to rideshare driving to professional remote freelancing and everything in between, there are more avenues than ever to start working for yourself. Visit NextWrk and discover new opportunities, relevant services and wallet stuffers."
        />
      </Helmet>
      <GoBack />
      <Inner>
        <Header image={logo} title={info.gig} />
        <hr />
        <BodyWrapper>
          {info.app ? <AppDesc text={info.app} /> : null}
          {info.description ? <GigDesc text={info.description} /> : null}
          {info.pay ? <PayInsights text={info.pay} /> : null}
          {info.resources ? <Resources items={info.resources} /> : null}
          {featuredServices.length > 0 ? (
            <FeaturedServices
              id={gigId}
              list={<ServicesList {...servicesProps} />}
            />
          ) : null}
          <BottomButtons info={info} />
        </BodyWrapper>
      </Inner>
      {state.recommended.length > 0 ? (
        <Interested
          item={
            <GigsList
              loading={loading}
              error={error}
              gigs={state.recommended}
            />
          }
        />
      ) : null}
    </div>
  );
}

FullGigPage.propTypes = {
  gigId: PropTypes.any,
  allGigs: PropTypes.any,
  allServices: PropTypes.any,
  loading: PropTypes.any,
  error: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  gigId: makeSelectPathname(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  allGigs: makeSelectGigs(),
  allServices: makeSelectServices(),
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

export default compose(withConnect)(FullGigPage);
