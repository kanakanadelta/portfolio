import styled from 'styled-components'

export default styled.span`
  color: #F9788C;
  padding: 20px;

  :hover {
    cursor: pointer;
    color: #FFF;
    animation: nav-hover 1s;
    background-color: #CE4D5F;
    border-radius: 2.5px;
  }

  @keyframes nav-hover {
    0% {
      background-color: transparent;
    };
    50% {
      background-color: #D994C4;
    };
    100% {
      background-color: #CE4D5F;
    };
  }

  @media only screen and (max-width: 900px) {
    padding: 10px;
    text-align: center;
  }

`