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
import makeSelectFreelancePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import AllFreelance from './AllFreelance';
import Img from './Img';
import freelanceheader from './freelanceheader.png';

const key = 'freelancePage';

export function FreelancePage({ freelancePage, loading, error, gigs }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const allFreelance = gigs.filter(obj => obj.id.startsWith('F'));

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
        <meta
          name="description"
          content="NextWrk's goal is to put freedom and autonomy back into the hands of workers. The gig economy is exploding, and becoming a skilled freelancer is quickly becoming a viable option for skilled workers. NextWrk helps users find new avenues for scoring freelance jobs so they can start working how, when and where they want."
        />
      </Helmet>
      <Img src={freelanceheader} alt="Freelance Page Header" />
      <div style={{ padding: '5px' }}>{switchFreelance(freelancePage)}</div>
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
