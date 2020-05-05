/**
 *
 * ServicesPage
 *
 * Services Page for NextWrk.com, displays and lets users search through services for gig workers
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectServices,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import BodySpacing from 'components/BodySpacing';
import ServicesList from 'components/ServicesList';

import Wrapper from './Wrapper';
import Img from './Img';
import servicesheader from './img/servicesheader.png';

export function ServicesPage({ loading, error, services }) {
  const allServices = services.filter(obj => obj.id.startsWith('S'));

  const servicesProps = {
    loading,
    error,
    gigs: allServices,
  };

  return (
    <div>
      <Helmet>
        <title>Discover Services for Gig Workers</title>
        <meta
          name="description"
          content="Gig workers need help too, and the market definitely realizes this. There are more and more services available to help gig workers improve and maximize their returns. NextWrk's Services Page exposees individuals to new services to ensure they're always a step ahead!"
        />
      </Helmet>
      <Img src={servicesheader} alt="Services Page Header" />
      <BodySpacing>
        <Wrapper>Search</Wrapper>
        <hr />
        <ServicesList {...servicesProps} />
      </BodySpacing>
    </div>
  );
}

ServicesPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  services: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  services: makeSelectServices(),
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
)(ServicesPage);
