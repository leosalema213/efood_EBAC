import styled from 'styled-components'
import { cores } from '../../styles'
import fundoHeader from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${cores.vermelho};
  background-image: url(${fundoHeader});
  padding: 60px 170px;
  font-weight: bold;
`
export const Hero = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-size: 32px;
  color: #fff;
  padding: 25px 0 32px 170px;

  p {
    font-weight: 100;
  }

  h2 {
    margin-top: 156px;
  }
`
export const LinkRestaurantes = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelho};
  margin-right: 80px;
`
