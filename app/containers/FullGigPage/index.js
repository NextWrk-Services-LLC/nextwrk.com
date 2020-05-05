/**
 *
 * FullGigPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectSelectedGig } from 'containers/App/selectors';

export function FullGigPage({ id }) {
  return (
    <div>
      <Helmet>
        <title>FullGigPage</title>
        <meta name="description" content="Description of FullGigPage" />
      </Helmet>
      <p>{id}</p>
    </div>
  );
}

FullGigPage.propTypes = {
  id: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  id: makeSelectSelectedGig(),
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
)(FullGigPage);
