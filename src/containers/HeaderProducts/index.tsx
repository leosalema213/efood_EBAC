import { useDispatch, useSelector } from 'react-redux'

import eFoodLogo from '../../assets/images/logo.png'

import * as S from './styles'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export type Props = {
  name: string
  category?: string
  image?: string
}

const HeaderProducts = ({ image, category, name }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  return (
    <>
      <S.Header>
        <S.HeaderContainer className="containerLarge">
          <S.LinkRestaurantes to={'/'}>Restaurantes</S.LinkRestaurantes>
          <h1>
            <img src={eFoodLogo} alt="" />
          </h1>
          <S.Logo to={'/'}>
            <img src={eFoodLogo} alt="" />
          </S.Logo>
          <p onClick={() => dispatch(open())}>
            {items.length} produto(s) no carrinho
          </p>
        </S.HeaderContainer>
      </S.Header>
      <S.Hero style={{ backgroundImage: `url(${image})` }}>
        <S.HeroContainer className="containerLarge">
          <p>{category}</p>
          <h2>{name}</h2>
        </S.HeroContainer>
      </S.Hero>
    </>
  )
}
export default HeaderProducts
