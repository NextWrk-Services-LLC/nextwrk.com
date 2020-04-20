/**
 *
 * Tos
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';

import Header from 'components/Header';
import H1 from 'components/H1';

export function Tos() {
  return (
    <div>
      <Helmet>
        <title>NextWrk Terms of Service</title>
        <meta
          name="description"
          content="The Terms of Service for NextWrk Services LLC. By accessing or using NextWrk.com or any of its services, you confirm your agreement to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services."
        />
      </Helmet>
      <Header />
      <H1>NextWrk Terms of Service</H1>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Tos);
