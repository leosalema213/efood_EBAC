import styled from 'styled-components'
import background from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: url(${background});
  padding-bottom: 40px;
  padding-top: 60px;
  text-align: center;

  p {
    margin-top: 136px;
    font-size: 36px;
    font-weight: 900;
    line-heigh: 42px;
    color: ${cores.vermelho};
  }
`
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
