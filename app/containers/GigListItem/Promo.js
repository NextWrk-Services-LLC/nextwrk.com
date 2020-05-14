import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CenterText from 'components/CenterText';
import Deal from 'containers/GigListItem/Deal';

const Hr = styled.hr`
  border: 1px solid gray;
  &:hover {
    border: 1px solid gray;
  }
  &:active {
    border: 1px solid gray;
  }
`;

function Promo({ item }) {
  return (
    <CenterText>
      <Hr /> <Deal>{item.apppromo}</Deal>
      <Deal>{item.jobpromo}</Deal>
    </CenterText>
  );
}

Promo.propTypes = {
  item: PropTypes.any,
};

export default Promo;
