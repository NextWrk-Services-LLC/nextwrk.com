import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import H2 from 'components/H2';
import GigsList from 'components/GigsList';

export function AllDeals({ deals }) {
  return (
    <React.Fragment>
      <H2>All Deals</H2>
      <GigsList {...deals} />
    </React.Fragment>
  );
}

AllDeals.propTypes = {
  deals: PropTypes.any,
};

export default compose(memo)(AllDeals);
