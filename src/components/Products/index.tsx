import { ProductItem } from './styles'

type Props = {
  image: string
  name: string
  dishDescription: string
}

const Product = ({ image, dishDescription, name }: Props) => {
  const getDescripition = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  return (
    <ProductItem>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{getDescripition(dishDescription)}</p>
      <a href="#" className="buttonAdd">
        Mais detalhes
      </a>
    </ProductItem>
  )
}
export default Product
