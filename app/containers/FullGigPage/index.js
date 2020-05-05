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

import H2 from 'components/H2';
import Table from 'components/Popup/Table';
import { makeSelectPathname, makeSelectGigs } from '../App/selectors';

const Inner = styled.div`
  margin: auto;
  background: white;
  border: 1px solid #070600;
  border-radius: 20px;
  margin: 20px 40px;
  padding: 20px;
  @media (max-width: 768px) {
    margin: 5px 10px;
  }
`;

const H1 = styled.h1`
  font-size: 32px;
  margin-top: -10px;
  color: #3b9ad5;
  font-weight: normal;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Button = styled.button`
  border-radius: 60px;
  border: none;
  background: #3b9ad5;
  color: #fff;
  padding: 10px 20px;
  outline: none;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    box-shadow: 0px 0px 3px gray;
    cursor: pointer;
  }
`;

const P = styled.p`
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const A = styled.a`
  font-size: 32px;
  color: #3b9ad5;
  font-weight: normal;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export function FullGigPage({ gigId, allGigs }) {
  const info = allGigs.filter(obj => obj.id.includes(gigId))[0];

  return (
    <div>
      <Helmet>
        <title>FullGigPage</title>
        <meta name="description" content="Description of FullGigPage" />
      </Helmet>
      <div style={{ marginTop: '15px' }}>
        <A href="/gigs">{'<< Go Back'}</A>
      </div>
      <Inner>
        <Table>
          <tbody>
            <tr>
              <td>
                <img
                  style={{ height: '70px', borderRadius: '10px' }}
                  src={info.logo}
                  alt="Logo"
                />
              </td>
            </tr>
            <tr>
              <td>
                <H1>{info.gig}</H1>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr>
              <td>
                <Button>View The App</Button>
              </td>
              <td>
                <a href={info.gigsite}>
                  <Button>View The Job</Button>
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
        <hr />
        <div style={{ padding: '0px 20px' }}>
          <H2>App Description</H2>

          <H2>Gig Description</H2>
          <P>{info.description}</P>
          <H2>Pay Insights</H2>
          <H2>Resources</H2>
          <H2>Useful Services</H2>
          <div style={{ textAlign: 'center' }}>
            <H1>{info.promo}</H1>
          </div>
        </div>
      </Inner>
    </div>
  );
}

FullGigPage.propTypes = {
  gigId: PropTypes.any,
  allGigs: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  gigId: makeSelectPathname(),
  allGigs: makeSelectGigs(),
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
