import React from 'react';
import PropTypes from 'prop-types';

import H2 from 'components/H2';

import P from './P';
import PSpacing from './PSpacing';

function GigDesc({ text }) {
  return (
    <React.Fragment>
      <H2>Gig Description</H2>
      <PSpacing>
        <P>{text}</P>
      </PSpacing>
    </React.Fragment>
  );
}

GigDesc.propTypes = {
  text: PropTypes.any,
};

export default GigDesc;
