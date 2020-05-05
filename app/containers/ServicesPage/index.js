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

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectServices,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import BodySpacing from 'components/BodySpacing';
import ServicesList from 'components/ServicesList';

import makeSelectServicesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';
import Img from './Img';
import servicesheader from './img/servicesheader.png';

const key = 'servicesPage';

export function ServicesPage({ loading, error, services }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

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
  servicesPage: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  services: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  servicesPage: makeSelectServicesPage(),
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
