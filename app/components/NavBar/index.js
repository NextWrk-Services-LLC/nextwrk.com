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

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background: #4da3d9;
  border-bottom: 1px solid #070600;
  position: fixed;
  z-index: 2;
  @media (max-width: 768px) {
    position: static;
    height: 32px;
  }
`;

const ContentWrapper = styled.div`
  width: min(1070px, 90vw);
  min-width: 250px;
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
        <NavBarLink href="/deals">Deals</NavBarLink>
        <NavBarLink href="/freelance">Freelance</NavBarLink>
        <NavBarLink href="/services">Services</NavBarLink>
        <NavBarLink href="/gigs">Gigs</NavBarLink>
      </ContentWrapper>
    </Wrapper>
  );
}

NavBar.propTypes = {};

export default memo(NavBar);
