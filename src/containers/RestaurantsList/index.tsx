import { Restaurants } from '../../pages/Home'
import RestaurantCard from '../../components/Restaurant'
import { ListContainer } from './styles'

type Props = {
  restaurants: Restaurants[]
}
const RestaurantsList = ({ restaurants }: Props) => {
  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ListContainer className="containerLarge">
        {restaurants.map((r) => (
          <RestaurantCard
            key={r.id}
            name={r.titulo}
            description={r.descricao}
            infos={r.tipo}
            image={r.capa}
            rating={r.avaliacao}
            link={`/restaurants/${r.id}`}
          />
        ))}
      </ListContainer>
    </>
  )
}
export default RestaurantsList
