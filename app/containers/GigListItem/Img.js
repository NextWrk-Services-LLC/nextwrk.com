import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  height: 50px;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
  @media (max-width: 768px) {
    height: 25px;
  }
`;

export default Img;
