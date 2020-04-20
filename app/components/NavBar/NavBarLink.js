import styled from 'styled-components';

export default styled.a`
  float: right;
  padding: 16px 10px;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: #fff;
  @media (max-width: 768px) {
    padding: 5px 5px;
    font-size: 14px;
  }

  &:hover {
    background: #9dcdea;
  }
`;
