import styled from 'styled-components';

export default styled.div`

  display: flex;
  justify-content: flex-start;

  background-repeat: no-repeat;
  -webkit-animation-duration: 2;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @-webkit-keyframes drop-item-two {
    0% {
      transform: translateY(-1500px);
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    95% {
      transform: translateY(10px);
    }
    97.5% {
      transform: translateY(7.5px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes drop-item-two {
    0% {
      transform: translateY(-1500px);
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    95% {
      transform: translateY(10px);
    }
    97.5% {
      transform: translateY(7.5px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  -webkit-animation-name: drop-item-two;
  animation-name: drop-item-two;
`