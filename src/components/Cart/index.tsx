import { useDispatch, useSelector } from 'react-redux'

import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formataPreco } from '../../containers/ProductsList'
import {
  CartContainer,
  CartDescription,
  CartItem,
  Overlay,
  SideBar
} from './style'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
    console.log('cliquei')
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
                <img onClick={() => removeItem(item.id)} src={lixeira} alt="" />
              </div>
            </CartItem>
          ))}
        </ul>
        <CartDescription>
          <p>Valor total</p> <span>{formataPreco(getTotalPrice())}</span>
          <button className="buttonAdicionar">Continuar com a entrega</button>
        </CartDescription>
      </SideBar>
    </CartContainer>
  )
}
export default Cart
