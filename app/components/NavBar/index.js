/**
 *
 * NavBar
 *
 * This component is the top Navigation Bar for the entire website
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

import NavBarLink from './NavBarLink';
import LogoLink from './LogoLink';
import Img from './Img';
import Logo from './whitelogo.png';

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background: #3b9ad5;
  border-bottom: 1px solid #070600;
  position: fixed;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  width: 1100px;
  margin: auto;
`;

function NavBar() {
  return (
    <Wrapper>
      <ContentWrapper>
        <LogoLink to="/">
          <Img src={Logo} alt="NextWrk - Logo" />
        </LogoLink>
        <NavBarLink to="/">Gigs</NavBarLink>
        <NavBarLink to="/features">Services</NavBarLink>
        <NavBarLink to="/">Deals</NavBarLink>
        <NavBarLink to="/features">Freelance</NavBarLink>
      </ContentWrapper>
    </Wrapper>
  );
}

NavBar.propTypes = {};

export default memo(NavBar);
