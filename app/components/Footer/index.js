import React from 'react';

import A from 'components/A';
import Wrapper from './Wrapper';

function Footer() {
  return (
    <Wrapper>
      <section>NextWrk Services LLC</section>
      <section>
        Made with love by{' '}
        <A href="https://github.com/markfoster314">Mark Foster</A>
      </section>
    </Wrapper>
  );
}

export default Footer;
