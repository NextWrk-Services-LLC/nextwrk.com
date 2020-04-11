import React from 'react';
import styled from 'styled-components';

import H1 from './H1';

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  margin-top: 1%;
  text-align: center;
  color: #3b9ad5;
  background: #d3e9f6;
  border: 1px solid #070600;
`;

function Header() {
  return (
    <Wrapper>
      <H1>Discover Your Next Gig</H1>
    </Wrapper>
  );
}

Header.propTypes = {};

export default Header;
