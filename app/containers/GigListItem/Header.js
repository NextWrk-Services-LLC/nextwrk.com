import React from 'react';
import PropTypes from 'prop-types';

import H2 from 'components/H2';

import Table from './Table';
import TdImg from './TdImg';
import Img from './Img';
import Title from './Title';

function Header({ image, name }) {
  return (
    <Table>
      <tbody>
        <tr>
          <TdImg>
            <Img src={image} alt={`${name} Logo Png`} />
          </TdImg>
          <td>
            <Title>
              <H2>{name}</H2>
            </Title>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

Header.propTypes = {
  image: PropTypes.any,
  name: PropTypes.any,
};

export default Header;
