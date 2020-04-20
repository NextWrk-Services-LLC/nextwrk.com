/**
 *
 * Privacy
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';

import Header from 'components/Header';
import H1 from 'components/H1';

export function Privacy() {
  return (
    <div>
      <Helmet>
        <title>NextWrk Privacy Policy</title>
        <meta
          name="description"
          content="The privacy policy for NextWrk Services LLC. Here at NextWrk we are committed to transparency. We have developed this statement to provide users with information on how we collect, use and share information from you and other users of NextWrk.com."
        />
      </Helmet>
      <Header />
      <H1>NextWrk Privacy Policy</H1>
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

export default compose(withConnect)(Privacy);
