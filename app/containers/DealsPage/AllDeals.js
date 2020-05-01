import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import GigsList from 'components/GigsList';

export function AllDeals({ deals }) {
  return (
    <React.Fragment>
      <GigsList {...deals} />
    </React.Fragment>
  );
}

AllDeals.propTypes = {
  deals: PropTypes.any,
};

export default compose(memo)(AllDeals);
