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
              <Img src={gig} alt="Gig Vector" />
            </a>
          </CenterTd>
          <CenterTd>
            <a href="/services">
              <Img src={services} alt="Services Vector" />
            </a>
          </CenterTd>
          <td style={{ textAlign: 'center' }}>
            <a href="/deals">
              <Img src={deal} alt="Deals Vector" />
            </a>
          </td>
        </tr>
        <tr>
          <td style={{ width: '33%', verticalAlign: 'top' }}>
            <CenterText>
              <H1>Gig Work</H1>
            </CenterText>
            <H3>
              From charging scooters to professional remote freelancing - Gig
              jobs let you work where you want, when you want. <br /> <br />
              We connect you with all these opportunities so you can start
              working on your own terms.
            </H3>
          </td>
          <td style={{ width: '33%', verticalAlign: 'top' }}>
            <CenterText>
              <H1>New Services</H1>
            </CenterText>
            <H3>
              Companies are constantly developing new apps and services to make
              gig jobs easier and more lucrative. <br /> <br /> We connect you
              with all these services so you can make faster, easier money.
            </H3>
          </td>
          <td style={{ width: '33%', verticalAlign: 'top' }}>
            <CenterText>
              <H1>Deals</H1>
            </CenterText>
            <H3>
              We have compiled and created exclusive deals for trying out new
              jobs and services. <br /> <br /> Sign up through NextWrk and
              ensure you are never leaving any money on the table.
            </H3>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Body;
