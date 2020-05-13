import styled from 'styled-components';

const Inner = styled.div`
  margin: auto;
  background: white;
  border: 1px solid #070600;
  border-radius: 20px;
  margin: 20px 40px;
  padding: 20px;
  @media (max-width: 768px) {
    margin: 5px 10px;
    padding: 5px;
  }
`;

export default Inner;
