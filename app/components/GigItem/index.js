/**
 *
 * GigItem
 *
 */

import React from 'react';
import styled from 'styled-components';

import CenterText from 'components/CenterText';
import A from 'components/A';
import H3 from 'components/H3';
import P from './P';
import Img from './Img';
import Logo from './company.png';

const Spacing = styled.div`
  padding: 3px;
`;

const Wrapper = styled.li`
  min-width: 23%;
  max-width: 270px;
  padding: 10px 15px;
  background: #ffffff;
  border: 1px solid #070600;
  border-radius: 5px;
  -moz-box-shadow: 1px 1px 3px grey;
  -webkit-box-shadow: 1px 1px 3px grey;
  box-shadow: 1px 1px 3px grey;
`;

function GigItem() {
  return (
    <Spacing>
      <Wrapper>
        <Img src={Logo} alt="Company - Logo" />
        <H3>Uber Driver</H3>
        <P>
          Drive around town, transporting customers to their requested
          destinations.
        </P>
        <CenterText>
          <A
            href={'https://www.indeed.com/cmp/'.concat('Uber', '/reviews')}
            target="_blank"
            rel="noopener noreferrer"
          >
            See what others have to say
          </A>
          <p>
            {'Sign Up With Promo Code '.concat('PRGREY', ' and Get ', '$20')}
          </p>
          <A
            href={'https://www.'.concat('uber.com/drive')}
            target="_blank"
            rel="noopener noreferrer"
          >
            TRY IT OUT
          </A>
        </CenterText>
      </Wrapper>
    </Spacing>
  );
}

GigItem.propTypes = {};

export default GigItem;
