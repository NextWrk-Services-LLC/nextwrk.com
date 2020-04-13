/**
 *
 * Footer
 *
 * Footer component for NextWrk.com
 */

import React from 'react';

import A from 'components/A';
import H2 from '../H2';
import CenterText from '../CenterText';
import Wrapper from './Wrapper';
import Img from './Img';
import Ul from './Ul';
import youtube from './youtube.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import instagram from './instagram.svg';

function Footer() {
  return (
    <Wrapper>
      <div>
        <p>NextWrk Services LLC</p>
        <Ul>
          <li>
            <A href="/#gigs">Gigs</A>
          </li>
          <li>
            <A href="/#services">Services</A>
          </li>
        </Ul>
      </div>
      <CenterText>
        <H2>Social</H2>
        <a
          href="https://www.facebook.com/NextWrk-110063513968010"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src={facebook} alt="NextWrk Facebook" />
        </a>
        <a
          href="https://www.instagram.com/nextwrkapp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src={instagram} alt="NextWrk Instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/nextwrkapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src={linkedin} alt="NextWrk Linkedin" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCqY2NC8ksD_tkDLxJ_xvakA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src={youtube} alt="NextWrk YouTube" />
        </a>
        <a
          href="https://twitter.com/WrkNext"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src={twitter} alt="NextWrk Twitter" />
        </a>
      </CenterText>
      <div>
        <p>Made with love by Georgia Tech students</p>
      </div>
    </Wrapper>
  );
}

export default Footer;
