import Restaurants from '../../models/Restaurants'
import RestaurantCard from '../../components/Restaurant'
import { ListContainer } from './styles'

type Props = {
  restaurants: Restaurants[]
}
const RestaurantsList = ({ restaurants }: Props) => (
  <>
    <ListContainer className="containerLarge">
      {restaurants.map((r) => (
        <RestaurantCard
          linkProducts={r.linkProducts}
          key={r.id}
          name={r.name}
          description={r.description}
          infos={r.infos}
          image={r.image}
          rating={r.rating}
        />
      ))}
    </ListContainer>
  </>
)
export default RestaurantsList
