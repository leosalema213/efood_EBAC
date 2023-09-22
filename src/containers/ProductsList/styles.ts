import styled from 'styled-components'

export const ProductContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  padding: 60px 0px 120px 0px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding-right: 20px;
    padding-left: 20px;
    column-gap: 10px;
  }
  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    padding: 60px 60px 120px 60px;
  }
`
