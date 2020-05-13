import React from 'react';
import PropTypes from 'prop-types';

import Table from 'components/Popup/Table';

import H1 from './H1';

import GigLogo from './GigLogo';

function Header({ image, title }) {
  return (
    <Table>
      <tbody>
        <tr>
          <td>
            <GigLogo src={image} alt="Logo" />
          </td>
        </tr>
        <tr>
          <td>
            <H1>{title}</H1>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

Header.propTypes = {
  image: PropTypes.any,
  title: PropTypes.any,
};

export default Header;
