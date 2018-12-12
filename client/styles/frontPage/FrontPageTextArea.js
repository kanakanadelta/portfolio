import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    /* Responsive Design */
    @media only screen and (max-width: 900px) {
        align-items: center;
      }
`