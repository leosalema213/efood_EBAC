import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { cores } from '../../styles'
import fundoHeader from '../../assets/images/fundo.png'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${cores.vermelho};
  font-size: 18px;

  padding: 60px 0px;
  font-weight: bold;

  @media (max-width: 1024px) {
    padding: 4S0px 40px;
  }
  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`
export const Header = styled.div`
  background-image: url(${fundoHeader});
`
export const LinkRestaurantes = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelho};

  @media (max-width: 780px) {
    margin-right: 60px;
  }
  @media (max-width: 670px) {
    position: absolute;
    left: 10px;
    top: 10px;
  }
`
export const Hero = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const HeroContainer = styled.div`
  color: #ffffff;
  padding: 24px 0 32px 0px;

  p {
    font-size: 32px;
    font-weight: 100;
  }

  h2 {
    margin-top: 156px;
    font-weight: 900;
    font-size: 32px;
  }
  @media (max-width: 1024px) {
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 780px) {
    padding: 10px 0 32px 20px;
    p {
      font-size: 20px;
    }

    h2 {
      font-size: 26px;
      margin-top: 100px;
    }
  }
`
