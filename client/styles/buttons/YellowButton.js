import styled from 'styled-components';

export default styled.span`
  background-color: #FFE1AE;
  box-shadow: 2.5px 2.5px #D9A751;
  border-radius: 5px;
  padding: 10px;

  :hover {
    cursor: pointer;
  }

  :active {
    margin-top: 2.5px;
    margin-left: 2.5px;
    margin-bottom: -2.5px;
    margin-right: -2.5px;
    
    background-color: #D88651;
    box-shadow: 0px 0px #D9A751;
  }
`