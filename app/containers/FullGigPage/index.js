/* eslint-disable func-names */
/**
 *
 * FullGigPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import ServicesList from 'components/ServicesList';
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
import AppPromo from './AppPromo';
import JobPromo from './JobPromo';

export function FullGigPage({ gigId, loading, error, allGigs, allServices }) {
  const info = allGigs.filter(obj => obj.id.includes(gigId))[0];
  const images = require.context('../../images/Logos', true);
  let logo = images(`./nw.png`);
  try {
    logo = images(`./${info.id}.png`);
  } catch {
    logo = images(`./nw.png`);
  }

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
        <title>View Gig</title>
        <meta
          name="description"
          content="View information about a specific gig: pay, relevant services, resources etc."
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
          {info.apppromoterms || info.jobpromoterms ? (
            <React.Fragment>
              <hr />
              <div style={{ verticalAlign: 'bottom', marginTop: '50px' }}>
                {info.apppromoterms ? (
                  <AppPromo text={info.apppromoterms} />
                ) : null}
                {info.jobpromoterms ? (
                  <JobPromo text={info.jobpromoterms} />
                ) : null}
              </div>
            </React.Fragment>
          ) : null}
        </BodyWrapper>
      </Inner>
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

export default compose(
  withConnect,
  memo,
)(FullGigPage);
