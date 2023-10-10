import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  product: Product[]
  delivery: {
    receiver: string
    adress: {
      description?: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
    payment: {
      card: {
        name: string
        number: string
        code: number
        expires: {
          month: number
          year: number
        }
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantsList: builder.query<Restaurants[], void>({
      query: () => '/restaurantes'
    }),
    getRestaurant: builder.query<Restaurants, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body: body
      })
    })
  })
})

export const {
  useGetRestaurantsListQuery,
  useGetRestaurantQuery,
  usePurchaseMutation
} = api

export default api
