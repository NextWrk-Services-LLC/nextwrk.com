/**
 *
 * GigsPage
 *
 * Gigs Page for NextWrk.com, displays and lets users search through gig jobs
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  makeSelectGigs,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import BodySpacing from 'components/BodySpacing';
import GigsList from 'components/GigsList';
import H1 from 'components/H1';

import makeSelectGigsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeFilter } from './actions';

import Wrapper from './Wrapper';

import search from './img/search.png';

const key = 'gigsPage';

const Input = styled.input`
  width: 25%;
  outline: none;
  border: none;
  background: #edf6fb;
  padding: 0px 5px;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const Button = styled.button`
  border-radius: 60px;
  border: none;
  background: #3b9ad5;
  color: #fff;
  padding: 0px 20px;
  &:hover {
    box-shadow: 0px 0px 3px gray;
  }
`;

export function GigsPage({ loading, error, gigs }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const allGigs = gigs.filter(obj => obj.id.startsWith('G'));

  const gigsProps = {
    loading,
    error,
    gigs: allGigs,
  };

  return (
    <div>
      <Helmet>
        <title>Discover New Gig Opportunities</title>
        <meta
          name="description"
          content="There are a plethora of jobs available to anyone with a phone, car, and/or skill. NextWrk's Gig Page helps exposes individuals to new opportunities in the gig economy, and helps them find the best jobs for them!"
        />
      </Helmet>
      <BodySpacing>
        <Wrapper>
          <form>
            <div style={{ display: 'flex', width: '100%' }}>
              <img
                src={search}
                alt="Search"
                style={{
                  padding: '10px',
                  background: `#edf6fb`,
                  color: `#3b9ad5`,
                  minWidth: '50px',
                  textAlign: 'center',
                }}
              />
              <Input type="text" placeholder="Search for Gigs" name="srchfld" />
              <Button>Search</Button>
            </div>
          </form>
        </Wrapper>
        <hr />
        <table>
          <tbody>
            <tr>
              <td style={{ width: '75%' }}>
                <GigsList {...gigsProps} />
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <H1>Gig Filters</H1>
              </td>
            </tr>
          </tbody>
        </table>
      </BodySpacing>
    </div>
  );
}

GigsPage.propTypes = {
  gigsPage: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  gigs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  gigsPage: makeSelectGigsPage(),
  gigs: makeSelectGigs(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    showAll: () => dispatch(changeFilter('all')),
    showDriving: () => dispatch(changeFilter('driving')),
    showLabor: () => dispatch(changeFilter('labor')),
    showRental: () => dispatch(changeFilter('rental')),
    showOther: () => dispatch(changeFilter('other')),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(GigsPage);
