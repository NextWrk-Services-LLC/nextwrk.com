import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  margin: 10px;
  height: 25px;
  @media (max-width: 768px) {
    margin: 10px;
    height: 22px;
  }
`;

export default Img;
