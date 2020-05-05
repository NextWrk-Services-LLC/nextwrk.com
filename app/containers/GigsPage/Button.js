import styled from 'styled-components';

const Button = styled.button`
  border-radius: 60px;
  border: none;
  background: #3b9ad5;
  color: #fff;
  padding: 0px 20px;
  outline: none;
  font-weight: bold;
  &:hover {
    box-shadow: 0px 0px 3px gray;
    cursor: pointer;
  }
`;

export default Button;
