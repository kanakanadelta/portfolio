import styled from 'styled-components';

export default styled.span`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;


  h2, ul, span, p, a {
    font-family: 'Questrial', sans-serif;
  }
  
  ul, span, a {
    font-size: 24px;
    color: #000;
  }
  
  /* Animation */

  animation: appear-text-trans 2.5s;

  @keyframes appear-text-trans {
    0%    { 
      opacity: 0;
    };
    90%    { 
      opacity: 0;
    };
    100%  { 
      opacity: 1;
    };
  }
`