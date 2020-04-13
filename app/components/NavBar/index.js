/**
 *
 * NavBar.js
 *
 * This component is the top Navigation Bar for the entire website
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import NavBarLink from './NavBarLink';
import LogoLink from './LogoLink';
import Img from './Img';
import Logo from './nwlogo.png';
import gigs from './gigs.svg';
import services from './services.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background: #4da3d9;
  border-bottom: 1px solid #070600;
  position: fixed;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  width: min(1100px, 100vw);
  margin: auto;
  text-align: center;
`;

function NavBar() {
  return (
    <Wrapper>
      <ContentWrapper>
        <LogoLink to="/">
          <Img src={Logo} alt="NextWrk - Logo" />
        </LogoLink>
        <NavBarLink href="#services">
          <div style={{ paddingTop: '5px' }}>
            <img src={services} alt="Services Icon" />
            <br />
            <div style={{ paddingTop: '5px' }}>Services</div>
          </div>
        </NavBarLink>
        <NavBarLink href="#gigs">
          <img src={gigs} alt="Gigs Icon" />
          {'Gigs'}
        </NavBarLink>
        {/* <NavBarLink to="/">Gigs</NavBarLink>
        <NavBarLink to="/services">Services</NavBarLink>
        <NavBarLink to="/deals">Deals</NavBarLink>
        <NavBarLink to="/freelance">Freelance</NavBarLink> */}
      </ContentWrapper>
    </Wrapper>
  );
}

NavBar.propTypes = {};

export default memo(NavBar);
