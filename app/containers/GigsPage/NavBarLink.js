import styled from 'styled-components';

export default styled.p`
  display: inline-block;
  padding: 11px 10px;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: #070600;
  @media (max-width: 768px) {
    padding: 5px 5px;
    font-size: 10px;
  }

  &:hover {
    background: #3b9ad5;
    color: #ffffff;
  }
`;
