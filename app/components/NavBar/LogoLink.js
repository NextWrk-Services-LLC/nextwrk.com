import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  float: left;
  padding: 11px 0px;
  max-height: 60px;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 20px 0px;
  }

  &:active {
    background: #9dcdea;
  }
`;
