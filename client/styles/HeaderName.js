import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;

  width: 50%;
  padding: 1px 5px;
  h2 {
    font-family: 'Permanent Marker', cursive;
    font-size: 48px;
    color: #F17B8B;

    :hover {
      font-color: #FFF;
      padding-left: 20px;
      padding-right: 20px;
      cursor: pointer;
      color: #FFF;
      background-color: #CE4D5F;
      border-radius: 2.5px;
      animation: nav-hover 1s;
    }

    /* Responsive Styling */
  
    @media only screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }

    /* Animations */

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
  }
`;
