import { FooterContent, Footer as F, Links } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twiiter from '../../assets/images/twiiter.png'

const Footer = () => (
  <F>
    <FooterContent className="containerMedium">
      <h1>
        <img src={logo} alt="EFOOD" />
      </h1>
      <Links>
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twiiter} alt="Instagram" />
          </a>
        </li>
      </Links>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterContent>
  </F>
)

export default Footer
