import styled from 'styled-components';

export default styled.div`
  background-repeat: no-repeat;
  -webkit-animation-duration: 1;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;


  @-webkit-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
`