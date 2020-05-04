import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background: #4da3d9;
  position: fixed;
  z-index: 2;
  @media (max-width: 768px) {
    position: static;
    border-bottom: 1px solid #4da3d9;
  }
`;

export default Wrapper;
