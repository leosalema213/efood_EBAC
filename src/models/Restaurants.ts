class Restaurants {
  name: string
  description: string
  image: string
  rating: number
  infos: string[]
  id: number
  linkProducts: string

  constructor(
    name: string,
    description: string,
    categoty: string,
    image: string,
    rating: number,
    infos: string[],
    id: number,
    linkProducts: string
  ) {
    this.name = name
    this.description = description
    this.image = image
    this.rating = rating
    this.infos = infos
    this.id = id
    this.linkProducts = linkProducts
  }
}

export default Restaurants
