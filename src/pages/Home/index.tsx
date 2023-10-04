import RestaurantsList from '../../containers/RestaurantsList'
import Header from '../../containers/Header'
import { useGetRestaurantsListQuery } from '../../services/api'

export interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurants = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsListQuery()
  if (restaurants) {
    return (
      <>
        <Header />
        <RestaurantsList restaurants={restaurants} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Home
