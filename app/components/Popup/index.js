/**
 *
 * Popup
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import H1 from 'components/H0';
import H12 from 'components/H12';
import H2 from 'components/H3';
import PSm from './PSm';
import A from './A';
import Img from './Img';
import P from './P';
import TdImg from './TdImg';
import Table from './Table';
import Outer from './Outer';
import Inner from './Inner';
import Title from './Title';
import TitleLeft from './TitleLeft';
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';
import ReviewWrapper from './ReviewWrapper';
import PSpacing from './PSpacing';

function Popup({ close, info }) {
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
              <tr style={{ textAlign: 'left' }}>
                <td>
                  <hr />
                  <H2>Promotion Terms</H2>
                  <PSm>{info.terms}</PSm>
                </td>
              </tr>
            ) : null}
          </tbody>
        </Table>
      </Inner>
    </Outer>
  );
}

Popup.propTypes = {
  close: PropTypes.func,
  info: PropTypes.any,
};

export default Popup;
