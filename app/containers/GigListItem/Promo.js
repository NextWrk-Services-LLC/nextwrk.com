import React from 'react';
import PropTypes from 'prop-types';

import CenterText from 'components/CenterText';
import Deal from 'containers/GigListItem/Deal';

function Promo({ item }) {
  return (
    <CenterText>
      <hr /> <Deal>{item.apppromo}</Deal>
      <Deal>{item.jobpromo}</Deal>
    </CenterText>
  );
}

Promo.propTypes = {
  item: PropTypes.any,
};

export default Promo;
