import React from 'react';
import PropTypes from 'prop-types';

import H2 from 'components/H3';

import PSpacing from './PSpacing';
import PSm from '../../components/Popup/PSm';

function AppPromo({ text }) {
  return (
    <React.Fragment>
      <H2>App Promotion Terms</H2>
      <PSpacing>
        <PSm>{text}</PSm>
      </PSpacing>
    </React.Fragment>
  );
}

AppPromo.propTypes = {
  text: PropTypes.any,
};

export default AppPromo;
