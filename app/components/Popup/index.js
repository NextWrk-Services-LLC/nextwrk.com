/**
 *
 * Popup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import H1 from 'components/H1';
import Button from 'components/Button';

const Outer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Inner = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 20px;
  background: white;
  @media (max-width: 768px) {
    left: 5%;
    right: 5%;
    rop: 15%;
    bottom: 15%;
  }
`;

function Popup({ close }) {
  return (
    <Outer onClick={close}>
      <Inner>
        <H1>Hello World!</H1>
        <Button>close me</Button>
      </Inner>
    </Outer>
  );
}

Popup.propTypes = {
  close: PropTypes.func,
};

export default Popup;
