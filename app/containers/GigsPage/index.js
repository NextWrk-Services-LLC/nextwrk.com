/* eslint-disable func-names */
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
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
import H2 from 'components/H2';

import makeSelectGigsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeFilter } from './actions';

import Wrapper from './Wrapper';

import search from './img/search.png';
import nw from '../../images/nextwork.png';

const key = 'gigsPage';

const InputTop = styled.input`
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
  outline: none;
  &:hover {
    box-shadow: 0px 0px 3px gray;
  }
`;

export function GigsPage({ loading, error, gigs }) {
  const allGigs = gigs.filter(obj => obj.id.startsWith('G'));

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [state, setState] = React.useState({
    srchfld: '',
    drive: true,
    labor: true,
    rent: true,
    other: true,
    gigsProps: {
      loading,
      error,
      gigs: allGigs,
    },
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function contains(target, pattern) {
    let value = 0;
    pattern.forEach(function(word) {
      value += target.includes(word);
    });
    return value >= 1;
  }

  const filterGigs = () => {
    const showGigs = [];
    if (drive) {
      showGigs.push('driving');
    }
    if (labor) {
      showGigs.push('labor');
    }
    if (rent) {
      showGigs.push('rental');
    }
    if (other) {
      showGigs.push('other');
    }
    if (showGigs.length === 0) {
      setState({
        ...state,
        gigsProps: {
          loading,
          error,
          gigs: allGigs.filter(obj => obj.featured),
        },
      });
    } else {
      setState({
        ...state,
        gigsProps: {
          loading,
          error,
          gigs: allGigs.filter(obj => contains(obj.subtypes, showGigs)),
        },
      });
    }
  };

  const textChange = () => {
    const srch = document.getElementById('srchfld').value;
    setState({
      ...state,
      gigsProps: {
        loading,
        error,
        gigs: gigs.filter(obj => obj.gig.includes(srch)),
      },
    });
  };

  const { drive, labor, rent, other, gigsProps } = state;

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
        <table>
          <tbody>
            <tr>
              <td style={{ width: '75%' }}>
                <Wrapper>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      paddingBottom: '10px',
                    }}
                  >
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
                    <InputTop
                      type="text"
                      onChange={textChange}
                      placeholder="Search for Gigs"
                      id="srchfld"
                    />
                    <Button>Search</Button>
                  </div>
                </Wrapper>
                <GigsList {...gigsProps} />
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={nw}
                    style={{ width: '75%', paddingBottom: '250px' }}
                    alt="nw logo"
                  />
                </div>
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <div style={{ paddingLeft: '10px' }}>
                  <H1>Gig Filters</H1>
                  <hr />
                  <H2>Categories</H2>
                  <FormControl component="fieldset">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={drive}
                            onChange={handleChange}
                            name="drive"
                            color="default"
                          />
                        }
                        label="Driving"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={labor}
                            onChange={handleChange}
                            name="labor"
                            color="default"
                          />
                        }
                        label="Labor"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={rent}
                            onChange={handleChange}
                            name="rent"
                            color="default"
                          />
                        }
                        label="Rental"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={other}
                            onChange={handleChange}
                            name="other"
                            color="default"
                          />
                        }
                        label="Other"
                      />
                    </FormGroup>
                    <div style={{ height: '24px', paddingTop: '10px' }}>
                      <Button onClick={filterGigs}>
                        <p>Submit</p>
                      </Button>
                    </div>
                  </FormControl>
                </div>
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
