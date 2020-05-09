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
    rideshare: false,
    packagedelivery: false,
    fooddelivery: false,
    delivery21: false,
    gorcery: false,
    home: false,
    car: false,
    boat: false,
    parking: false,
    rv: false,
    scooter: false,
    dog: false,
    handyman: false,
    mover: false,
    landscaping: false,
    cleaning: false,
    care: false,
    tech: false,
    mysteryshop: false,
    beauty: false,
    cuisine: false,

    gigs: allGigs,
    searchList: searchGigs,
    showSearchList: false,
    numCards: 20,
    loadMore: true,
    showMobile: false,
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

  const FilterBtn = styled.button`
    margin-top: 0px;
    padding-top: 18px;
    padding-left: 20px;
    color: #3b9ad5;
    font-size: 20px;
    border: none;
    background-color: #ffffff;
  `;

  const HideableTr = styled.tr`
    display: ${state.showMobile ? '' : 'none'};
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
    if (state.care) {
      showGigs.push('care');
    }
    if (state.tech) {
      showGigs.push('tech');
    }
    if (state.mysteryshop) {
      showGigs.push('mysteryshop');
    }
    if (state.beauty) {
      showGigs.push('beauty');
    }
    if (state.healthcare) {
      showGigs.push('healthcare');
    }
    if (state.cuisine) {
      showGigs.push('cuisine');
    }
    if (state.rideshare) {
      showGigs.push('rideshare');
    }
    if (state.packagedelivery) {
      showGigs.push('packagedelivery');
    }
    if (state.fooddelivery) {
      showGigs.push('fooddelivery');
    }
    if (state.delivery21) {
      showGigs.push('21delivery');
    }
    if (state.grocery) {
      showGigs.push('grocery');
    }
    if (state.home) {
      showGigs.push('home');
    }
    if (state.car) {
      showGigs.push('car');
    }
    if (state.boat) {
      showGigs.push('boat');
    }
    if (state.parking) {
      showGigs.push('parking');
    }
    if (state.rv) {
      showGigs.push('RV');
    }
    if (state.scooter) {
      showGigs.push('scooter');
    }
    if (state.dog) {
      showGigs.push('dog');
    }
    if (state.handyman) {
      showGigs.push('handyman');
    }
    if (state.mover) {
      showGigs.push('mover');
    }
    if (state.landscaping) {
      showGigs.push('landscaping');
    }
    if (state.cleaning) {
      showGigs.push('cleaning');
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

  const toggleMobile = () => {
    const newShow = !state.showMobile;
    setState({
      ...state,
      showMobile: newShow,
    });
  };

  const textChange = () => {
    const srch = document.getElementById('srchfld').value;
    for (let i = 0; i < searchGigs.length; i += 1) {
      searchGigs[i].show = searchGigs[i].name
        .toLowerCase()
        .includes(srch.toLowerCase());
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

        <FormControl component="fieldset">
          <FormGroup>
            <H2>Driving</H2>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.rideshare}
                  onChange={handleChange}
                  name="rideshare"
                  color="default"
                />
              }
              label="Rideshare"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.packagedelivery}
                  onChange={handleChange}
                  name="packagedelivery"
                  color="default"
                />
              }
              label="Item Delivery"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.fooddelivery}
                  onChange={handleChange}
                  name="fooddelivery"
                  color="default"
                />
              }
              label="Food Delivery"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.delivery21}
                  onChange={handleChange}
                  name="delivery21"
                  color="default"
                />
              }
              label="21+ Delivery"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.grocery}
                  onChange={handleChange}
                  name="grocery"
                  color="default"
                />
              }
              label="Grocery Shopping"
            />
            <H2>Rental</H2>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.home}
                  onChange={handleChange}
                  name="home"
                  color="default"
                />
              }
              label="Home Rental"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.car}
                  onChange={handleChange}
                  name="car"
                  color="default"
                />
              }
              label="Car Rental"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.boat}
                  onChange={handleChange}
                  name="boat"
                  color="default"
                />
              }
              label="Boat Rental"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.parking}
                  onChange={handleChange}
                  name="parking"
                  color="default"
                />
              }
              label="Parking Spot Rental"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.rv}
                  onChange={handleChange}
                  name="rv"
                  color="default"
                />
              }
              label="RV Rental"
            />
            <H2>Labor</H2>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.dog}
                  onChange={handleChange}
                  name="dog"
                  color="default"
                />
              }
              label="Dog Walking / Care"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.handyman}
                  onChange={handleChange}
                  name="handyman"
                  color="default"
                />
              }
              label="HandyMan"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.mover}
                  onChange={handleChange}
                  name="mover"
                  color="default"
                />
              }
              label="Mover"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.landscaping}
                  onChange={handleChange}
                  name="landscaping"
                  color="default"
                />
              }
              label="Landscaping / Lawn Care"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.cleaning}
                  onChange={handleChange}
                  name="cleaning"
                  color="default"
                />
              }
              label="Cleaning"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.care}
                  onChange={handleChange}
                  name="care"
                  color="default"
                />
              }
              label="Child and Elder Care"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.tech}
                  onChange={handleChange}
                  name="tech"
                  color="default"
                />
              }
              label="Technical"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.mysteryshop}
                  onChange={handleChange}
                  name="mysteryshop"
                  color="default"
                />
              }
              label="Mystery Shopping"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.beauty}
                  onChange={handleChange}
                  name="beauty"
                  color="default"
                />
              }
              label="Beauty and Massage"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.healthcare}
                  onChange={handleChange}
                  name="healthcare"
                  color="default"
                />
              }
              label="Healthcare"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.cuisine}
                  onChange={handleChange}
                  name="cuisine"
                  color="default"
                />
              }
              label="Cuisine"
            />
            <H2>Other</H2>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.scooter}
                  onChange={handleChange}
                  name="scooter"
                  color="default"
                />
              }
              label="Scooter Charging"
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
      {isMobile ? (
        <div style={{ height: '64px', backgroundColor: `#ffffff` }}>
          <FilterBtn type="submit" onClick={toggleMobile}>
            Filter
          </FilterBtn>
        </div>
      ) : null}
      <BodySpacing>
        <table>
          <tbody>
            {isMobile ? (
              <React.Fragment>
                <HideableTr>{form}</HideableTr>
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
