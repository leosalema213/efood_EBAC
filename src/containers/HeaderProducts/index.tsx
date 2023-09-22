import { Header, Hero, LinkRestaurantes } from './styles'
import eFoodLogo from '../../assets/images/logo.png'

export type Props = {
  name: string
  category?: string
  imagem?: string
}

const HeaderProducts = ({ imagem, category, name }: Props) => (
  <>
    <Header>
      <LinkRestaurantes to={'/'}>Restaurantes</LinkRestaurantes>
      <h1>
        <img src={eFoodLogo} alt="" />
      </h1>
      0 produto(s) no carrinho
    </Header>
    <Hero style={{ backgroundImage: `url(${imagem})` }}>
      <p>{category}</p>
      <h2>{name}</h2>
    </Hero>
  </>
)
export default HeaderProducts
