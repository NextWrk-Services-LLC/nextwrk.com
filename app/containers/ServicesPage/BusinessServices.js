import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import H2 from 'components/H2';
import GigsList from 'components/GigsList';

export function BusinessServices({ services }) {
  return (
    <React.Fragment>
      <H2>Business Services</H2>
      <GigsList {...services} />
    </React.Fragment>
  );
}

BusinessServices.propTypes = {
  services: PropTypes.any,
};

export default compose(memo)(BusinessServices);
