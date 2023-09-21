import HeaderProducts from '../../../containers/HeaderProducts'
import laDolceFundo from '../../../assets/images/LadolceFundo.png'
import ProductsList from '../../../containers/ProductsList'
import Produtos from '../../../models/Produtos'

import pizzaMarguerita from '../../../assets/images/produtos/Ladolce/pizza-marguerita.png'
import macarraoBolonhesa from '../../../assets/images/produtos/Ladolce/macarrao.png'
import polpettone from '../../../assets/images/produtos/Ladolce/polpettone.png'

const ProdutosLadolce: Produtos[] = [
  {
    name: 'Pizza Marguerita',
    description:
      ' A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade! ',
    image: pizzaMarguerita,
    id: 1
  },
  {
    name: 'Macarrão à bolonhesa',
    description:
      '  Sucesso na Itália, esse prato também incorporou-se à nossa culinária, fazendo-se presente na mesa dos brasileiros, um sucesso da gastronomia! ',
    image: macarraoBolonhesa,
    id: 2
  },
  {
    name: 'Polpettone',
    description:
      ' O Polpettone é uma espécie de bolinha de carne moída recheada com queijo, mas os recheios podem variar dependendo da região do país. ',
    image: polpettone,
    id: 3
  }
]

const HiokiSuchi = () => (
  <>
    <HeaderProducts
      key="La Dolce Vita Trattoria"
      name="La Dolce Vita Trattoria"
      category="Italiana"
      imagem={laDolceFundo}
    />
    <ProductsList produtos={ProdutosLadolce} />
  </>
)
export default HiokiSuchi
