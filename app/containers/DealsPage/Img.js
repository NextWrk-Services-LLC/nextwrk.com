import styled from 'styled-components';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  width: 100%;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
  box-shadow: 0px 0px 5px grey;
  @media (max-width: 768px) {
    border: 0px solid #070600;
    box-shadow: 0px 0px 0px grey;
    border-radius: 0px;
  }
`;

export default Img;
