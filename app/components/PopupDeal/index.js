/**
 *
 * Popup
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import H1 from 'components/H0';
import H3 from 'components/H3';
import H12 from 'components/H12';
import A from 'components/Popup/A';
import Img from 'components/Popup/Img';
import P from 'components/Popup/P';
import TdImg from 'components/Popup/TdImg';
import Table from 'components/Popup/Table';
import Outer from 'components/Popup/Outer';
import Inner from 'components/Popup/Inner';
import Title from 'components/Popup/Title';
import TitleLeft from 'components/Popup/TitleLeft';
import Button from 'components/Popup/Button';
import ButtonWrapper from 'components/Popup/ButtonWrapper';
import ReviewWrapper from 'components/Popup/ReviewWrapper';
import PSpacing from 'components/Popup/PSpacing';
import PSm from 'components/Popup/PSm';

function PopupDeal({ close, info }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          close();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const images = require.context('../../images/Logos', true);
  let logo = images(`./nw.png`);
  try {
    logo = images(`./${info.id}.png`);
  } catch {
    logo = images(`./nw.png`);
  }

  return (
    <Outer>
      <Inner ref={wrapperRef}>
        <Table>
          <tbody>
            <tr>
              <TdImg>
                <Img src={logo} alt="Company - Logo" />
              </TdImg>
            </tr>
            <tr>
              <td>
                <Title>
                  <H1>{info.gig}</H1>
                </Title>
                <hr />
              </td>
            </tr>
            <tr>
              <td>
                <PSpacing>
                  <P>{info.description}</P>
                </PSpacing>
              </td>
            </tr>
            {info.indeed ? (
              <tr>
                <td>
                  <TitleLeft>
                    <ReviewWrapper>
                      <br />
                      <A href={info.indeed}>See What Others Have to Say</A>
                    </ReviewWrapper>
                  </TitleLeft>
                </td>
              </tr>
            ) : null}
            {info.promo ? (
              <React.Fragment>
                <tr>
                  <td>
                    <ButtonWrapper>
                      <H12>{info.promo}</H12>
                    </ButtonWrapper>
                  </td>
                </tr>
              </React.Fragment>
            ) : null}
            <tr>
              <td>
                <ButtonWrapper>
                  <Button href={info.gigsite}>TRY IT OUT</Button>
                </ButtonWrapper>
              </td>
            </tr>
            {info.terms ? (
              <td>
                <tr>
                  <hr />
                  <div style={{ textAlign: 'left' }}>
                    <H3>Promotion Terms</H3>
                    <div style={{ marginTop: '-15px' }}>
                      <PSm>{info.terms}</PSm>
                    </div>
                  </div>
                </tr>
              </td>
            ) : null}
          </tbody>
        </Table>
      </Inner>
    </Outer>
  );
}

PopupDeal.propTypes = {
  close: PropTypes.func,
  info: PropTypes.any,
};

export default PopupDeal;
