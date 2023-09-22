import { Header as H, HeaderContent } from './styles'
import logo from '../../assets/images/logo.png'
const Header = () => (
  <H>
    <HeaderContent className="containerLarge">
      <h1>
        <img src={logo} alt="EFOOD" />
      </h1>
      <p>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </p>
    </HeaderContent>
  </H>
)

export default Header
