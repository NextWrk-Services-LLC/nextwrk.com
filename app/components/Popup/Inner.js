import styled from 'styled-components';

const Inner = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 10%;
  margin: auto;
  background: white;
  border: 1px solid #070600;
  border-radius: 20px;
  z-index: 6;
  padding: 20px 40px;
  @media (max-width: 768px) {
    left: 2%;
    right: 2%;
    top: 15%;
    padding: 5px 5px;
  }
`;

export default Inner;
