import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductItem = styled.li`
  background-color: ${cores.vermelho};
  padding: 8px;
  color: ${cores.bege};
  max-width: 320px;
  margin-bottom: 32px;

  @media (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 670px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin-top: 8px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    margin: 8px 0;
  }
  img {
    width: 100%;
    height: 180px;
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
  color: #000;

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
  background-color: ${cores.vermelho};
  width: 100%;
  height: 344px;
  padding: 32px;
  color: ${cores.branco};
  position: relative;
  z-index: 1;

  > img {
    height: 280px;
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
