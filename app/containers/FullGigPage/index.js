/**
 *
 * FullGigPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectPathname } from '../App/selectors';

const Inner = styled.div`
  margin: auto;
  background: white;
  border: 1px solid #070600;
  border-radius: 20px;
  margin: 20px 40px;
  @media (max-width: 768px) {
    margin: 5px 10px;
  }
`;

export function FullGigPage({ id, gigId }) {
  console.log(gigId);
  return (
    <div>
      <Helmet>
        <title>FullGigPage</title>
        <meta name="description" content="Description of FullGigPage" />
      </Helmet>
      <Inner>
        <p>{id}</p>
      </Inner>
    </div>
  );
}

FullGigPage.propTypes = {
  id: PropTypes.any,
  gigId: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  gigId: makeSelectPathname(),
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
