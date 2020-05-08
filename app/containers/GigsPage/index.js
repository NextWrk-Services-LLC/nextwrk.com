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
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {
  makeSelectGigs,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import BodySpacing from 'components/BodySpacing';
import GigsList from 'components/GigsList';
import H1 from 'components/H1';
import H2 from 'components/H2';

import DropA from './DropA';
import TdLeft from './TdLeft';
import Wrapper from './Wrapper';
import InputTop from './InputTop';
import Button from './Button';
import SearchImg from './SearchImg';
import search from './img/search.png';

export function GigsPage({ loading, error, gigs }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const allGigs = gigs;
  const searchGigs = [];
  gigs.forEach(item =>
    searchGigs.push({ name: item.gig, id: item.id, show: true }),
  );

  const [state, setState] = React.useState({
    drive: false,
    labor: false,
    rent: false,
    other: false,
    gigs: allGigs,
    searchList: searchGigs,
    showSearchList: false,
    numCards: 20,
    loadMore: true,
  });

  const LinkDropdown = styled.div`
    display: ${state.showSearchList ? '' : 'none'};
    margin-left: 50px;
    margin-top: -15px;
    position: absolute;
    background-color: #ffffff;
    min-width: 230px;
    border: 1px solid #808080;
    z-index: 1;
  `;

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
    if (state.drive) {
      showGigs.push('driving');
    }
    if (state.labor) {
      showGigs.push('labor');
    }
    if (state.rent) {
      showGigs.push('rental');
    }
    if (state.other) {
      showGigs.push('other');
    }
    setState({
      ...state,
      gigs:
        showGigs.length === 0
          ? allGigs
          : allGigs.filter(obj => contains(obj.subtypes, showGigs)),
      numCards: 20,
      loadMore: true,
    });
  };

  const textChange = () => {
    const srch = document.getElementById('srchfld').value;
    for (let i = 0; i < searchGigs.length; i += 1) {
      searchGigs[i].show = searchGigs[i].name.includes(srch);
    }
    setState({
      ...state,
      searchList: searchGigs,
      showSearchList: srch.length > 0,
    });
  };

  const loadMore = () => {
    const newNum = state.numCards + 20;
    setState({
      ...state,
      numCards: newNum,
      loadMore: newNum < state.gigs.length,
    });
  };

  const main = (
    <TdLeft>
      <Wrapper>
        <SearchImg src={search} alt="Search" />
        <InputTop
          type="text"
          onChange={textChange}
          placeholder="Search for Gigs"
          id="srchfld"
          autocomplete="off"
        />
      </Wrapper>
      <LinkDropdown id="myDropdown">
        {state.searchList.map(item =>
          item.show ? (
            <DropA key={item.id} href={`/gigs/${item.id}`}>
              {item.name}
            </DropA>
          ) : null,
        )}
      </LinkDropdown>
      <GigsList
        loading={loading}
        error={error}
        gigs={state.gigs.slice(0, state.numCards)}
      />
      {state.loadMore ? (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <Button onClick={loadMore}>
            <p>Load More</p>
          </Button>
        </div>
      ) : null}
    </TdLeft>
  );

  const form = (
    <td style={{ verticalAlign: 'top' }}>
      <div style={{ paddingLeft: '10px', paddingBottom: '40px' }}>
        <H1>Gig Filters</H1>
        <hr />
        <H2>Categories</H2>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.drive}
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
                  checked={state.labor}
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
                  checked={state.rent}
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
                  checked={state.other}
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
  );

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
            {isMobile ? (
              <React.Fragment>
                <tr>{form}</tr>
                <tr>{main}</tr>
              </React.Fragment>
            ) : (
              <tr>
                {main}
                {form}
              </tr>
            )}
          </tbody>
        </table>
      </BodySpacing>
    </div>
  );
}

GigsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  gigs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  gigs: makeSelectGigs(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
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
)(GigsPage);
