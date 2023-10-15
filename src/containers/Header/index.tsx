import logo from '../../assets/images/logo.png'

import * as S from './styles'

const Header = () => (
  <S.HeaderContainer>
    <S.HeaderContent className="containerLarge">
      <h1>
        <img src={logo} alt="EFOOD" />
      </h1>
      <h2>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </h2>
    </S.HeaderContent>
  </S.HeaderContainer>
)

export default Header
