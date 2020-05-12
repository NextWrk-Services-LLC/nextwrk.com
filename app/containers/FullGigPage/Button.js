import styled from 'styled-components';

const Button = styled.button`
  border-radius: 60px;
  border: none;
  background: #3b9ad5;
  color: #fff;
  padding: 10px 20px;
  outline: none;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    box-shadow: 0px 0px 3px gray;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-weight: normal;
    font-size: 16px;
  }
`;

export default Button;
