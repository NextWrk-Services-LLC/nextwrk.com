import styled from 'styled-components';

const PLink = styled.p`
  color: #3b9ad5;
  margin: 0;
  padding: 0;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default PLink;
