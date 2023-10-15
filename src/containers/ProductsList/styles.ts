import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  padding: 60px 0px 120px 0px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding-right: 20px;
    padding-left: 20px;
    column-gap: 10px;
  }
  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    padding: 60px 20px 120px 20px;
  }
`

export const Modal = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${colors.black};

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 1024px) {
    padding: 0px 20px;
  }
`
export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  column-gap: 24px;
  background-color: ${colors.red};
  width: 100%;
  height: 344px;
  padding: 32px;
  color: ${colors.white};
  position: relative;
  z-index: 1;

  > img {
    height: 280px;
    width: 280px;
  }
  h3 {
    font-size: 18px;
    margin-top: 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  button {
    display: inline-block;
  }

  > button {
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: transparent;
    border: none;

    img {
      width: 16px;
      height: 16px;
    }
  }
  @media (max-width: 740px) {
    height: auto;
    display: flex;
    flex-direction: column;

    h3 {
      margin-top: 16px;
    }

    > img {
      height: 240px;
    }
  }
`
