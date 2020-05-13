import React from 'react';
import PropTypes from 'prop-types';

import H2 from 'components/H2';

import GigFilter from './GigFilter';

export function FilterTitle({ title }) {
  return (
    <GigFilter>
      <H2>{title}</H2>
    </GigFilter>
  );
}

FilterTitle.propTypes = {
  title: PropTypes.any,
};

export default FilterTitle;
