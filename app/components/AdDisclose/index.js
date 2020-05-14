/**
 *
 * AdDisclose
 *
 */

import React, { memo, useState } from 'react';
import styled from 'styled-components';

import P from './P';

const PLink = styled.p`
  color: #3b9ad5;
  margin: 0;
  padding: 0;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

function AdDisclose() {
  const [show, toggleShow] = useState(false);

  return (
    <div>
      <PLink onClick={() => toggleShow(!show)}>Advertiser Disclosure</PLink>
      {show ? (
        <div style={{ padding: '5px' }}>
          <P>
            NextWrk is a free service that connects users with their best
            avenues for success in the rapidly evolving gig economy. In many
            cases, NextWrk receives compensation from partners when our users
            click on their links or subscribe to their products and services.
            NextWrk takes reasonable steps to maintain accurate information, but
            does not itself provide or guarantee any third-party product or
            service. When you click on the provided link, you can review all of
            the important terms and conditions on the providers website.
          </P>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

AdDisclose.propTypes = {};

export default memo(AdDisclose);
