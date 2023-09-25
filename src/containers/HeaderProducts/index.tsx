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

const HeaderProducts = ({ imagem, category, name }: Props) => (
  <>
    <Header>
      <HeaderContainer className="containerLarge">
        <LinkRestaurantes to={'/'}>Restaurantes</LinkRestaurantes>
        <h1>
          <img src={eFoodLogo} alt="" />
        </h1>
        <p>0 produto(s) no carrinho</p>
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
export default HeaderProducts
