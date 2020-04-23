import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import H2 from 'components/H2';
import GigsList from 'components/GigsList';

export function AllFreelance({ freelance }) {
  return (
    <React.Fragment>
      <H2>All Freelance Networks</H2>
      <GigsList {...freelance} />
    </React.Fragment>
  );
}

AllFreelance.propTypes = {
  freelance: PropTypes.any,
};

export default compose(memo)(AllFreelance);
