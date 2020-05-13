import React from 'react';
import PropTypes from 'prop-types';

import H2 from 'components/H2';

import P from './P';
import PSpacing from './PSpacing';

function AppDesc({ text }) {
  return (
    <React.Fragment>
      <H2>App Description</H2>
      <PSpacing>
        <P>{text}</P>
      </PSpacing>
    </React.Fragment>
  );
}

AppDesc.propTypes = {
  text: PropTypes.any,
};

export default AppDesc;
