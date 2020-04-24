/**
 *
 * GigsPage
 *
 * Gigs Page for NextWrk.com, displays and lets users search through gig jobs
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
import makeSelectGigsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import NavBarLink from './NavBarLink';
import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';
import { changeFilter } from './actions';
import AllGigs from './AllGigs';
import DrivingGigs from './DrivingGigs';
import LaborGigs from './LaborGigs';
import RentalGigs from './RentalGigs';
import OtherGigs from './OtherGigs';
import Img from './Img';
import gigsheader from './gigsheader.png';

const key = 'gigsPage';

export function GigsPage({
  gigsPage,
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

  const allGigs = gigs.filter(obj => obj.id.startsWith('G'));
  const drivingGigs = allGigs.filter(obj => obj.subtypes.includes('driving'));
  const laborGigs = allGigs.filter(obj => obj.subtypes.includes('labor'));
  const rentalGigs = allGigs.filter(obj => obj.subtypes.includes('rental'));
  const otherGigs = allGigs.filter(obj => obj.subtypes.includes('other'));

  const gigsProps = {
    loading,
    error,
    gigs: allGigs,
  };

  const drivingProps = {
    loading,
    error,
    gigs: drivingGigs,
  };

  const laborProps = {
    loading,
    error,
    gigs: laborGigs,
  };

  const rentalProps = {
    loading,
    error,
    gigs: rentalGigs,
  };

  const otherProps = {
    loading,
    error,
    gigs: otherGigs,
  };

  function switchGigs(param) {
    switch (param) {
      case 'all':
        return <AllGigs gigs={gigsProps} />;
      case 'driving':
        return <DrivingGigs gigs={drivingProps} />;
      case 'labor':
        return <LaborGigs gigs={laborProps} />;
      case 'rental':
        return <RentalGigs gigs={rentalProps} />;
      case 'other':
        return <OtherGigs gigs={otherProps} />;
      default:
        return <AllGigs gigs={gigsProps} />;
    }
  }

  return (
    <div>
      <Helmet>
        <title>Discover New Gig Opportunities</title>
        <meta
          name="description"
          content="There are a plethora of jobs available to anyone with a phone, car, and/or skill. NextWrk's Gig Page helps exposes individuals to new opportunities in the gig economy, and helps them find the best jobs for them!"
        />
      </Helmet>
      <Img src={gigsheader} alt="Gigs Page Header" />
      <Wrapper>
        <ContentWrapper>
          <NavBarLink onClick={showAll}>All</NavBarLink>
          <NavBarLink onClick={showDriving}>Driving</NavBarLink>
          <NavBarLink onClick={showLabor}>Labor</NavBarLink>
          <NavBarLink onClick={showRental}>Rental</NavBarLink>
          <NavBarLink onClick={showOther}>Other</NavBarLink>
        </ContentWrapper>
      </Wrapper>
      <hr />
      {switchGigs(gigsPage)}
    </div>
  );
}

GigsPage.propTypes = {
  gigsPage: PropTypes.string,
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
  gigsPage: makeSelectGigsPage(),
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
)(GigsPage);
