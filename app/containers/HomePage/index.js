/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * HomePage.js
 *
 * Homepage of NextWrk.com, displays all featured gigs, services, deals and freelance networks
 */

import React, { /* useEffect, */ memo } from 'react';
import PropTypes from 'prop-types';
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

const key = 'home';

export function HomePage({ loading, error, gigs }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // useEffect(() => {
  //   // When initial state username is not null, submit the form to load repos
  // }, []);

  const featured = gigs.filter(obj => obj.featured === true);
  const featuredServices = featured.filter(obj => obj.type === 'service');
  const featuredGigs = featured.filter(obj => obj.type === 'gig');

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
        <title>Make Easier Money</title>
        <meta name="Homepage" content="Homepage for NextWrk.com" />
      </Helmet>
      <Header />
      <div>
        <CenteredSection>
          <H1>Make Easier Money on Your Own Time</H1>
          <H3>
            {
              "Discover new opportunities for gig work, services to make jobs easier and more lucrative, and deals to make sure you aren't leaving any money on the table."
            }
          </H3>
        </CenteredSection>
        <Section>
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a name="gigs" />
          <H2>Featured Gig Jobs</H2>
          <hr />
          <H3>
            Jobs that let you come and go as you please. Work as much, or as
            little, as you want!
          </H3>
          <GigsList {...gigsFeaturedProps} />
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a name="services" />
          <H2>Featured Services</H2>
          <hr />
          <H3>
            Apps designed to make gig jobs easier and more lucractive. Work
            smarter not harder!
          </H3>
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
