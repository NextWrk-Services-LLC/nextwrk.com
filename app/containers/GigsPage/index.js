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

import {
  makeSelectGigs,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
} from 'containers/App/selectors';
import BodySpacing from 'components/BodySpacing';
import GigsList from 'components/GigsList';

import DropA from './DropA';
import TdLeft from './TdLeft';
import Wrapper from './Wrapper';
import InputTop from './InputTop';
import Button from './Button';
import SearchImg from './SearchImg';
import ButtonWrapper from './ButtonWrapper';
import FilterForm from './FilterForm';
import TopTd from './TopTd';
import MobileNav from './MobileNav';
import search from './img/search.png';

export function GigsPage({ location, loading, error, gigs }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const urlFilter = location.search.slice(6, location.search.length);
  const allGigs =
    urlFilter.length > 0
      ? gigs.filter(obj => obj.subtypes.includes(urlFilter))
      : gigs;
  const searchGigs = [];
  gigs.forEach(item =>
    searchGigs.push({ name: item.gig, id: item.id, show: true }),
  );

  const [state, setState] = React.useState({
    gigs: allGigs,
    searchList: searchGigs,
    showSearchList: false,
    numCards: 20,
    showMobile: false,
  });

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
    });
  };

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

  const HideableTr = styled.tr`
    display: ${state.showMobile ? '' : 'none'};
  `;

  const main = (
    <React.Fragment>
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
      {state.numCards < state.gigs.length ? (
        <ButtonWrapper>
          <Button onClick={loadMore}>
            <p>Load More</p>
          </Button>
        </ButtonWrapper>
      ) : null}
    </React.Fragment>
  );

  return (
    <div>
      <Helmet>
        <title>Discover New Work</title>
        <meta
          name="description"
          content="From charging scooters to professional remote freelancing, thanks to the explosion of the gig economy there are opportunities for any individual with any skill set to start earning on their own terms."
        />
      </Helmet>
      {isMobile ? <MobileNav action={toggleMobile} /> : null}
      <BodySpacing>
        <table>
          <tbody>
            {isMobile ? (
              <React.Fragment>
                <HideableTr>
                  <TopTd>
                    <FilterForm />
                  </TopTd>
                </HideableTr>
                <tr>
                  <TdLeft>{main}</TdLeft>
                </tr>
              </React.Fragment>
            ) : (
              <tr>
                <TdLeft>{main}</TdLeft>
                <TopTd>
                  <FilterForm />
                </TopTd>
              </tr>
            )}
          </tbody>
        </table>
      </BodySpacing>
    </div>
  );
}

GigsPage.propTypes = {
  location: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  gigs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
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
