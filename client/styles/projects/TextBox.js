import styled from 'styled-components';

export default styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: #FFE8EA;
  box-shadow: 5px 5px #FBCCD2; 
  border-radius: 5px;
  padding: 20px;
  margin: 50px;
  height: 80%;
  width: 100%;

  h2, ul, span, p, a {
    font-family: 'Questrial', sans-serif;
    color: #000;
  }


  /* Button */

  #resume-button {
    background-color: #FFE1AE;
    box-shadow: 2.5px 2.5px #D9A751;
    border-radius: 5px;
    padding: 10px;

    font-weight: bold;

    :hover {
      cursor: pointer;
      border: 2px solid #FFF;
      padding: 8px;
    }

    :active {
      margin-top: 2.5px;
      margin-left: 2.5px;
      margin-bottom: -2.5px;
      margin-right: -2.5px;
      
      background-color: #D88651;
      box-shadow: 0px 0px #D9A751;
    }
  }

  /* Animation */

  animation: appear-project-text 1s;

  @keyframes appear-project-text {
    0%    { 
      opacity: 0;
      height: 0%;
    };
    100%  { 
      opacity: 1;
      height: 80%;
    };
  }
`