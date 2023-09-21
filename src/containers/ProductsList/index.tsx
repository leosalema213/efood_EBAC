import { ProductContainer } from './styles'
import Product from '../../components/Products'
import Produtos from '../../models/Produtos'

type Props = {
  produtos: Produtos[]
}

const ProductsList = ({ produtos }: Props) => (
  <ProductContainer className="containerLarge">
    {produtos.map((p) => (
      <Product
        nomeDoPrato={p.name}
        descricaoDoPrato={p.description}
        imagem={p.image}
        key={p.id}
      />
    ))}
  </ProductContainer>
)
export default ProductsList
