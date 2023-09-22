import HeaderProducts from '../../../containers/HeaderProducts'
import ProductsList from '../../../containers/ProductsList'
import Produtos from '../../../models/Produtos'

import hiokiSushiFundo from '../../../assets/images/hiokiSuchi.png'
import sushi from '../../../assets/images/produtos/hiokiSushi/sushi.png'
import sashimi from '../../../assets/images/produtos/hiokiSushi/sashimi.png'
import tempura from '../../../assets/images/produtos/hiokiSushi/tempura.png'

const ProdutosHiokiSushi: Produtos[] = [
  {
    name: 'Sushi',
    description:
      ' Esta típica comida japonesa é um bolinho de arroz enrolado com uma alga. O sushi traz diferentes ingredientes em seu interior, entre eles frutos do mar, peixe e vegetais.',
    image: sushi,
    id: 1
  },
  {
    name: 'Sashimi',
    description:
      '  O prato traz tiras finas de peixe cru, geralmente salmão, atum e outros peixes. Não é consumido com arroz, mas pode ser acompanhado de alga, molho shoyu e wasabi. ',
    image: sashimi,
    id: 2
  },
  {
    name: 'Tempurá',
    description:
      ' o tempurá se tornou um dos pratos clássicos da comida japonesa. A iguaria de massa fluida, feita à base de farinha de trigo e frita, pode ser composta apenas de legumes entre outros. ',
    image: tempura,
    id: 3
  }
]

const HiokiSushi = () => (
  <>
    <HeaderProducts
      key="Hioki Sushi"
      name="Hioki Sushi"
      category="Japonesa"
      imagem={hiokiSushiFundo}
    />
    <ProductsList produtos={ProdutosHiokiSushi} />
  </>
)
export default HiokiSushi
