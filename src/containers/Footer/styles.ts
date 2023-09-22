import styled from 'styled-components'
import { cores } from '../../styles'

export const Footer = styled.header`
  background-color: ${cores.bege};

  p {
    text-align: center;
    font-size: 10px;
    line-heigh: 10px;
    color: ${cores.vermelho};
  }
  @media (max-width: 780px) {
    p {
      font-size: 14px;
    }
  }
`
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Links = styled.ul`
  display: flex;

  li {
    margin: 32px 4px 80px 4px;
  }
`
