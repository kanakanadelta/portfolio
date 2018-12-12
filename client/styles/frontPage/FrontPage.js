import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`