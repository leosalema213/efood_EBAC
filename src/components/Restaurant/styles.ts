import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  color: ${cores.vermelho};
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  img {
    width: 100%;
    max-height: 200px;
  }

  p {
    margin: 16px 0;
    height: 100px;
    overflow-y: auto;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-left: 8px;
  }
`
export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 18px;
`
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 780px) {
    h2 {
      font-size: 18px;
    }
  }
`
export const CardDescription = styled.div`
  padding: 8px;
  border-right: 1px solid ${cores.vermelho};
  border-left: 1px solid ${cores.vermelho};
  border-bottom: 1px solid ${cores.vermelho};
`
export const Botao = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 4px 6px;
`
