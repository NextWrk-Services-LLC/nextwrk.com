/**
 *
 * NavBar.js
 *
 * This component is the top Navigation Bar for the entire website
 *
 */

import React, { memo, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { compose } from 'redux';

import Ul from 'components/Ul';

import NavBarLink from './NavBarLink';
import LogoLink from './LogoLink';
import Img from './Img';
import Wrapper from './Wrapper';
import ContentWrapper from './ContentWrapper';
import Li from './Li';
import DropDown from './DropDown';
import MobNav from './MobNav';

import Logo from './img/nwlogo.png';

function NavBar() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [show, toggleShow] = useState(false);

  return (
    <React.Fragment>
      <Wrapper>
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
              <MobNav href="/gigs">Gigs</MobNav>
            </Li>
            <Li>
              <MobNav href="/services">Services</MobNav>
            </Li>
            <Li>
              <MobNav href="/freelance">Freelance</MobNav>
            </Li>
            <Li>
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

export default compose(memo)(NavBar);
