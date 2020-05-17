import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import H2 from 'components/H2';

const Wrapper = styled.div`
  margin: 50px;
  @media (max-width: 768px) {
    margin: 30px 10px;
  }
`;

export function Interested({ item }) {
  return (
    <Wrapper>
      <div style={{ marginBottom: '-10px' }}>
        <H2>You Might Also Be Interested In...</H2>
      </div>
      {item}
    </Wrapper>
  );
}

Interested.propTypes = {
  item: PropTypes.any,
};

export default Interested;
