/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * HomePage.js
 *
 * Homepage of NextWrk.com, displays all featured gigs, services, deals and freelance networks
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import {
  makeSelectGigs,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import BodySpacing from 'components/BodySpacing';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Header from 'components/Header';
import ServicesList from 'components/ServicesList';
import DealsList from 'components/DealsList';

import CenterText from 'components/CenterText';
import { changeUsername } from './actions';
import reducer from './reducer';
import saga from './saga';

import Img from './Img';
import H3 from './H3';
import Section from './Section';
import Table from './Table';
import TdImg from './TdImg';

import services from './img/services.png';
import gig from './img/gigs.png';
import deal from './img/deals.png';

const key = 'home';

export function HomePage({ loading, error, gigs }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const featured = gigs.filter(obj => obj.featured === true);
  const featuredServices = featured.filter(obj => obj.id.startsWith('S'));
  const featuredGigs = featured.filter(obj => obj.id.startsWith('G'));
  const featuredDeals = featured.filter(obj => obj.id.startsWith('D'));

  const gigsFeaturedProps = {
    loading,
    error,
    gigs: featuredGigs,
  };

  const servicesFeaturedProps = {
    loading,
    error,
    gigs: featuredServices,
  };

  const dealFeaturedProps = {
    loading,
    error,
    gigs: featuredDeals,
  };

  return (
    <article>
      <Helmet>
        <title>Featured Gigs</title>
        <meta
          name="description"
          content="NextWrk's Featured Gigs and Services. Discover the best gigs for developing extra streams of income, and the best services for maximizing your returns!"
        />
      </Helmet>
      <Header />
      <BodySpacing>
        <H1>Discover...</H1>
        {isMobile ? (
          <Table>
            <tbody>
              <tr>
                <TdImg>
                  <a href="/gigs">
                    <Img src={gig} alt="Gig Vector" />
                  </a>
                </TdImg>
                <td>
                  <H1>Gig Work</H1>
                  <H3>
                    From charging scooters to professional freelancing - Gig
                    jobs let you work where you want, when you want.
                  </H3>
                </td>
              </tr>
              <tr>
                <td>
                  <H1>New Services</H1>
                  <H3>
                    A multitude of apps and services created specifically for
                    gig workers - Make your jobs easier and more lucrative
                  </H3>
                </td>
                <TdImg>
                  <a href="/services">
                    <Img src={services} alt="Services Vector" />
                  </a>
                </TdImg>
              </tr>
              <tr>
                <TdImg>
                  <a href="/deals">
                    <Img src={deal} alt="Deals Vector" />
                  </a>
                </TdImg>
                <td>
                  <H1>Deals</H1>
                  <H3>
                    Exclusive deals for trying out new jobs and services -
                    Ensure you are never leaving any money on the table.
                  </H3>
                </td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <Table>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center' }}>
                  <a href="/gigs">
                    <Img src={gig} alt="Gig Vector" />
                  </a>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <a href="/services">
                    <Img src={services} alt="Services Vector" />
                  </a>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <a href="/deals">
                    <Img src={deal} alt="Deals Vector" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <CenterText>
                    <H1>Gig Work</H1>
                  </CenterText>
                  <H3>
                    From charging scooters to professional freelancing - Gig
                    jobs let you work where you want, when you want.
                  </H3>
                </td>
                <td>
                  <CenterText>
                    <H1>New Services</H1>
                  </CenterText>
                  <H3>
                    A multitude of apps and services created specifically for
                    gig workers - Make your jobs easier and more lucrative
                  </H3>
                </td>
                <td>
                  <CenterText>
                    <H1>Deals</H1>
                  </CenterText>
                  <H3>
                    Exclusive deals for trying out new jobs and services -
                    Ensure you are never leaving any money on the table.
                  </H3>
                </td>
              </tr>
            </tbody>
          </Table>
        )}

        <Section>
          <H2>Featured Gigs</H2>
          <hr />
          <ServicesList {...gigsFeaturedProps} />
          <H2>Featured Services</H2>
          <hr />
          <ServicesList {...servicesFeaturedProps} />
          <H2>Featured Deals</H2>
          <hr />
          <DealsList {...dealFeaturedProps} />
        </Section>
      </BodySpacing>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  gigs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  gigs: makeSelectGigs(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
