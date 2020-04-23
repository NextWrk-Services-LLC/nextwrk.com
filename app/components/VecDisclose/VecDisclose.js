/**
 *
 * VecDisclose
 *
 */

import React, { memo, useState } from 'react';
import styled from 'styled-components';

const PLink = styled.p`
  color: #3b9ad5;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 14px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const A = styled.a`
  color: #3b9ad5;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

function VecDisclose() {
  const [show, toggleShow] = useState(false);

  return (
    <div>
      <PLink onClick={() => toggleShow(!show)}>Images Sources</PLink>
      {show ? (
        <div style={{ padding: '5px' }}>
          <A href="https://www.vecteezy.com/free-vector/working">
            Working Vectors by Vecteezy
          </A>
          <br />
          <A href="https://www.vecteezy.com/free-vector/cashback">
            Cashback Vectors by Vecteezy
          </A>
          <br />
          <A href="https://www.freepik.com/free-photos-vectors/people">
            People vector created by freepik - www.freepik.com
          </A>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

VecDisclose.propTypes = {};

export default memo(VecDisclose);
