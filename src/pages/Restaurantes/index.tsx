import { useParams } from 'react-router-dom'

import HeaderProducts from '../../containers/HeaderProducts'
import ProductsList from '../../containers/ProductsList'

import { useGetRestaurantQuery } from '../../services/api'

const Restaurant = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (restaurant) {
    return (
      <>
        <HeaderProducts
          key={restaurant.id}
          name={restaurant.titulo}
          category={restaurant.tipo}
          image={restaurant.capa}
        />
        <ProductsList products={restaurant} />
      </>
    )
  }
  return <h4>carregando...</h4>
}
export default Restaurant
