import styled from 'styled-components';

const ASm = styled.a`
  color: #000000;
  font-weight: normal;
  text-decoration: underline;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default ASm;
