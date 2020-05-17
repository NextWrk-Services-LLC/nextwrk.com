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
import WorkIcon from '@material-ui/icons/Work';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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
            <Img src={Logo} alt="NextWrk Icon Png" />
          </LogoLink>
          {isMobile ? (
            <NavBarLink onClick={() => toggleShow(!show)} href="#">
              ☰
            </NavBarLink>
          ) : (
            <React.Fragment>
              <NavBarLink href="/deals">
                <div>
                  <AttachMoneyIcon />
                </div>
                <div>Wallet Stuffers</div>
              </NavBarLink>
              <NavBarLink href="/services">
                <div>
                  <PhoneAndroidIcon />
                </div>
                <div>Services</div>
              </NavBarLink>
              <NavBarLink href="/gigs">
                <div>
                  <WorkIcon />
                </div>
                <div>New Work</div>
              </NavBarLink>
            </React.Fragment>
          )}
        </ContentWrapper>
      </Wrapper>
      {show ? (
        <DropDown>
          <Ul>
            <Li>
              <div style={{ marginBottom: '-18px' }}>
                <MobNav href="/gigs">New Work</MobNav>
                <hr style={{ border: '1px solid white' }} />
              </div>
            </Li>
            <Li>
              <div style={{ marginBottom: '-18px' }}>
                <MobNav href="/services">Services</MobNav>
                <hr style={{ border: '1px solid white' }} />
              </div>
            </Li>
            <Li>
              <div style={{ marginBottom: '10px' }}>
                <MobNav href="/deals">Wallet Stuffers</MobNav>
              </div>
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
