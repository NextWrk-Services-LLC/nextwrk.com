import React from 'react';

import H1 from 'components/H1';
import CenterText from 'components/CenterText';

import Img from './Img';
import H3 from './H3';
import Table from './Table';
import CenterTd from './CenterTd';
import services from './img/services.png';
import gig from './img/gigs.png';
import deal from './img/deals.png';

function Body() {
  return (
    <Table>
      <tbody>
        <tr>
          <CenterTd>
            <a href="/gigs">
              <Img src={gig} alt="NextWrk New Work Png" />
            </a>
          </CenterTd>
          <CenterTd>
            <a href="/services">
              <Img src={services} alt="NextWrk Relevant Services Png" />
            </a>
          </CenterTd>
          <td style={{ textAlign: 'center' }}>
            <a href="/deals">
              <Img src={deal} alt="NextWrk Wallet Stuffers Png" />
            </a>
          </td>
        </tr>
        <tr>
          <td style={{ width: '33%', verticalAlign: 'top' }}>
            <CenterText>
              <H1>New Work</H1>
            </CenterText>
            <H3>
              From charging scooters to professional remote freelancing, there
              are opportunities for any individual with any skill set to start
              earning on their own terms.
            </H3>
          </td>
          <td style={{ width: '33%', verticalAlign: 'top' }}>
            <CenterText>
              <H1>Relevant Services</H1>
            </CenterText>
            <H3>
              Whichever avenues you decide to pursue, we connect you with all
              the right tools so you can make faster, easier money.
            </H3>
          </td>
          <td style={{ width: '33%', verticalAlign: 'top' }}>
            <CenterText>
              <H1>Wallet Stuffers</H1>
            </CenterText>
            <H3>
              {
                "We've also compiled and created exclusive deals to reward you for trying out new jobs, products and services."
              }
            </H3>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Body;
