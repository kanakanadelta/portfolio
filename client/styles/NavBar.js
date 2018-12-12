import styled from 'styled-components'

export default styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-family: 'Nunito', sans-serif;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding: 2.5px;
  }
`