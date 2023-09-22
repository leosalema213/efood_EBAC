import styled from 'styled-components'

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  padding: 80px 20px 120px 20px;

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    padding: 80px 80px 120px 80px;
  }
  @media (max-width: 440px) {
    padding: 80px 20px 120px 20px;
  }
`
