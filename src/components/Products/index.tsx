import { ProductItem } from './styles'

type Props = {
  imagem: string
  nome: string
  descricaoDoPrato: string
}

const Product = ({ imagem, descricaoDoPrato, nome }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 132) {
      return descricao.slice(0, 120) + '...'
    }
    return descricao
  }

  return (
    <ProductItem>
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>{getDescricao(descricaoDoPrato)}</p>
      <a href="#" className="buttonAdicionar">
        Mais detalhes
      </a>
    </ProductItem>
  )
}
export default Product
