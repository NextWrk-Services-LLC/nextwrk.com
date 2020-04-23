import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import H2 from 'components/H2';
import GigsList from 'components/GigsList';

export function DrivingServices({ services }) {
  return (
    <React.Fragment>
      <H2>Driving Services</H2>
      <GigsList {...services} />
    </React.Fragment>
  );
}

DrivingServices.propTypes = {
  services: PropTypes.any,
};

export default compose(memo)(DrivingServices);
