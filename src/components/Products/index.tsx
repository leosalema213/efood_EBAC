import { ProductItem } from './styles'
import pizzaMarguerita from '../../assets/images/produtos/Ladolce/pizza-marguerita.png'

type Props = {
  imagem: string
  nomeDoPrato: string
  descricaoDoPrato: string
}

const Product = ({ imagem, descricaoDoPrato, nomeDoPrato }: Props) => (
  <ProductItem>
    <img src={imagem} alt={nomeDoPrato} />
    <h3>{nomeDoPrato}</h3>
    <p>{descricaoDoPrato}</p>
    <a href="#" className="buttonAdicionar">
      Adicionar ao carrinho
    </a>
  </ProductItem>
)
export default Product
