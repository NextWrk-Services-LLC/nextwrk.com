import React from 'react';
import PropTypes from 'prop-types';

import H1 from 'components/H2';

import P from './P';
import PSpacing from './PSpacing';

function GigDesc({ text }) {
  return (
    <React.Fragment>
      <H1>Gig Description</H1>
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
