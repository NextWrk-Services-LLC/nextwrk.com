/**
 *
 * VecDisclose
 *
 */

import React, { memo, useState } from 'react';

import BodySpacing from 'components/BodySpacing';
import A from 'components/A';

import PLink from './PLink';

function VecDisclose() {
  const [show, toggleShow] = useState(false);

  return (
    <div>
      <PLink onClick={() => toggleShow(!show)}>Images Sources</PLink>
      {show ? (
        <BodySpacing>
          <A href="https://www.vecteezy.com/free-vector/working">
            Working Vectors by Vecteezy
          </A>
          <br />
          <A href="https://www.vecteezy.com/free-vector/cashback">
            Cashback Vectors by Vecteezy
          </A>
          <br />
          <A href="https://www.freepik.com/free-photos-vectors/people">
            People vector created by freepik - www.freepik.com
          </A>
        </BodySpacing>
      ) : (
        ''
      )}
    </div>
  );
}

VecDisclose.propTypes = {};

export default memo(VecDisclose);
