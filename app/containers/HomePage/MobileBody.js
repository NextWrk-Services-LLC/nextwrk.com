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
              From charging scooters to professional remote freelancing - Gig
              jobs let you work where you want, when you want. <br />
              Discover all these opportunities so you can start working on your
              own terms.
            </H3>
          </td>
        </tr>
        <tr>
          <td>
            <H1>New Services</H1>
            <H3>
              Companies are constantly developing new apps and services to make
              gig jobs easier and more lucrative. <br /> Discover all these
              services so you can make faster, easier money.
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
              We have compiled and created exclusive deals for trying out new
              jobs and services. <br /> Sign up through NextWrk and ensure you
              are never leaving any money on the table.
            </H3>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MobileBody;
