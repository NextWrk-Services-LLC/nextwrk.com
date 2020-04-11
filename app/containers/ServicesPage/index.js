/**
 *
 * ServicesPage
 *
 * Services Page for NextWrk.com, displays and lets users search through services for gig workers
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectServicesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function ServicesPage() {
  useInjectReducer({ key: 'servicesPage', reducer });
  useInjectSaga({ key: 'servicesPage', saga });

  return (
    <div>
      <Helmet>
        <title>Gig Job Services</title>
        <meta name="ServicesPage" content="Displays Gig Services" />
      </Helmet>
    </div>
  );
}

// ServicesPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  servicesPage: makeSelectServicesPage(),
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

export default compose(withConnect)(ServicesPage);
