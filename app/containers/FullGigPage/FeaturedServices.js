import React from 'react';
import PropTypes from 'prop-types';

import H2 from 'components/H2';

function FeaturedServices({ id, list }) {
  return (
    <React.Fragment>
      <H2>
        Useful Services{' '}
        <a style={{ color: `#3b9ad5` }} href={`/services?fltr=${id}`}>
          (See More Here)
        </a>
      </H2>
      <div style={{ marginTop: '-10px', textAlign: 'center' }}>{list}</div>
    </React.Fragment>
  );
}

FeaturedServices.propTypes = {
  id: PropTypes.any,
  list: PropTypes.any,
};

export default FeaturedServices;
