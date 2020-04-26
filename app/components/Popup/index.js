/**
 *
 * Popup
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import H1 from 'components/H1';
import H2 from 'components/H2';
import A from 'components/A';
import Button from 'components/Button';
import Img from './Img';

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
  z-index: 5;
`;

const Inner = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 15%;
  margin: auto;
  background: white;
  border: 1px solid #070600;
  border-radius: 20px;
  z-index: 6;
  padding: 20px 40px;
  @media (max-width: 768px) {
    left: 5%;
    right: 5%;
    top: 15%;
    padding: 5px 10px;
  }
`;

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 1px;
  text-align: center;
  width: 100%;
`;

const TdImg = styled.td`
  text-align: center;
`;

const Title = styled.div`
  text-align: center;
  margin-top: -25px;
  @media (max-width: 768px) {
    margin-top: -20px;
  }
`;

const TitleLeft = styled.div`
  text-align: left;
  margin-top: -25px;
  @media (max-width: 768px) {
    margin-top: -20px;
  }
`;

const P = styled.p`
  padding: 0px 10px;
  margin-top: -5px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

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

  return (
    <Outer>
      <Inner ref={wrapperRef}>
        <Table>
          <tbody>
            <tr>
              <TdImg>
                <Img src={info.logo} alt="Company - Logo" />
              </TdImg>
            </tr>
            <tr>
              <td>
                <Title>
                  <H1>{info.gig}</H1>
                </Title>
              </td>
            </tr>
            <tr>
              <td>
                <TitleLeft>
                  <H2>Description</H2>
                </TitleLeft>
              </td>
            </tr>
            <tr>
              <td>
                <TitleLeft>
                  <P>{info.description}</P>
                </TitleLeft>
              </td>
            </tr>
            {info.promo ? (
              <React.Fragment>
                <tr>
                  <td>
                    <TitleLeft>
                      <H2>Promotion</H2>
                    </TitleLeft>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TitleLeft>
                      <P>{info.promo}</P>
                    </TitleLeft>
                  </td>
                </tr>{' '}
              </React.Fragment>
            ) : (
              ''
            )}
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
                      <div style={{ padding: '0px 10px' }}>
                        <A href={info.indeed}>See What Others Have to Say</A>
                      </div>
                    </TitleLeft>
                  </td>
                </tr>
              </React.Fragment>
            ) : (
              ''
            )}
            <tr>
              <td>
                <TitleLeft>
                  <Button href={info.gigsite}>TRY IT OUT TODAY!</Button>
                </TitleLeft>
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
