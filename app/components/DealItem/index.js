/**
 *
 * DealItem
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import A from 'components/A';
import H3 from 'components/H3';
import Img from './Img';
import Logo from './company.png';

const Wrapper = styled.div`
  min-width: 25%;
  max-width: 275px;
  padding: 1% 2%;
  background: #ffffff;
  border: 1px solid #070600;
  border-radius: 5px;
  -moz-box-shadow: 1px 1px 3px grey;
  -webkit-box-shadow: 1px 1px 3px grey;
  box-shadow: 1px 1px 3px grey;
`;

function DealItem() {
  return (
    <Wrapper>
      <Img src={Logo} alt="Company - Logo" />
      <H3>Uber Driver</H3>
      <p>Uber Technologies</p>
      <p>
        Uber drivers move around town, transpoarting customers to their
        requested desitinations.
      </p>
      <A
        href={'https://www.indeed.com/cmp/'.concat('Uber', '/reviews')}
        target="_blank"
        rel="noopener noreferrer"
      >
        See what others have to say about this gig
      </A>
      <p>Sign Up With Promo Code PRGREY and Get $20</p>
    </Wrapper>
  );
}

DealItem.propTypes = {};

export default DealItem;
