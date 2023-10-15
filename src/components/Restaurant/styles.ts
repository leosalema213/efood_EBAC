import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  color: ${colors.red};
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
    overflow-y: auto;
    font-size: 14px;
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
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${colors.red};
  border-left: 1px solid ${colors.red};
  border-bottom: 1px solid ${colors.red};
`
export const Botao = styled(Link)`
  width: 88px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.red};
  color: ${colors.beige};
  padding: 4px 6px;
`
