/**
 *
 * Footer
 *
 * Footer component for NextWrk.com
 */

import React from 'react';

import A from 'components/A';
import Wrapper from './Wrapper';
import Img from './Img';
import Ul from './Ul';
import SocialLink from './SocialLink';
import youtube from './youtube.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import instagram from './instagram.svg';

function Footer() {
  return (
    <React.Fragment>
      <Wrapper>
        <div>
          <Ul>
            <li>
              <A href="/gigs">Gigs</A>
            </li>
            <li>
              <A href="/services">Services</A>
            </li>
          </Ul>
        </div>
        <div>
          <p>
            Email: contact@nextwrk.com
            <br />
            Phone: (678) 699-6447
            <br />
            Atlanta, GA 30313
          </p>
        </div>
        <div>
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
      <p style={{ fontSize: '12px' }}>
        NextWrk Services LLC © 2020, All Rights Reserved
      </p>
    </React.Fragment>
  );
}

export default Footer;
