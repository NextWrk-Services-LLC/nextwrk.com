import styled from 'styled-components';

const Wrapper = styled.li`
  min-width: 27%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background: #fff;
  border: 1px solid #070600;
  border-radius: 5px;
  -moz-box-shadow: 1px 1px 3px grey;
  -webkit-box-shadow: 1px 1px 3px grey;
  box-shadow: 1px 1px 3px grey;
  @media (max-width: 768px) {
    padding: 15px 15px;
    min-width: 80%;
    max-width: 500px;
  }

  &:hover {
    background: #f7f7f7;
  }
`;

export default Wrapper;
