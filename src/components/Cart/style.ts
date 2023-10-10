import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  maxWidht?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  display: none;
  justify-content: end;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.vermelho};
  width: 360px;
  padding: 32px 8px 0 8px;
  z-index: 1;

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
  button {
    width: 100%;
  }
`
export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 8px 8px 12px 8px;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  // margin-bottom: 16px;

  h3 {
    display: block;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  img {
    height: 80px;
    width: 80px;
    margin-right: 8px;
  }
  div > img {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0;
    bottom: 8px;
    cursor: pointer;
  }
`
export const CartDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
  color: ${cores.bege};
  font-size: 14px;
  font-weight: 700;

  button {
    width: 100%;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 700;
  }
`
export const Form = styled.form`
  h2 {
    font-size: 16px;
    font-weight: 700;
    color: ${cores.bege};
    margin-bottom: 16px;
  }
  button {
    width: 100%;
    margin-bottom: 8px;
  }
  .magin-bottom {
    margin-bottom: 24px;
  }
`
export const InputGroup = styled.div<Props>`
  max-width: ${(props) => props.maxWidht || 'auto'};
  flex: auto;

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.bege};
  }
  input {
    display: block;
    width: 100%;
    padding: 8px;
    background-color: ${cores.bege};
    border: 1px solid ${cores.bege};
    margin-top: 8px;
    margin-bottom: 8px;

    &.error {
      border: 2px solid red;
    }
  }
`
export const InputGrouping = styled.div`
  display: flex;
  column-gap: 30px;
`
