import React from 'react';
import PropTypes from 'prop-types';

import H2 from 'components/H1';

import P from './P';
import PSpacing from './PSpacing';

function PayInsights({ text }) {
  return (
    <React.Fragment>
      <H2>Pay Insights</H2>
      <PSpacing>
        <P>{text}</P>
      </PSpacing>
    </React.Fragment>
  );
}

PayInsights.propTypes = {
  text: PropTypes.any,
};

export default PayInsights;
