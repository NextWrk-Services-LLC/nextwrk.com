import styled from 'styled-components';

const Wrapper = styled.li`
  min-width: 27%;
  max-width: 330px;
  height: 100%;
  padding: 10px 20px;
  background: #fff;
  border: 1px solid #070600;
  border-radius: 5px;
  -moz-box-shadow: 1px 1px 3px grey;
  -webkit-box-shadow: 1px 1px 3px grey;
  box-shadow: 1px 1px 3px grey;
  @media (max-width: 768px) {
    padding: 5px 10px;
    max-width: 150px;
  }
`;

export default Wrapper;
