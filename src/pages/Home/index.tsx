import AfiliadosList from '../../containers/AfiliadosList'
import Header from '../../containers/Header'
import Afiliados from '../../models/Afiliados'

import restHioki from '../../assets/images/hiokiSuchi.png'
import restLaDolce from '../../assets/images/laDolce.png'

const restaurantes: Afiliados[] = [
  {
    name: 'Hioki Sushi ',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: restHioki,
    infos: ['Destaque da semanal', 'Japonesa'],
    rating: 4.9,
    id: 1
  },
  {
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já !',
    image: restLaDolce,
    infos: ['Italiana'],
    rating: 4.6,
    id: 2
  },
  {
    name: 'Hioki Sushi ',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: restHioki,
    infos: ['Destaque da semanal', 'Japonesa'],
    rating: 4.9,
    id: 1
  },
  {
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já !',
    image: restLaDolce,
    infos: ['Italiana'],
    rating: 4.6,
    id: 2
  }
]

const Home = () => (
  <>
    <Header />
    <AfiliadosList afiliados={restaurantes} />
  </>
)

export default Home
