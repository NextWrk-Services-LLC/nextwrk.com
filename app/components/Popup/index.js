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
import Ul from 'components/Ul';
import Li from 'components/Li';
import A from './A';
import Img from './Img';
import P from './P';
import TdImg from './TdImg';
import Table from './Table';
import Outer from './Outer';
import Inner from './Inner';
import Title from './Title';
import TitleLeft from './TitleLeft';

const Button = styled.a`
  border-radius: 60px;
  border: none;
  background: #3b9ad5;
  color: #fff;
  padding: 10px 20px;
  outline: none;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    box-shadow: 0px 0px 3px gray;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-weight: normal;
    font-size: 16px;
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
                <hr />
              </td>
            </tr>
            <tr>
              <td>
                <div style={{ textAlign: 'left', paddingTop: '10px' }}>
                  <P>{info.description}</P>
                </div>
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
                </tr>
              </React.Fragment>
            ) : null}
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
                      <div style={{ padding: '0px 10px 16px 10px' }}>
                        <A href={info.indeed}>See What Others Have to Say</A>
                      </div>
                    </TitleLeft>
                  </td>
                </tr>
              </React.Fragment>
            ) : null}
            {info.resources ? (
              <React.Fragment>
                <tr>
                  <td>
                    <TitleLeft>
                      <H2>Resources</H2>
                    </TitleLeft>
                  </td>
                </tr>
                <tr>
                  <td>
                    <TitleLeft>
                      <div style={{ padding: '0px 10px' }}>
                        <Ul>
                          {info.resources.map(item => (
                            <Li key={`resources-${item.title}`}>
                              <A href={item.link}>{item.title}</A>
                            </Li>
                          ))}
                        </Ul>
                      </div>
                    </TitleLeft>
                  </td>
                </tr>
              </React.Fragment>
            ) : null}
            <tr>
              <td>
                <div style={{ textAlign: 'center' }}>
                  <Button href={info.gigsite}>TRY IT OUT</Button>
                </div>
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
