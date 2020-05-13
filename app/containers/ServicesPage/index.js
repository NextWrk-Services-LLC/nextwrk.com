/**
 *
 * ServicesPage
 *
 * Services Page for NextWrk.com, displays and lets users search through services for gig workers
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectServices,
  makeSelectLoading,
  makeSelectError,
  makeSelectGigs,
  makeSelectLocation,
} from 'containers/App/selectors';
import BodySpacing from 'components/BodySpacing';
import CenterText from 'components/CenterText';
import ServicesList from 'components/ServicesList';
import H1 from 'components/H1';
import SearchImg from 'containers/GigsPage/SearchImg';
import InputTop from 'containers/GigsPage/InputTop';
import DropA from 'containers/GigsPage/DropA';
import search from 'containers/GigsPage/img/search.png';

import Wrapper from './Wrapper';
import Img from './Img';
import SearchTd from './SearchTd';
import servicesheader from './img/servicesheader.png';

export function ServicesPage({ location, loading, error, services, gigs }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const allServices = services.filter(obj => obj.id.startsWith('S'));
  const searchGigs = [];
  gigs.forEach(item =>
    searchGigs.push({ name: item.gig, id: item.id, show: true }),
  );
  const gigId = location.search.slice(6, 11);
  const selectedGig = gigs.filter(obj => obj.id.includes(gigId))[0];
  const serviceIds = selectedGig.services;

  const servicesProps = {
    loading,
    error,
    gigs:
      gigId.length === 5
        ? allServices.filter(obj => serviceIds.includes(obj.id))
        : allServices,
  };

  const [state, setState] = React.useState({
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

  const SearchFld = (
    <React.Fragment>
      <Wrapper>
        <SearchImg src={search} alt="Search" />
        <InputTop
          type="text"
          onChange={textChange}
          placeholder="Services For Which Gig?"
          id="srchfld"
          autocomplete="off"
        />
      </Wrapper>
      <LinkDropdown id="myDropdown">
        {state.searchList.map(item =>
          item.show ? (
            <DropA key={item.id} href={`/services?fltr=${item.id}`}>
              {item.name}
            </DropA>
          ) : null,
        )}
      </LinkDropdown>
    </React.Fragment>
  );

  return (
    <div>
      <Helmet>
        <title>Discover Services for Gig Workers</title>
        <meta
          name="description"
          content="Gig workers need help too, and the market definitely realizes this. There are more and more services available to help gig workers improve and maximize their returns. NextWrk's Services Page exposees individuals to new services to ensure they're always a step ahead!"
        />
      </Helmet>
      <Img src={servicesheader} alt="Services Page Header" />
      <BodySpacing>
        <CenterText>
          {gigId.length === 5 ? (
            <H1>{`${selectedGig.gig} Services`}</H1>
          ) : (
            <H1>Search for Services</H1>
          )}
        </CenterText>
        {isMobile ? (
          <div>
            {SearchFld}
            {gigId.length === 5 ? (
              <ServicesList {...servicesProps} />
            ) : null}{' '}
          </div>
        ) : (
          <table>
            <tbody>
              <tr>
                <SearchTd>{SearchFld}</SearchTd>
                <td>
                  {gigId.length === 5 ? (
                    <ServicesList {...servicesProps} />
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </BodySpacing>
    </div>
  );
}

ServicesPage.propTypes = {
  location: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  services: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  gigs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  services: makeSelectServices(),
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
)(ServicesPage);
