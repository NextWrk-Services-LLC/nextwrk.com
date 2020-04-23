/**
 *
 * Footer
 *
 * Footer component for NextWrk.com
 */

import React from 'react';

import A from 'components/A';
import Ul from 'components/Ul';
import H2 from 'components/H1';
import CenterText from 'components/CenterText';
import AdDisclose from 'components/AdDisclose';
import VecDisclose from 'components/VecDisclose/VecDisclose';
import Li from './Li';
import Wrapper from './Wrapper';
import Img from './Img';
import SocialLink from './SocialLink';
import youtube from './youtube.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import instagram from './instagram.svg';
import nextwrk from './nextwork.png';

function Footer() {
  return (
    <React.Fragment>
      <Wrapper>
        <div style={{ float: 'left', width: '50%' }}>
          <Ul>
            <Li>
              <A href="/gigs">Gigs</A>
            </Li>
            <Li>
              <A href="/services">Services</A>
            </Li>
            <Li>
              <A href="/freelance">Freelance Networks</A>
            </Li>
            <Li>
              <A href="/deals">Deals</A>
            </Li>
            <Li />
            <Li>
              <AdDisclose />
            </Li>
            <Li>
              <VecDisclose />
            </Li>
            <Li>
              <A href="/terms-of-service">Terms of Service</A>
            </Li>
            <Li>
              <A href="/privacy-policy">Privacy Policy</A>
            </Li>
          </Ul>
        </div>
        <div style={{ float: 'left', width: '50%', textAlign: 'left' }}>
          <H2>Contact Us!</H2>
          <Ul>
            <Li>Email: contact@nextwrk.com</Li>
            <Li>Phone: (678) 699-6447</Li>
            <Li>Atlanta, GA 30313</Li>
          </Ul>
          <SocialLink
            link="https://www.facebook.com/NextWrk-110063513968010"
            content={<Img src={facebook} alt="NextWrk Facebook" />}
          />
          <SocialLink
            link="https://www.instagram.com/nextwrkapp/"
            content={<Img src={instagram} alt="NextWrk Instagram" />}
          />
          <SocialLink
            link="https://www.linkedin.com/company/nextwrkapp"
            content={<Img src={linkedin} alt="NextWrk Linkedin" />}
          />
          <SocialLink
            link="https://www.youtube.com/channel/UCqY2NC8ksD_tkDLxJ_xvakA"
            content={<Img src={youtube} alt="NextWrk YouTube" />}
          />
          <SocialLink
            link="https://twitter.com/WrkNext"
            content={<Img src={twitter} alt="NextWrk Twitter" />}
          />
        </div>
      </Wrapper>
      <CenterText>
        <img src={nextwrk} style={{ width: '200px' }} alt="NextWrk Logo" />
        <p style={{ fontSize: '12px' }}>
          NextWrk Services LLC © 2020, All Rights Reserved
        </p>
      </CenterText>
    </React.Fragment>
  );
}

export default Footer;
