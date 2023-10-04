import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import {
  HeaderContainer,
  Hero,
  LinkRestaurantes,
  Header,
  HeroContainer
} from './styles'
import eFoodLogo from '../../assets/images/logo.png'

export type Props = {
  name: string
  category?: string
  imagem?: string
}

const HeaderProducts = ({ imagem, category, name }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  return (
    <>
      <Header>
        <HeaderContainer className="containerLarge">
          <LinkRestaurantes to={'/'}>Restaurantes</LinkRestaurantes>
          <h1>
            <img src={eFoodLogo} alt="" />
          </h1>
          <p onClick={() => dispatch(open())}>
            {items.length} produto(s) no carrinho
          </p>
        </HeaderContainer>
      </Header>
      <Hero style={{ backgroundImage: `url(${imagem})` }}>
        <HeroContainer className="containerLarge">
          <p>{category}</p>
          <h2>{name}</h2>
        </HeroContainer>
      </Hero>
    </>
  )
}
export default HeaderProducts
