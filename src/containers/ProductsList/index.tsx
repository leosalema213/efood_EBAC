import { ProductContainer } from './styles'
import Product from '../../components/Products'
import { Restaurants } from '../../pages/Home'

type Props = {
  produtos: Restaurants
}

const ProductsList = ({ produtos }: Props) => {
  return (
    <ProductContainer className="containerLarge">
      {produtos.cardapio.map((p) => (
        <Product
          preco={p.preco}
          nome={p.nome}
          descricaoDoPrato={p.descricao}
          porcao={p.porcao}
          imagem={p.foto}
          key={p.id}
        />
      ))}
    </ProductContainer>
  )
}
export default ProductsList
