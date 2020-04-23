import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import H2 from 'components/H2';
import GigsList from 'components/GigsList';

export function OtherServices({ services }) {
  return (
    <React.Fragment>
      <H2>Other Services</H2>
      <GigsList {...services} />
    </React.Fragment>
  );
}

OtherServices.propTypes = {
  services: PropTypes.any,
};

export default compose(memo)(OtherServices);
