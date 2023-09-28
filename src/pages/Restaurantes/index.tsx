import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import HeaderProducts from '../../containers/HeaderProducts'
import ProductsList from '../../containers/ProductsList'
import { Restaurants } from '../Home'

const Restaurant = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurants>()
  const [produtos, setProdutos] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [id])

  if (!restaurant) {
    return <h3>carregando...</h3>
  }

  if (!produtos) {
    return <h3>carregando o cardapio...</h3>
  }

  return (
    <>
      <HeaderProducts
        key={restaurant.id}
        name={restaurant.titulo}
        category={restaurant.tipo}
        imagem={restaurant.capa}
      />
      <ProductsList produtos={produtos} />
    </>
  )
}
export default Restaurant
