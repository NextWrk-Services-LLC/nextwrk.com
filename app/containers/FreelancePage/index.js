/**
 *
 * FreelancePage
 *
 * Freelance Page of NextWrk.com, displays and lets users search through freelance networks
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import H1 from 'components/H1';
import makeSelectFreelancePage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function FreelancePage() {
  useInjectReducer({ key: 'freelancePage', reducer });
  useInjectSaga({ key: 'freelancePage', saga });

  return (
    <div>
      <Helmet>
        <title>Find Freelance Jobs</title>
        <meta name="FreelancePage" content="Displays Freelance Networks" />
      </Helmet>
      <H1>Coming Soon!</H1>
    </div>
  );
}

// FreelancePage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  freelancePage: makeSelectFreelancePage(),
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

export default compose(withConnect)(FreelancePage);
