import styled from 'styled-components';

export default styled.span`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: #FFE8EA;
  box-shadow: 5px 5px #FBCCD2; 
  border-radius: 5px;
  height: 80%;
  padding: 20px;

  h2, ul, span, p, a {
    font-family: 'Questrial', sans-serif;
  }
  
  ul, span, a {
    font-size: 24px;
    color: #000;
  }
  
  /* Animation */

  animation: appear 1s;

  @keyframes appear {
    0%    { 
      opacity: 0;
      height: 0%;
    };
    100%  { 
      opacity: 1;
      height: 75%;
    };
  }
`