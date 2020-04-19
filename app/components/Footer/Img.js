import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  margin: 5px;
  height: 25px;
  @media (max-width: 768px) {
    margin: 2px;
    height: 18px;
  }
`;

export default Img;
