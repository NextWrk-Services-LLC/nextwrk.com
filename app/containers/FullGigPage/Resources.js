import React from 'react';
import PropTypes from 'prop-types';

import H2 from 'components/H2';

import PSpacing from './PSpacing';
import Ul from './Ul';
import ASm from './ASm';
import Li from './Li';

function Resources({ items }) {
  return (
    <React.Fragment>
      <H2>Resources</H2>
      <PSpacing>
        <Ul>
          {items.map(item => (
            <Li key={item.title}>
              <ASm href={item.link}>{item.title}</ASm>
            </Li>
          ))}
        </Ul>
      </PSpacing>
    </React.Fragment>
  );
}

Resources.propTypes = {
  items: PropTypes.any,
};

export default Resources;
