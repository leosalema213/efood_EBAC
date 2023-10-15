import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twiiter from '../../assets/images/twiiter.png'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <S.FooterContent className="containerMedium">
      <h1>
        <img src={logo} alt="EFOOD" />
      </h1>
      <S.Links>
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
      </S.Links>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </S.FooterContent>
  </S.FooterContainer>
)

export default Footer
