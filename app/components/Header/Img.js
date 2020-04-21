import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  width: 100%;
  margin: 0 auto;
  display: block;
  border: 1px solid #070600;
  box-shadow: 4px 4px 3px grey;
  @media (max-width: 768px) {
    border: 0px solid #070600;
    box-shadow: 0px 0px 0px grey;
  }
`;

export default Img;
