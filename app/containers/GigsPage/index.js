/**
 *
 * GigsPage
 *
 * Gigs Page for NextWrk.com, displays and lets users search through gig jobs
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import GigItem from 'components/GigItem';
import H2 from 'components/H2';
import NavBar from './NavBar';
import Header from './Header';
import makeSelectGigsPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function GigsPage() {
  useInjectReducer({ key: 'gigsPage', reducer });
  useInjectSaga({ key: 'gigsPage', saga });

  // const taglines = [
  //   'Discover Your Next Gig',
  //   'Get Paid to Cruise Around Town',
  //   'No Car? No Problem!',
  //   'Let Your Stuff Work For You',
  //   "There's All Sorts of Stuff You Can Get Paid For!",
  // ];

  return (
    <div>
      <Helmet>
        <title>Find New Gigs</title>
        <meta name="GigsPage" content="Displays All Gigs" />
      </Helmet>
      <NavBar />
      <Header />
      <H2>Featured Gigs</H2>
      <GigItem />
    </div>
  );
}

// GigsPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  gigsPage: makeSelectGigsPage(),
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

export default compose(withConnect)(GigsPage);
