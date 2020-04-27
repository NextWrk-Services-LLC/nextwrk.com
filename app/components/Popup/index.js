/**
 *
 * Popup
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import H1 from 'components/H1';
import H2 from 'components/H2';
import Button from 'components/Button';
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
                      <div style={{ padding: '0px 10px 16px 10px' }}>
                        <A href={info.indeed}>See What Others Have to Say</A>
                      </div>
                    </TitleLeft>
                  </td>
                </tr>
              </React.Fragment>
            ) : (
              ''
            )}
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
                            <Li>
                              <A href={item.link}>{item.title}</A>
                            </Li>
                          ))}
                        </Ul>
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
