import React from 'react';
import PropTypes from 'prop-types';

import Li from './Li';
import A from './A';

export function FilterSelect({ filter, name }) {
  return (
    <Li>
      <A href={`/gigs?fltr=${filter}`}>{name}</A>
    </Li>
  );
}

FilterSelect.propTypes = {
  filter: PropTypes.any,
  name: PropTypes.any,
};

export default FilterSelect;
