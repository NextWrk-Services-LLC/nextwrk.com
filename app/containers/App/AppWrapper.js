import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  padding: 70px 16px;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0px 0px;
  }
`;

export default AppWrapper;
