/**
 *
 * NavBar.js
 *
 * This component is the top Navigation Bar for the entire website
 *
 */

import React, { memo, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { toggleMobNav } from '../../containers/App/actions';
import NavBarLink from './NavBarLink';
import LogoLink from './LogoLink';
import Img from './Img';
import Logo from './nwlogo.png';

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background: #4da3d9;
  border-bottom: 1px solid #070600;
  position: fixed;
  z-index: 2;
  @media (max-width: 768px) {
    position: static;
    border-bottom: 1px solid #4da3d9;
  }
`;

const ContentWrapper = styled.div`
  width: min(1070px, 90vw);
  min-width: 250px;
  margin: auto;
  text-align: center;
`;

const MobNav = styled.a`
  text-decoration: none;
  color: #3b9ad5;
`;

const DropDown = styled.div`
  text-align: center;
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const Li = styled.li`
  font-size: 20px;
  padding: 10px;
`;

function NavBar({ onToggleNav }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [show, toggleShow] = useState(false);

  return (
    <React.Fragment>
      <Wrapper onClick={onToggleNav}>
        <ContentWrapper>
          <LogoLink to="/">
            <Img src={Logo} alt="NextWrk - Logo" />
          </LogoLink>
          {isMobile ? (
            <NavBarLink onClick={() => toggleShow(!show)} href="#">
              ☰
            </NavBarLink>
          ) : (
            <React.Fragment>
              <NavBarLink href="/deals">Deals</NavBarLink>
              <NavBarLink href="/freelance">Freelance</NavBarLink>
              <NavBarLink href="/services">Services</NavBarLink>
              <NavBarLink href="/gigs">Gigs</NavBarLink>
            </React.Fragment>
          )}
        </ContentWrapper>
      </Wrapper>
      {show ? (
        <DropDown>
          <Ul>
            <Li>
              {' '}
              <MobNav href="/gigs">Gigs</MobNav>
            </Li>
            <Li>
              <MobNav href="/services">Services</MobNav>
            </Li>
            <Li>
              {' '}
              <MobNav href="/freelance">Freelance</MobNav>
            </Li>
            <Li>
              {' '}
              <MobNav href="/deals">Deals</MobNav>
            </Li>
          </Ul>
        </DropDown>
      ) : (
        ''
      )}
    </React.Fragment>
  );
}

NavBar.propTypes = {
  onToggleNav: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onToggleNav: () => dispatch(toggleMobNav()),
  };
}

const withConnect = connect(mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(NavBar);
