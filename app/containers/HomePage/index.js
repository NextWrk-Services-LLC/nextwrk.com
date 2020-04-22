/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * HomePage.js
 *
 * Homepage of NextWrk.com, displays all featured gigs, services, deals and freelance networks
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectGigs,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Header from 'components/Header';
import GigsList from 'components/GigsList';
import H3 from './H3';
import CenteredSection from './CenteredSection';
import Section from './Section';
import { changeUsername } from './actions';
import reducer from './reducer';
import saga from './saga';
import Img from './Img';
import services from './services.png';
import gig from './gigs.png';
import deal from './deals.png';

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 15px;
`;

const key = 'home';

export function HomePage({ loading, error, gigs }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const featured = gigs.filter(obj => obj.featured === true);
  const featuredServices = featured.filter(obj => obj.id.startsWith('S'));
  const featuredGigs = featured.filter(obj => obj.id.startsWith('G'));

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
      <div style={{ padding: '0px 10px' }}>
        <CenteredSection>
          <H1>Make Easier Money on Your Own Time</H1>
        </CenteredSection>
        <div style={{ marginTop: '-40px' }}>
          <H2>Discover...</H2>
          <Table>
            <tbody>
              <tr>
                <td style={{ width: '33%' }}>
                  <Img src={gig} alt="Gig Vector" />
                </td>
                <td>
                  <H1>Gig Work</H1>
                  <H3>
                    New opportunities to earn extra money on your own time
                  </H3>
                </td>
              </tr>
              <tr>
                <td>
                  <Img src={services} alt="Services Vector" />
                </td>
                <td>
                  <H1>New Services</H1>
                  <H3>
                    A multitude of apps and services to make your jobs easier
                    and more lucrative
                  </H3>
                </td>
              </tr>
              <tr>
                <td>
                  <Img src={deal} alt="Deals Vector" />
                </td>
                <td>
                  <H1>Deals</H1>
                  <H3>
                    Exclusive deals to ensure you are never leaving any money on
                    the table
                  </H3>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Section>
          <H2>Featured Gig Jobs</H2>
          <hr />
          <GigsList {...gigsFeaturedProps} />
          <H2>Featured Services</H2>
          <hr />
          <GigsList {...servicesFeaturedProps} />
          {/* <H2>Featured Deals</H2>
          <hr />
          <DealItem />
          <H2>Featured Freelance Networks</H2>
          <hr />
          <FreelanceItem /> */}
        </Section>
      </div>
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
