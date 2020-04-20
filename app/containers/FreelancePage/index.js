/**
 *
 * FreelancePage
 *
 * Freelance Page of NextWrk.com, displays and lets users search through freelance networks
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
import makeSelectFreelancePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import AllFreelance from './AllFreelance';

const key = 'freelancePage';

export function FreelancePage({ freelancePage, loading, error, gigs }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const allFreelance = gigs.filter(obj => obj.type === 'freelance');

  const freelanceProps = {
    loading,
    error,
    gigs: allFreelance,
  };

  function switchFreelance(param) {
    switch (param) {
      case 'all':
        return <AllFreelance freelance={freelanceProps} />;
      default:
        return <AllFreelance freelance={freelanceProps} />;
    }
  }

  return (
    <div>
      <Helmet>
        <title>Find Freelance Jobs</title>
        <meta name="FreelancePage" content="Displays Freelance Networks" />
      </Helmet>
      <Header />
      {switchFreelance(freelancePage)}
    </div>
  );
}

FreelancePage.propTypes = {
  freelancePage: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  gigs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  freelancePage: makeSelectFreelancePage(),
  gigs: makeSelectGigs(),
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
)(FreelancePage);
