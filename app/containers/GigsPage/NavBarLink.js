import styled from 'styled-components';

export default styled.p`
  display: inline-block;
  padding: 0.25em 0.25em;
  margin: 0.5em 0.25em;
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

  &:hover {
    background: #3b9ad5;
    color: #ffffff;
  }
`;
