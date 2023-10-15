import styled from 'styled-components'
import background from '../../assets/images/fundo.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  background-image: url(${background});
  padding-bottom: 40px;
  padding-top: 60px;
  text-align: center;

  h2 {
    margin-top: 136px;
    font-size: 36px;
    font-weight: 900;
    line-heigh: 42px;
    color: ${colors.red};
  }

  @media (max-width: 780px) {
    padding: 60px 10px 40px 10px;
    h2 {
      margin-top: 80px;
      font-size: 22px;
    }
  }
`
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
