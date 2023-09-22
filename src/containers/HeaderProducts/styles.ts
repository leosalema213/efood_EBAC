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

  @media (max-width: 1024px) {
    padding: 60px 60px;
  }
  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
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

  @media (max-width: 780px) {
    padding: 10px 0 32px 20px;
    p {
      font-size: 20px;
    }

    h2 {
      font-size: 26px;
    }
  }
`
export const LinkRestaurantes = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelho};
  margin-right: 80px;
  @media (max-width: 780px) {
    margin-right: 60px;
  }
  @media (max-width: 670px) {
    position: absolute;
    left: 10px;
    top: 10px;
  }
`
