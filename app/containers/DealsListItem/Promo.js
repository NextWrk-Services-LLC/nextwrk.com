import React from 'react';
import PropTypes from 'prop-types';

import CenterText from 'components/CenterText';
import Deal from 'containers/GigListItem/Deal';

function Promo({ promo }) {
  return (
    <CenterText>
      <hr style={{ border: '1px solid gray' }} /> <Deal>{promo}</Deal>
    </CenterText>
  );
}

Promo.propTypes = {
  promo: PropTypes.any,
};

export default Promo;
