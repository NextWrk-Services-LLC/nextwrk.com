import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import H2 from 'components/H2';
import GigsList from 'components/GigsList';

export function RentalServices({ services }) {
  return (
    <React.Fragment>
      <H2>Rental Services</H2>
      <GigsList {...services} />
    </React.Fragment>
  );
}

RentalServices.propTypes = {
  services: PropTypes.any,
};

export default compose(memo)(RentalServices);
