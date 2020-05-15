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
            <H1>New Work</H1>
            <H3>
              From charging scooters to professional remote freelancing, there
              are opportunities for any individual with any skill set to start
              earning on their own terms.
            </H3>
          </td>
        </tr>
        <tr>
          <td>
            <H1>Relevant Services</H1>
            <H3>
              Whichever avenues you decide to pursue, we connect you with all
              the right tools so you can make faster, easier money.
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
            <H1>Wallet Stuffers</H1>
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

export default MobileBody;
