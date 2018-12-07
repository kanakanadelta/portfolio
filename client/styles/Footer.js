import styled from 'styled-components';

export default styled.div`
  border-top: 3px dotted #EBEBDE;
  padding: 45px 0px;

  font-family: 'Nunito', sans-serif;

  text-align: center;
  a {
    color: #F7A3AF;
    text-shadow: .5px 0.5px #A0822A;
  }

  background-repeat: no-repeat;
  -webkit-animation-duration: 10s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;


 @-webkit-keyframes fadeInUp {
    0% {
       opacity: 0;
       -webkit-transform: translateY(20px);
    }
    100% {
       opacity: 1;
       -webkit-transform: translateY(0);
    }
 }
 
 @keyframes fadeInUp {
    0% {
       opacity: 0;
       transform: translateY(20px);
    }
    100% {
       opacity: 1;
       transform: translateY(0);
    }
 }
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
`