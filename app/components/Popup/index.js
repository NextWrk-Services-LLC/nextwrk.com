/**
 *
 * Popup
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import CenterText from 'components/CenterText';
import H1 from 'components/H1';
import H2 from 'components/H2';
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
              <React.Fragment>
                <tr>
                  <td>
                    <TitleLeft>
                      <H2>Reviews</H2>
                    </TitleLeft>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TitleLeft>
                      <ReviewWrapper>
                        <A href={info.indeed}>See What Others Have to Say</A>
                      </ReviewWrapper>
                    </TitleLeft>
                  </td>
                </tr>
              </React.Fragment>
            ) : null}
            {info.promo ? (
              <React.Fragment>
                <tr>
                  <td>
                    <CenterText>
                      <H2>{info.promo}</H2>
                    </CenterText>
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
