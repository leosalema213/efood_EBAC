import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductItem = styled.li`
  background-color: ${cores.vermelho};
  padding: 8px;
  color: ${cores.bege};
  max-width: 320px;
  margin-bottom: 32px;

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
`
