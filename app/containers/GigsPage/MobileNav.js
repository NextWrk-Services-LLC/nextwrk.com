import React from 'react';
import PropTypes from 'prop-types';

import FilterBtn from './FilterBtn';
import NavBarWrapper from './NavBarWrapper';

function MobileNav({ action }) {
  return (
    <NavBarWrapper>
      <FilterBtn type="submit" onClick={action}>
        Filter
      </FilterBtn>
    </NavBarWrapper>
  );
}

MobileNav.propTypes = {
  action: PropTypes.any,
};

export default MobileNav;
