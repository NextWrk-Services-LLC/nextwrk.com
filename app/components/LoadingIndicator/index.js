/**
 *
 * LoadingIndicator.js
 *
 * Renders loading animation
 */

import React from 'react';
import styled from 'styled-components';

import Circle from './Circle';
import Wrapper from './Wrapper';

import logo from './nw.png';

const Outer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgb(256, 256, 256);
  z-index: 5;
`;

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 15px;
  text-align: center;
`;

const LoadingIndicator = () => (
  <Outer>
    <Wrapper>
      <Table>
        <tbody>
          <tr>
            <td>
              <Circle />
              <Circle rotate={30} delay={-1.1} />
              <Circle rotate={60} delay={-1} />
              <Circle rotate={90} delay={-0.9} />
              <Circle rotate={120} delay={-0.8} />
              <Circle rotate={150} delay={-0.7} />
              <Circle rotate={180} delay={-0.6} />
              <Circle rotate={210} delay={-0.5} />
              <Circle rotate={240} delay={-0.4} />
              <Circle rotate={270} delay={-0.3} />
              <Circle rotate={300} delay={-0.2} />
              <Circle rotate={330} delay={-0.1} />
            </td>
          </tr>
          <tr>
            <td>
              <img
                style={{
                  marginTop: '20px',
                  marginLeft: '-40px',
                  height: '40px',
                }}
                src={logo}
                alt="NextWrk Icon Png"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  </Outer>
);

export default LoadingIndicator;
