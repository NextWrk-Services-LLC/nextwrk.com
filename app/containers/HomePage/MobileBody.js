import React from 'react';

import H1 from 'components/H1';

import Img from './Img';
import H3 from './H3';
import Table from './Table';
import TdImg from './TdImg';
import services from './img/services.png';
import gig from './img/gigs.png';
import deal from './img/deals.png';

function MobileBody() {
  return (
    <Table>
      <tbody>
        <tr>
          <TdImg>
            <a href="/gigs">
              <Img src={gig} alt="Gig Vector" />
            </a>
          </TdImg>
          <td>
            <H1>Gig Work</H1>
            <H3>
              From charging scooters to professional freelancing - Gig jobs let
              you work where you want, when you want.
            </H3>
          </td>
        </tr>
        <tr>
          <td>
            <H1>New Services</H1>
            <H3>
              A multitude of apps and services created specifically for gig
              workers - Make your jobs easier and more lucrative
            </H3>
          </td>
          <TdImg>
            <a href="/services">
              <Img src={services} alt="Services Vector" />
            </a>
          </TdImg>
        </tr>
        <tr>
          <TdImg>
            <a href="/deals">
              <Img src={deal} alt="Deals Vector" />
            </a>
          </TdImg>
          <td>
            <H1>Deals</H1>
            <H3>
              Exclusive deals for trying out new jobs and services - Ensure you
              are never leaving any money on the table.
            </H3>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MobileBody;
