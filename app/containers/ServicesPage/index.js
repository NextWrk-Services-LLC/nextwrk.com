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
  makeSelectGigs,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Header from 'components/Header';
import makeSelectServicesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeFilter } from './actions';
import AllServices from './AllServices';
import DrivingServices from './DrivingServices';
import BusinessServices from './BusinessServices';
import RentalServices from './RentalServices';
import OtherServices from './OtherServices';
// import Header from './Header';
import NavBarLink from './NavBarLink';
import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';

const key = 'servicesPage';

export function ServicesPage({
  servicesPage,
  loading,
  error,
  gigs,
  showAll,
  showDriving,
  showTaxes,
  showRental,
  showOther,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const allServices = gigs.filter(obj => obj.type === 'service');
  const drivingServices = allServices.filter(obj =>
    obj.subtypes.includes('driver'),
  );
  const businessServices = allServices.filter(obj =>
    obj.subtypes.includes('business'),
  );
  const rentalServices = allServices.filter(obj =>
    obj.subtypes.includes('rental'),
  );
  const otherServices = allServices.filter(obj =>
    obj.subtypes.includes('other'),
  );

  const servicesProps = {
    loading,
    error,
    gigs: allServices,
  };

  const drivingProps = {
    loading,
    error,
    gigs: drivingServices,
  };

  const businessProps = {
    loading,
    error,
    gigs: businessServices,
  };

  const rentalProps = {
    loading,
    error,
    gigs: rentalServices,
  };

  const otherProps = {
    loading,
    error,
    gigs: otherServices,
  };

  function switchServices(param) {
    switch (param) {
      case 'all':
        return <AllServices services={servicesProps} />;
      case 'driver':
        return <DrivingServices services={drivingProps} />;
      case 'business':
        return <BusinessServices services={businessProps} />;
      case 'rental':
        return <RentalServices services={rentalProps} />;
      case 'other':
        return <OtherServices services={otherProps} />;
      default:
        return <AllServices services={servicesProps} />;
    }
  }

  return (
    <div>
      <Helmet>
        <title>Gig Job Services</title>
        <meta name="ServicesPage" content="Displays Gig Services" />
      </Helmet>
      <Header />
      <Wrapper>
        <ContentWrapper>
          <NavBarLink onClick={showAll}>All</NavBarLink>
          <NavBarLink onClick={showDriving}>Driving</NavBarLink>
          <NavBarLink onClick={showTaxes}>Taxes</NavBarLink>
          <NavBarLink onClick={showRental}>Rental</NavBarLink>
          <NavBarLink onClick={showOther}>Other</NavBarLink>
        </ContentWrapper>
      </Wrapper>
      <hr />
      {switchServices(servicesPage)}
    </div>
  );
}

ServicesPage.propTypes = {
  servicesPage: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  gigs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  showAll: PropTypes.func,
  showDriving: PropTypes.func,
  showTaxes: PropTypes.func,
  showRental: PropTypes.func,
  showOther: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  servicesPage: makeSelectServicesPage(),
  gigs: makeSelectGigs(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    showAll: () => dispatch(changeFilter('all')),
    showDriving: () => dispatch(changeFilter('driver')),
    showTaxes: () => dispatch(changeFilter('business')),
    showRental: () => dispatch(changeFilter('rental')),
    showOther: () => dispatch(changeFilter('other')),
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
