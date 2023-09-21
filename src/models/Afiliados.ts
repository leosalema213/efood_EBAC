class Afiliados {
  name: string
  description: string
  image: string
  rating: number
  infos: string[]
  id: number

  constructor(
    name: string,
    description: string,
    categoty: string,
    image: string,
    rating: number,
    infos: string[],
    id: number
  ) {
    this.name = name
    this.description = description
    this.image = image
    this.rating = rating
    this.infos = infos
    this.id = id
  }
}

export default Afiliados
