import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-block;
  padding: 0.25em 0.25em;
  margin-right: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  cursor: pointer;

  &:active {
    background: #9dcdea;
  }
`;
