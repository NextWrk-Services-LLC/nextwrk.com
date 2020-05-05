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
import ServicesList from 'components/ServicesList';
import {
  makeSelectPathname,
  makeSelectGigs,
  makeSelectServices,
  makeSelectError,
  makeSelectLoading,
} from '../App/selectors';

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
  color: #3b9ad5;
  margin: 0px;
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
  @media (max-width: 768px) {
    font-weight: normal;
    font-size: 16px;
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
    cursor: pointer;
  }
`;

const ASm = styled.a`
  color: #000000;
  font-weight: normal;
  text-decoration: underline;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export function FullGigPage({ gigId, loading, error, allGigs, allServices }) {
  const info = allGigs.filter(obj => obj.id.includes(gigId))[0];

  function getServices(target, pattern) {
    let value = 0;
    pattern.forEach(function(word) {
      value += target.includes(word);
    });
    return value >= 1;
  }

  let featuredServices = allServices.filter(obj =>
    getServices(obj.subtypes[0], info.subtypes),
  );

  if (featuredServices.length > 3) {
    featuredServices = featuredServices.slice(0, 3);
  }

  const servicesProps = {
    loading,
    error,
    gigs: featuredServices,
  };

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
                <a href={info.appsite}>
                  <Button>View The App</Button>
                </a>
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
          {info.app ? (
            <React.Fragment>
              <H2>App Description</H2>
              <div style={{ marginTop: '-10px' }}>
                <P>{info.app}</P>
              </div>
            </React.Fragment>
          ) : null}
          <H2>Gig Description</H2>
          <div style={{ marginTop: '-10px' }}>
            <P>{info.description}</P>
          </div>
          {info.pay ? (
            <React.Fragment>
              <H2>Pay Insights</H2>
              <div style={{ marginTop: '-10px' }}>
                <P>{info.pay}</P>
              </div>
            </React.Fragment>
          ) : null}
          {info.resources ? (
            <React.Fragment>
              <H2>Resources</H2>
              <div style={{ marginTop: '-10px' }}>
                <ul style={{ listStyle: 'none' }}>
                  {info.resources.map(item => (
                    <li key={item.title}>
                      <ASm href={item.link}>{item.title}</ASm>
                    </li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ) : null}
          {featuredServices.length > 0 ? (
            <React.Fragment>
              <H2>Useful Services</H2>
              <div style={{ marginTop: '-10px', textAlign: 'center' }}>
                <ServicesList {...servicesProps} />
              </div>
              <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                <A href="/services">See More Services</A>
              </div>
            </React.Fragment>
          ) : null}
          <div style={{ textAlign: 'center' }}>
            <hr />
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
  allServices: PropTypes.any,
  loading: PropTypes.any,
  error: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  gigId: makeSelectPathname(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  allGigs: makeSelectGigs(),
  allServices: makeSelectServices(),
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
