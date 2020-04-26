import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  height: 80px;
  border-radius: 10px;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

export default Img;
