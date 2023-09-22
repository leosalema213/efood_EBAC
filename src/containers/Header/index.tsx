import { Header as H, HeaderContent } from './styles'
import logo from '../../assets/images/logo.png'
const Header = () => (
  <H>
    <HeaderContent className="containerLarge">
      <h1>
        <img src={logo} alt="EFOOD" />
      </h1>
      <h2>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </h2>
    </HeaderContent>
  </H>
)

export default Header
