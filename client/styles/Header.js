import styled from 'styled-components';

export default styled.div`
  padding: 1px 5px;
  margin-left: 1%;
  margin-right: 1%;

  display: flex;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    .headerName {
      diplay: flex;
      justify-content: center;
    }
  }

  background-repeat: no-repeat;
  -webkit-animation-duration: 10s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;


 @-webkit-keyframes fadeInDown {
    0% {
       opacity: 0;
       -webkit-transform: translateY(-20px);
    }
    100% {
       opacity: 1;
       -webkit-transform: translateY(0);
    }
 }
 
 @keyframes fadeInDown {
    0% {
       opacity: 0;
       transform: translateY(-20px);
    }
    100% {
       opacity: 1;
       transform: translateY(0);
    }
 }
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
`;