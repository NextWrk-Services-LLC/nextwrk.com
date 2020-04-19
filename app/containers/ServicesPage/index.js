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
import makeSelectServicesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeFilter } from './actions';
import AllServices from './AllServices';
import Header from './Header';
import NavBarLink from './NavBarLink';
import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';

const key = 'servicesPage';

export function ServicesPage({
  loading,
  error,
  gigs,
  showAll,
  showDriving,
  showLabor,
  showRental,
  showOther,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const allServices = gigs.filter(obj => obj.type === 'service');

  const servicesProps = {
    loading,
    error,
    gigs: allServices,
  };

  return (
    <div>
      <Helmet>
        <title>Gig Job Services</title>
        <meta name="ServicesPage" content="Displays Gig Services" />
      </Helmet>
      <Wrapper>
        <ContentWrapper>
          <NavBarLink onClick={showAll}>All</NavBarLink>
          <NavBarLink onClick={showDriving}>Driving</NavBarLink>
          <NavBarLink onClick={showLabor}>Labor</NavBarLink>
          <NavBarLink onClick={showRental}>Rental</NavBarLink>
          <NavBarLink onClick={showOther}>Other</NavBarLink>
        </ContentWrapper>
      </Wrapper>
      <Header />
      <AllServices services={servicesProps} />
    </div>
  );
}

ServicesPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  gigs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  showAll: PropTypes.func,
  showDriving: PropTypes.func,
  showLabor: PropTypes.func,
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
    showDriving: () => dispatch(changeFilter('driving')),
    showLabor: () => dispatch(changeFilter('labor')),
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
