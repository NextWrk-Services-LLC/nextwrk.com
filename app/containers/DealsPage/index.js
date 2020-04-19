/**
 *
 * DealsPage
 *
 * Deals Page of NextWrk.com, displays and lets users search through deals for making more money working gig jobs
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
import makeSelectDealsPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function DealsPage() {
  useInjectReducer({ key: 'dealsPage', reducer });
  useInjectSaga({ key: 'dealsPage', saga });

  return (
    <div>
      <Helmet>
        <title>Get More Money</title>
        <meta name="DealsPage" content="Displays Offered Deals" />
      </Helmet>
      <H1>Coming Soon!</H1>
    </div>
  );
}

// DealsPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  dealsPage: makeSelectDealsPage(),
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

export default compose(withConnect)(DealsPage);
