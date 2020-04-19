import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import H2 from 'components/H2';
import GigsList from 'components/GigsList';

export function DrivingGigs({ gigs }) {
  return (
    <React.Fragment>
      <H2>Driving Gigs</H2>
      <GigsList {...gigs} />
    </React.Fragment>
  );
}

DrivingGigs.propTypes = {
  gigs: PropTypes.any,
};

export default compose(memo)(DrivingGigs);
