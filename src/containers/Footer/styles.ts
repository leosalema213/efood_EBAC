import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.header`
  background-color: ${colors.beige};
  margin-top: 120px;
  p {
    text-align: center;
    font-size: 10px;
    line-heigh: 10px;
    color: ${colors.red};
  }
  @media (max-width: 780px) {
    margin-top: 80px;
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

    @media (max-width: 780px) {
      margin: 16px 4px 40px 4px;
  }
`
