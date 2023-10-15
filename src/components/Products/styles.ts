import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductItem = styled.div`
  background-color: ${colors.red};
  padding: 8px;
  color: ${colors.beige};
  max-width: 320px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 670px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin-top: 8px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    margin: 8px 0;
  }
  img {
    width: 100%;
    height: 180px;
  }
`
