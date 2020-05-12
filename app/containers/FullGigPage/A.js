import styled from 'styled-components';

const A = styled.a`
  font-size: 32px;
  color: #3b9ad5;
  font-weight: normal;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default A;
