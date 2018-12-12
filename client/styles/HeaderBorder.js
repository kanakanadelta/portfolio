import styled from 'styled-components';

export default styled.div`
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 10px;
  
  /* Responsive Design */

  @media only screen and (max-width: 900px) {
  }

  /* Animations */

  border-bottom: 1px solid #F9788C;
  @keyframes expand {
    0% {
      width: 2px
    }
    100% {
      width: 100%;
    }
  }

  animation: 1s ease-out 0s 1 expand;
  background: #333;
`