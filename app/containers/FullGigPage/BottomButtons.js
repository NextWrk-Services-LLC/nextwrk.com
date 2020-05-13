import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import H2 from 'components/H2';
import CenterText from 'components/CenterText';
import Table from 'components/Popup/Table';

import ButtonWrapper from './ButtonWrapper';
import H2Spacing from './H2Spacing';
import Button from './Button';
import BottomCenter from './BottomCenter';
import TableButton from './TableButton';

function BottomButtons({ info }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <ButtonWrapper>
      {isMobile ? (
        <React.Fragment>
          <BottomCenter>
            <H2Spacing>
              <H2>{info.jobpromo}</H2>
            </H2Spacing>
            <a href={info.gigsite}>
              <Button>{`Start Earning with ${info.gig}`}</Button>
            </a>
          </BottomCenter>
          <BottomCenter>
            <H2Spacing>
              <H2>{info.apppromo}</H2>
            </H2Spacing>
            <a href={info.appsite ? info.appsite : info.gigsite}>
              <Button>{`Start Using ${info.gig}`}</Button>
            </a>
          </BottomCenter>
        </React.Fragment>
      ) : (
        <Table>
          <tbody>
            <tr>
              <TableButton>
                <CenterText>
                  <H2>{info.apppromo}</H2>
                </CenterText>
                <a href={info.appsite ? info.appsite : info.gigsite}>
                  <Button>{`Start Using ${info.gig}`}</Button>
                </a>
              </TableButton>
              <TableButton>
                <CenterText>
                  <H2>{info.jobpromo}</H2>
                </CenterText>
                <a href={info.gigsite}>
                  <Button>{`Start Earning with ${info.gig}`}</Button>
                </a>
              </TableButton>
            </tr>
          </tbody>
        </Table>
      )}
    </ButtonWrapper>
  );
}

BottomButtons.propTypes = {
  info: PropTypes.any,
};

export default BottomButtons;
