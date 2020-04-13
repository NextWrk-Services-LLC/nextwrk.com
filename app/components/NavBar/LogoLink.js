import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  float: left;
  margin: 0.25em 0.25em;
  padding: 0.3em 1em;
  max-height: 60px;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  cursor: pointer;

  &:active {
    background: #9dcdea;
  }
`;
