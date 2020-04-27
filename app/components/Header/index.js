/**
 *
 * Header
 *
 * Displays NextWrk.com's header image
 */

import React from 'react';

import Img from './Img';
import Banner from './img/banner.png';

function Header() {
  return <Img src={Banner} alt="NextWrk - Logo" />;
}

export default Header;
