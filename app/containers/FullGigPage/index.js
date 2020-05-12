/* eslint-disable func-names */
/**
 *
 * FullGigPage
 *
 */

import React, { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
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

import Inner from './Inner';
import H1 from './H1';
import Button from './Button';
import P from './P';
import A from './A';
import ASm from './ASm';

export function FullGigPage({ gigId, loading, error, allGigs, allServices }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const info = allGigs.filter(obj => obj.id.includes(gigId))[0];
  const images = require.context('../../images/Logos', true);
  const logo = images(`./${info.id}.png`);

  function getServices(target, pattern) {
    let value = 0;
    pattern.forEach(function(word) {
      value += target.includes(word);
    });
    return value >= 1;
  }

  let featuredServices = allServices.filter(obj =>
    getServices(obj.id, info.services.slice(0, 3)),
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
                  style={{ height: '100px', borderRadius: '10px' }}
                  src={logo}
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
            {isMobile ? (
              <React.Fragment>
                <tr>
                  <td style={{ verticalAlign: 'top' }}>
                    <a href={info.appsite ? info.appsite : info.gigsite}>
                      <Button>Get The App</Button>
                    </a>
                    <div style={{ textAlign: 'center' }}>
                      <H2>{info.apppromo}</H2>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: 'top' }}>
                    <a href={info.gigsite}>
                      <Button>View The Job</Button>
                    </a>
                    <div style={{ textAlign: 'center' }}>
                      <H2>{info.jobpromo}</H2>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ) : (
              <tr>
                <td style={{ width: '50%', verticalAlign: 'top' }}>
                  <a href={info.appsite ? info.appsite : info.gigsite}>
                    <Button>Get The App</Button>
                  </a>
                  <div style={{ textAlign: 'center' }}>
                    <H2>{info.apppromo}</H2>
                  </div>
                </td>
                <td style={{ width: '50%', verticalAlign: 'top' }}>
                  <a href={info.gigsite}>
                    <Button>View The Job</Button>
                  </a>
                  <div style={{ textAlign: 'center' }}>
                    <H2>{info.jobpromo}</H2>
                  </div>
                </td>
              </tr>
            )}
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
                    <li style={{ paddingBottom: '3px' }} key={item.title}>
                      <ASm href={item.link}>{item.title}</ASm>
                    </li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ) : null}
          {featuredServices.length > 0 ? (
            <React.Fragment>
              <H2>
                Useful Services{' '}
                <a
                  style={{ color: `#3b9ad5` }}
                  href={`/services?fltr=${gigId}`}
                >
                  (See More Here)
                </a>
              </H2>
              <div style={{ marginTop: '-10px', textAlign: 'center' }}>
                <ServicesList {...servicesProps} />
              </div>
            </React.Fragment>
          ) : null}
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
