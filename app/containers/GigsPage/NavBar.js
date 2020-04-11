import React from 'react';
import styled from 'styled-components';

import NavBarLink from './NavBarLink';

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background: #ffffff;
  border: 1px solid #070600;
`;

const ContentWrapper = styled.div`
  width: 1100px;
  margin: auto;
`;

function NavBar() {
  return (
    <Wrapper>
      <ContentWrapper>
        <NavBarLink>Driving</NavBarLink>
        <NavBarLink>No Car</NavBarLink>
        <NavBarLink>Property</NavBarLink>
        <NavBarLink>Other</NavBarLink>
      </ContentWrapper>
    </Wrapper>
  );
}

NavBar.propTypes = {};

export default NavBar;
