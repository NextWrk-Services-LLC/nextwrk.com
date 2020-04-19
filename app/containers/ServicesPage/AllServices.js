import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import H2 from 'components/H2';
import GigsList from 'components/GigsList';

export function AllServices({ services }) {
  return (
    <React.Fragment>
      <H2>All Services</H2>
      <GigsList {...services} />
    </React.Fragment>
  );
}

AllServices.propTypes = {
  services: PropTypes.any,
};

export default compose(memo)(AllServices);
